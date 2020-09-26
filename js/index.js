let card = document.querySelector('.full-card');
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
});

let link_icons = document.getElementsByTagName('a');
for (let icon of link_icons) {
    icon.onclick = (event) => event.stopPropagation();
}

window.onload = function() {
    document.getElementsByClassName('full-card')[0].className += " loaded";
};

