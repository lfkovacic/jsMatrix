export const getValue = id => {
    const element = getElement(id);
    return element?.value;
}

export const setContent = (id, content) => {
    try {
        const element = getElement(id);
        console.log(element);
        element.innerHTML = content;
    } catch (error) { console.error(error) }
}

const getElement = id => {
    console.log(id);
    const element = document.getElementById(id);
    console.log(document.getElementById(id));

    return element === undefined ? null : element;
}
