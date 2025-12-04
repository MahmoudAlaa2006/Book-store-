let currentDiv = 1; // start with Div 1

function toggleDivs() {
  // Hide all divs
    const divs = document.querySelectorAll('.content');
    divs.forEach(div => div.style.display = 'none');

  // Show the next div
    currentDiv++;
    if (currentDiv > divs.length) {
    currentDiv = 1; // loop back to first div
    }

    document.getElementById('div' + currentDiv).style.display = 'block';
}
