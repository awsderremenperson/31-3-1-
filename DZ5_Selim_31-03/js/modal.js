// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min
//     + 1 ) + min)
// }
//
// const num1 = getRandomNumber()
//
// console.log(num1)


const buttons=
    document.getElementsByTagName('button')
for (let u=0;u<buttons.length;u++){
    buttons [u].onclick = (e)=>{
        document.body.style.backgroundColor = e.target.innerText
    }
}