const modalFunc = () => {
	const modal = document.querySelector('.cart-modal__overlay');
	const cartBtn = document.querySelector('#cart-button');

	const openModal = () => {
		modal.classList.add('open');
	};

	const closeModal = () => {
		modal.classList.remove('open');
	};

	cartBtn.addEventListener('click', () => {
		openModal();
	});

	modal.addEventListener('click', (event) => {
		console.log();
		if (event.target.classList.contains('cart-modal__overlay') ||
			event.target.closest('.cart-modal__header--close')
		) {
			closeModal();
		}
	});
}

const restFunc = () => {
	const container = document.querySelector('#rests-contain');

	const restArray = [
		{
			id: 0,
			title: 'Пицца плюс',
			time: 50,
			rating: 4.5,
			price: 900,
			type: 'Пицца',
			image: 'pizza-plus.jpg'
		}
	];

	const loading = () => {
		container.innerHTML = '<div style="width: 100%; text-align: center">Загрузка</div>';
	};

	const renderRests = (array) => {
		container.innerHTML = '';

		array.forEach((card) => {
			container.insertAdjacentHTML('beforeend', `
				<div class="products-card">
					<a href="goods.html?id=${card.id}" class="products-card__image">
						<img src="img/rests/${card.image}" alt="${card.image}">
					</a>
					<div class="products-card__description">
						<div class="products-card__description-row">
							<h4 class="products-card__description--title">
								${card.title}
							</h4>
							<div class="products-card__description--badge">
								${card.time} <минут></минут>
							</div>
						</div>
						<div class="products-card__description-row">
							<div class="products-card__description-info">
								<div class="products-card__description-info--rating">
									<img src="img/icons/star.svg" alt="star">
									${card.rating}
								</div>
							<div class="products-card__description-info--price">
								От ${card.price} ₽
							</div>
							<div class="products-card__description-info--group">
								${card.type}
							</div>
						</div>
					</div>
				</div>
			</div>
			`)
		})
	};

	if (container) {
		loading();

		setTimeout(() => {
			renderRests(restArray);
		}, 1000);
	}
};

modalFunc();
restFunc();