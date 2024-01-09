export const getValue = id => {
    const element = getElement(id);
    return element?.value;
}

export const setContent = (id, content) => {
    try {
        const element = getElement(id);
        element.innerHTML = content;
    } catch (error) { console.error(error) }
}

const getElement = id => {
    const element = document.getElementById(id);
    return element === undefined ? null : element;
}
