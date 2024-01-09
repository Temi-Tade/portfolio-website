const texts = ["Temiloluwa", 'a Front End Web developer', 'a programmer', 'an open source contributor', 'a graphics designer',]

let charIndex = 0;
let textIndex = 0;
let isDeleting = false;

const TEXT_EFFECT = () => {
    let currentText = texts[textIndex];
    let currentChar = currentText.substring(0, charIndex);
    dyn_text.textContent = currentChar

    if (!isDeleting && charIndex < currentText.length ) {
        charIndex++;
        setTimeout(TEXT_EFFECT, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(TEXT_EFFECT, 100);
    } else {
        isDeleting = !isDeleting;
        textIndex = !isDeleting ? (textIndex + 1) % texts.length : textIndex;
        setTimeout(TEXT_EFFECT, 1200);
    }
}

TEXT_EFFECT()