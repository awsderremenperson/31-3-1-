const emailInput = document.getElementById("gmail_input");
const resultSpan = document.getElementById("gmail_result");
const gmailButton = document.getElementById("gmail_button");

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
}

gmailButton.addEventListener("click", function() {
    const email = emailInput.value;
    if (isValidEmail(email)) {
        resultSpan.textContent = "The mail is valid";
        resultSpan.style.color = "green";
    } else {
        resultSpan.textContent = "The mail is not valid";
        resultSpan.style.color = "red";
    }
});


const parentBlock = document.querySelector(".parent_block");
const smallBlock = document.querySelector(".child_block");
let currentPosition = 0;

function moveRight() {
    if (currentPosition <= parentBlock.offsetWidth - smallBlock.offsetWidth) {
        currentPosition += 1;
        smallBlock.style.left = currentPosition + "px";
        setTimeout(moveRight, 10);
    }
}

moveRight();
