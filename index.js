const clsFlipCard = "flipped";
const card = document.getElementById("card") || unknownElement();
const _frontface = getElementByClass("frontface") || unknownElement();

card.addEventListener("click", _ => {
    toggleClass(card, clsFlipCard);
});

/** Utilities */
function getElementByClass(name) {
const elements = document.getElementsByClassName(name);
    return elements.length > 0 ? elements.item(0) : null;
}

function toggleClass(el, name) {
if (el.classList.contains(name)) {
    el.classList.remove(name);
} else {
    el.classList.add(name);
}
}

function unknownElement() {
    return document.createElement("unknown");
}