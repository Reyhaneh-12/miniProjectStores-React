////
const shorten = (text) => {
    const splitText = text.split(" ");
    const newText = `${splitText[0]} ${splitText[1]}`;
    return newText;
}


export {shorten};