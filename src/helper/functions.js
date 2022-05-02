////
const shorten = (text) => {
    const splitText = text.split(" ");
    const newText = `${splitText[0]} ${splitText[1]}`;
    return newText;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if(index !== -1)
        return state.selectedItems[index].quantity;
    return false;
}

export {shorten, isInCart, quantityCount};