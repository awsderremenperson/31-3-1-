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

