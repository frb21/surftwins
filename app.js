//Target elements
const oval_btn = document.querySelector(".oval-button");
const btn = document.querySelector(".button");

function addHoverClass(button){
    button.classList.add('hover');
}

function removeHoverClass(button){
    button.classList.remove('hover');
}

oval_btn.addEventListener('mouseenter', () => addHoverClass(oval_btn));
oval_btn.addEventListener('mouseleave', () => removeHoverClass(oval_btn));

btn.addEventListener('mouseenter', () => addHoverClass(btn));
btn.addEventListener('mouseleave', () => removeHoverClass(btn));



































