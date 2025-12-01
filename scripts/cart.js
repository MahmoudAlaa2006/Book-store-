let cart = JSON.parse(localStorage.getItem('cart')) || {}

let globalData = null

async function loadGlobal() {
    try {
        const res = await fetch('../assets/global.json')
        globalData = await res.json()
        renderCart()
    } catch (e) {
        console.error('Failed to load global.json', e)
        const cartDiv = document.getElementById('cart')
        if (cartDiv) cartDiv.textContent = 'Failed to load data'
    }
}

function resolveImagePath(imgPath) {
    // global.json uses paths relative to itself, so make them relative to pages/cart.html
    return '../assets/' + imgPath.replace(/^(\.\/)+/, '')
}

function renderCart() {
    const cartDiv = document.getElementById('cart')
    if (!cartDiv) return

    cartDiv.innerHTML = ''

    if (!globalData) {
        cartDiv.textContent = 'Loading...'
        return
    }

    const ids = Object.keys(cart)
    if (ids.length === 0) {
        cartDiv.innerHTML = `
        <p>Cart is empty</p>
        `
        return
    }

    cartDiv.innerHTML = ids.map(bookId => {
        const book = globalData.books?.[bookId]
        if (!book) return ''

        const quantity = cart[bookId] || 0
        const imgSrc = resolveImagePath(book.image || '')
        const bookName = book.name || bookId
        const price = book.price ?? 0

        return `
            <div class="item">
                <img src="${imgSrc}" alt="${bookName}">
                <div class="info">
                    <p class="title">${bookName.toUpperCase()}</p>
                    <p class="price">${price * quantity} EGP</p>
                </div>
                <div class="amount">
                    <button class="subtract" onclick="subtractFromCart('${bookId}')">-</button>
                    <p>${quantity}</p>
                    <button class="add" onclick="addToCart('${bookId}')">+</button>
                </div>
            </div>
        `
    }).join('')

    const total = ids.reduce((sum, bookId) => {
        const book = globalData.books?.[bookId]
        const quantity = cart[bookId] || 0
        return sum + (book.price ?? 0) * quantity
    }, 0)

    cartDiv.innerHTML += `
        <p id="total">TOTAL: ${total} EGP</p>
    `
}

export function addToCart(bookId) {
    if (cart[bookId]) {
        cart[bookId]++
    } else {
        cart[bookId] = 1
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    renderCart()
}
window.addToCart = addToCart

export function subtractFromCart(bookId) {
    if (!cart[bookId]) return
    
    if (cart[bookId] > 1) {
        cart[bookId]--
    } else {
        delete cart[bookId]
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    renderCart()
}
window.subtractFromCart = subtractFromCart

loadGlobal()

addToCart("book1")
addToCart("book2")
addToCart("book3")
addToCart("book4")