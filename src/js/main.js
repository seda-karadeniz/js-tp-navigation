document.documentElement.classList.add('js-enabled');
const menus = document.querySelectorAll('.menu');
for (const menu of menus) {
    menu.addEventListener('mouseenter',montreSousMenu);
     /* fr le mouseout repasser au disply none */
     menu.addEventListener('mouseout', cacherSousMenu)
}
function montreSousMenu(event) {
   console.log(event.currentTarget); 
    event.currentTarget.querySelector('.sub-menu').style.display = "block" ;
}
function cacherSousMenu(event) {
    event.currentTarget.querySelector('.sub-menu').style.display = "none";
}