const modal = document.querySelector('.cart-modal__overlay');
const cartBtn = document.querySelector('#cart-button');

const openModal = () => {
	modal.classList.add('open');
}
const closeModal = () => {
	modal.classList.remove('open');
}

cartBtn.addEventListener('click', () => {
	openModal()
})

modal.addEventListener('click',(event) => {
	console.log();
	if (event.target.classList.contains('cart-modal__overlay') ||
	event.target.closest('.cart-modal__header--close')
	) {
		closeModal()
	}
})