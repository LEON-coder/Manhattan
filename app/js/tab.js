let header1 = document.querySelector('.main-block-anounce__header');
let tab2 = document.querySelector('.main-block-anounce__tab-2');
let tab = document.querySelector('.main-block-anounce__tab');
let headerSoon = document.querySelector('.main-block-anounce__header-soon');

function checkingTab2() {
	tab.classList.toggle('hide');
	tab2.classList.toggle('show');

}
function checkingTab() {
	tab.classList.toggle('show');
	tab2.classList.toggle('hide');
}


header1.addEventListener('click',checkingTab);
headerSoon.addEventListener('click',checkingTab2)


