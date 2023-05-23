let openingMenu = document.querySelector('.opening-menu');
let showedMenu = document.querySelectorAll('.showed-menu');
const techriderOpeningMenu = document.querySelector('.techrider__opening-menu');


function open() {
	openingMenu.classList.toggle('opening-menu-active');
	showedMenu.classList.toggle('showed-menu-active');

}




addEventListener(`click`,e => {
	let $target = e.target.closest(`.item-1`);
	if ($target) {
		$target.closest(`.opening-menu`).classList.toggle(`.opening-menu-active`);
		return;
	}

	$target = e.target.closest(`.item-2`);
	if ($target) {
		$target.closest(`.opening-menu`).classList.toggle(`.opening-menu-active`);
		return;
	}
	$target = e.target.closest(`.item-3`);
	if ($target) {
		$target.closest(`.opening-menu`).classList.toggle(`.opening-menu-active`);
		return;
	}
	$target = e.target.closest(`.item-4`);
	if ($target) {
		$target.closest(`.opening-menu`).classList.toggle(`.opening-menu-active`);
		return;
	}
	$target = e.target.closest(`.item-5`);
	if ($target) {
		$target.closest(`.opening-menu`).classList.toggle(`.opening-menu-active`);
		return;
	}
	$target = e.target.closest(`.item-6`);
	if ($target) {
		$target.closest(`.opening-menu`).classList.toggle(`.opening-menu-active`);
		return;
	}

});

techriderOpeningMenu.addEventListener('click',(event) => {
	if (event.target.closest('.opening-menu')) {
		open();
	}
})