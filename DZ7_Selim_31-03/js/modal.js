// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min
//     + 1 ) + min)
// }
//
// const num1 = getRandomNumber()
//
// console.log(num1)


const buttons=  document.getElementsByTagName('button')
for ( let u=0;u< buttons.length;u++){
  buttons [u].onclick = (e)=>{
        document.body.style.backgroundColor = e.target.innerText
    }
}



const modal = document.querySelector('.modal')
const CloseButton = document.querySelector('.modal_close')
const triggerModal = document.querySelector('#btn-get')


const openModal = () => {
    modal.style.display = 'block'
    document.body.overflow = 'hidden'
}

const closemodal = () => {
    modal.style.display = 'none'
    document.body.overflow = ''
}

triggerModal.onclick = () => openModal()
CloseButton.onclick = () => closemodal()
modal.onclick = () => closemodal()

modal.onclick = () => {
    if (event.target === modal) {
        closemodal()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.modal').style.display = 'block';
    }, 1200);
});




