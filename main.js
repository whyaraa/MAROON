document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search-form').addEventListener('click', (e) => {
       document.getElementById('search-form').classList.add('search-form_show')
    })
    document.getElementById('search-form_close').addEventListener('click', (e) => {
       document.getElementById('search-form').classList.remove('search-form_show')
    })
    document.getElementById('search-form').addEventListener('submit', (e) => {
       e.preventDefault()
 
    })
 })
 const anchors = document.querySelectorAll('a[href*="#"]')
 
 for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
 event.preventDefault();
 const blockID = anchor.getAttribute('href')
 document.querySelector('' + blockID).scrollIntoView({
    behavior: "smooth",
    block: "start"
 })
    })
 }