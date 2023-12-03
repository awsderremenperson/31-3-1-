
const tabsContent = document.querySelector('.tab_contents_block');
const tabs = document.querySelector('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

const hideTabsContent = () => {
    tabsContent.forEach(tabsContent =>  {
        tabsContent.style.display = 'nome'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabsContent = (index) => {
    tabsContent [index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabsContent()
showTabsContent()