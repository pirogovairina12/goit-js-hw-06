const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');



const updateFontSize = () => {
        const fontSize = fontSizeControl.value;
        text.style.fontSize = `${fontSize}px`;
};

fontSizeControl.addEventListener('input', updateFontSize);
updateFontSize();

