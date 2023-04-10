function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function typeWriter(text,element,cursor) {
    let index = 0;
    function type()
    {
        let delay=getRandomNumber(5,225);
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            cursor.style.left=(element.offsetWidth+2)+'px';
            setTimeout(type, delay);
        }
    }
    type()
}

