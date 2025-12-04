document.getElementById("but-fav").onclick = function() {
    const card = document.getElementById("card-pro-cov");
    card.classList.toggle("hidden");

  // optional: after transition ends, set display:none
    if (card.classList.contains("hidden")) {
    setTimeout(() => {
        card.style.display = "none";
    }, 1000); // matches 1s transition
    } else {
    card.style.display = "flex"; // or "flex" if needed
    }
};