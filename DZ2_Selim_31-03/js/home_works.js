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
    if (currentPosition < 448) {
        currentPosition ++
        smallBlock.style.left = currentPosition + "px";
        setTimeout(moveRight, 10);
    }
}

moveRight();




document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("ml-secondsS");
    let intervalId;
    let count = 0;

    document.getElementById("start").addEventListener("click", function () {
        intervalId = setInterval(function () {
            count += 1;
            counter.textContent = count;
        }, 1000);
    });

    document.getElementById("stop").addEventListener("click", function () {
        clearInterval(intervalId);
    });

    document.getElementById("reset").addEventListener("click", function () {
        clearInterval(intervalId);
        count = 0;
        counter.textContent = count;
    });
});

