
function onButtonClick() {
    removeLastItem();
    
    
}

function removeLastItem() {
    const list = document.getElementById("lista");
    const lastItem = list.lastElementChild;
    if (lastItem) {
        list.removeChild(lastItem);
    }
}