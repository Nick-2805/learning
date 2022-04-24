const modal_wrap = document.querySelector('.modal__wrapper');
const modal = document.querySelector('.modal__header-320')
const links = document.querySelector('.menu__links');
const burger = document.querySelector('.burger__item');
//const animate = document.querySelector('.animate')
// BurgerMenu
document.querySelector('.burger').addEventListener('click', function () {
	burger.classList.toggle('burger-open');
	modal_wrap.classList.toggle('start-modal');
	modal.classList.toggle('animate');
	document.body.style.overflow = 'hidden';
})

/*Modal-burger */

//close modal

//autoclose for size > 768
window.addEventListener('resize', () => {
	if(window.screen.width > 768) {
		closeModal()
	}
})
//close after clicking on links
links.addEventListener('click', function(event) {
	if(event.target.nodeName != 'A') return
	closeModal();
})
//close after clicking on wrapper
window.addEventListener('click', outsideClick);
function outsideClick(e) {
	if (e.target == modal_wrap) {
		closeModal();
	}
}
//function close modal

function closeModal() {
	modal_wrap.classList.remove('start-modal');
	modal.classList.remove('animate');
	burger.classList.remove('burger-open');
	document.body.style.overflow = 'auto';
}
/*Получаем объект с карточками */

const URL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/030049e9a2cf0352bfffb682a18bc128af49d6cb/tasks/markups/level-2/shelter/pets.json'


async function getData(URL) {
  const res = await fetch(URL);
  const data = await res.json();

getCartData(data)
}
getData(URL);

function getCartData(data) {
		
	let arrName = [];
	data.map((item, i) => {		
		let itemName = item.img.split('/')[4].split('.')[0];
		arrName.push(itemName)
	})
	return arrName // массив нужно передать в createPetsCard()
}

/*Carousel*/

const BTN_LEFT = document.querySelector("#arrow-left");
const BTN_RIGHT = document.querySelector("#arrow-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_CENTER = document.querySelector("#item-center");

ITEM_CENTER.innerHTML = '';
ITEM_RIGHT.innerHTML = '';
ITEM_LEFT.innerHTML = '';

const moveLeft = () => {
	CAROUSEL.classList.add("transition-left");
	BTN_LEFT.removeEventListener('click', moveLeft);
	BTN_RIGHT.removeEventListener('click', moveRight);
};
const moveRight = () => {
	CAROUSEL.classList.add("transition-right");
	BTN_LEFT.removeEventListener('click', moveLeft);
	BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);


CAROUSEL.addEventListener("animationend", (animationEvent ) => {
	let changedItem;
	if(animationEvent .animationName === 'move-left') {
		CAROUSEL.classList.remove('transition-left');
		changedItem = ITEM_LEFT;
		ITEM_CENTER.innerHTML = ITEM_LEFT.innerHTML;
	} else {
		CAROUSEL.classList.remove('transition-right');
		changedItem = ITEM_RIGHT;
		ITEM_CENTER.innerHTML = ITEM_RIGHT.innerHTML;
	}

	changedItem.innerHTML = '';
	for (let i = 0; i < 3; i++) {
		
		const card = createPetsCard();
		//card.innerText =Math.floor(Math.random() * 8);
		changedItem.appendChild(card);
		console.log(card)
		//console.log(arrName)
	}

	BTN_LEFT.addEventListener('click', moveLeft)
	BTN_RIGHT.addEventListener('click', moveRight)
})

function createPetsCard() {
	//console.log(arrCard)
	// let arrCard = [];
	// for (let i = 0; i < 3; i++) {
		const card = document.createElement("div");
		card.classList.add("photo__item-wrapper");

		const IMG = document.createElement("img");
		IMG.classList.add("photo__item");
		IMG.src = `../../assets/images/pets/pets-${arrName[i]}.jpg`
		card.append(IMG);

		const cardTitle = document.createElement("div");
		cardTitle.classList.add("friend__name");
		cardTitle.textContent = `${arrName[i]}`;
		card.append(cardTitle);
		
		const cardBTN = document.createElement("button");
		cardBTN.classList.add("btn");
		cardBTN.classList.add("light-btn");
		cardBTN.innerHTML = 'Learn more';
		card.append(cardBTN);

		// arrCard.push(card)
		// console.log(arrCard)
		// return arrCard;
	// }
}
createPetsCard()
