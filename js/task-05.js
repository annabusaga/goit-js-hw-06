// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const inputRef = document.querySelector('[id="name-input" ]')
const spanRef = document.querySelector('[id="name-output"]')

inputRef.addEventListener('input', event => {
    
    spanRef.textContent = inputRef.value === ""
        ? "Anonymous"
        : inputRef.value
})





