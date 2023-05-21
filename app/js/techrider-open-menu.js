let openingMenu = document.querySelectorAll('.opening-menu');
let showedMenu = document.querySelectorAll('.showed-menu');
const techriderOpeningMenu = document.querySelector('.techrider__opening-menu');


function open() {
	console.log('работает меню');
	//showedMenu.classList.toggle('show-menu-item');
	//openingMenu.classList.toggle('opening-menu-active');

}



techriderOpeningMenu.addEventListener('click',function (event) {
	openingMenu.addEventListener('click',function (event) {
		if (event.target.closest(openingMenu)) {
			open();
		}
	})
})