// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min
//     + 1 ) + min)
// }
//
// const num1 = getRandomNumber()
//
// console.log(num1)


const buttons= document.getElementsByTagName('button')
for (let u=0;u<buttons.length;u++){
    buttons [u].onclick = (e)=>{
        document.body.style.backgroundColor = e.target.innerText
    }
}


const form = document.querySelector('form')

const postData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data
    })
    return response
}

const bindPostData = (form) => {
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const obj = {}
        formData.forEach((item, i) => obj[i] = item)
        const json = JSON.stringify(obj)
        if (window.location.pathname === '/project/index.html') {
            postData('server.php', json)
        } else {
            postData('../server.php', json)
        }
    }
}

bindPostData(form)