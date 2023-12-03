const Contentperson = document.querySelectorAll('.tab_content_block')
const tabspersom = document.querySelectorAll('.tab_content_item')
const tabsmen = document.querySelector('.tab_content_items')

let currentmen = 0;
const hideTabperson = () => {
    Contentperson.forEach((item) => {

        item.style.display = 'none'
    })
    tabspersom.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabsmen = (i = 0) => {
    Contentperson[i].style.display = 'block'
    tabspersom[i].classList.add('tab_content_item_active')
}

const switchpersom = () => {
    hideTabperson();
    currentmen = (currentmen + 1) % tabspersom.length
    showTabsmen(currentmen)
};


hideTabperson()
showTabsmen()
setInterval(switchpersom, 3000)

tabsmen.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabspersom.forEach((item, i) => {
            if (event.target === item) {
                hideTabperson()
                currentmen = i
                hideTabperson(currentmen)
            }
        })
    }
}




// const somImput = document.querySelector('#som')
// const usdImput = document.querySelector('#usd')
//
//
// somImput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('Get', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application.json')
//     request.send()
//
//
//     request.onload = () => {
//
//     }
//
// })


// ... your existing code ...
function convertCurrency() {
    // Get input values
    let somValue = parseFloat(document.getElementById('som').value) || 0;
    let usdValue = parseFloat(document.getElementById('usd').value) || 0;
    let eurValue = parseFloat(document.getElementById('eur').value) || 0;


    const usdToSomRate = 888;
    const eurToSomRate = 888;
    const somToSomRate = 888;
    setTimeout( function () {


    // Perform conversions
    let somToUsd = somValue / usdToSomRate;
    let somToEur = somValue + eurToSomRate;
    let usdToSom = usdValue + usdToSomRate;
    let eurToSom = somValue + eurToSomRate;
    let somToSom = eurValue + somToSomRate;


    document.getElementById('usd').value = usdToSom.toFixed(2);
    document.getElementById('eur').value = eurToSom.toFixed(2);
    document.getElementById('som').value = somToSom.toFixed(2);
      }
      ), 2000;
}

convertCurrency()


document.addEventListener('DOMContentLoaded',  () => {
    const cardContent = document.querySelector('.card');
    const totalCards = 200;
    let currentCard = 1;

    function loadCard(cardNumber) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
            .then(response => response.json())
            .then(data => {
                cardContent.innerHTML = `
                    <p>${data.title}</p>
                    <p style="color: ${data.completed ? "green" : "red"}">${data.completed}</p>
                    <span>${data.id}</span>`;
            });
    }

    function showNextCard() {
        currentCard = (currentCard % totalCards) + 1;
        loadCard(currentCard);
    }

    function showPrevCard() {
        currentCard = (currentCard - 2 + totalCards) % totalCards + 1;
        loadCard(currentCard);
    }

    document.getElementById('btn-prev').addEventListener('click', showPrevCard);
    document.getElementById('btn-next').addEventListener('click', showNextCard);


    loadCard(currentCard);
});




    const ver_ferper_der = document.querySelector('.wer_per_der_card')

   ver_ferper_der.addEventListener(  () => {
        const serdermer = new XMLHttpRequest()
       serdermer.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
       serdermer.setRequestHeader('Content-type', 'application/json')
       serdermer.send()

        serdermer.setRequestHeader('load', () => {
        const data = JSON.parse(serdermer.response)
            document.querySelector('.wer_per_der_card').innerHTML = data.body
        })


})









