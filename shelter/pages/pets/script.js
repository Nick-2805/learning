// BurgerMenu
document.querySelector('.burger').addEventListener('click', function () {
	document.querySelector('.burger__item').classList.toggle('burger-open')
	document.querySelector('.modal__header-320').classList.toggle('animate')

})