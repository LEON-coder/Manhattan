let techriderOpeningMenu = document.querySelector('.techrider__opening-menu');
let openingMenu = document.querySelectorAll('.opening-menu');
let showedMenu = document.querySelectorAll('.showed-menu');



function open() {
	openingMenu.classList.toggle('opening-menu-active');
	showedMenu.classList.toggle('showed-menu-active');
}

techriderOpeningMenu.addEventListener('click',open)





