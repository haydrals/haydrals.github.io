

const buttonA = document.querySelector("#button_A");
const headingA = document.getElementById("heading_A")

buttonA.addEventListener('click', function () {
    const name = prompt("what is your name?");
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}!`;
});

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output")

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
})

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!"
    document.body.appendChild(para)
}

const button = document.querySelector("button")

function greet() {
    const name = prompt("What is our name?")
    const greeting = document.querySelector("#greeting")
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

Image.addEventListener('click', function(event) {
    alert("Something here")
});