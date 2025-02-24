const defaultPrecision = 3;

const clsFlipCard = "flipped";
const card = document.getElementById("card") || unknownElement();
const _frontface = getElementByClass("frontface") || unknownElement();

card.addEventListener("click", _ => {
    toggleClass(card, clsFlipCard);
});

// 
// Tilt Effect
// 
const clsTiltCard = "with-tilt";
const maxTiltAngle = 0.75;
const propTiltX = "--tiltX";
const propTiltY = "--tiltY";
frontface.addEventListener("mousemove", e => {
  // map screen coordinate to [-1,1]
  const h = (e.clientX / window.innerWidth - 0.5) * 2;
  const v = (e.clientY / window.innerHeight - 0.5) * 2;
  const tiltXdeg = `${(maxTiltAngle * v * -1).toFixed(defaultPrecision)}deg`;
  const tiltYdeg = `${(maxTiltAngle * h * 1).toFixed(defaultPrecision)}deg`;
  card.style.setProperty(propTiltX, tiltXdeg);
  card.style.setProperty(propTiltY, tiltYdeg);
});
frontface.addEventListener("mouseenter", _ => {
  card.classList.add(clsTiltCard);
});
frontface.addEventListener("mouseleave", _ => {
  card.classList.remove(clsTiltCard);
  card.style.setProperty(propTiltX, `0deg`);
  card.style.setProperty(propTiltY, `0deg`);
});


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