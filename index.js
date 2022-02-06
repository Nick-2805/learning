'use strict';
import i18Obj from './translate.js';

// BurgerMenu
document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('animate');
});
const menuLink = document.querySelectorAll('.menu-list-link');

// for ( let i = 0; i < menuLink.length; i++) {
// 	menuLink[i].addEventListener('click', function () {
// 		document.querySelector('.menu').classList.toggle("animate");
// 		document.querySelector('.burger span').classList.toggle('active');
// })
// }

console.log('PORTFOLIO#2 - АДАПТИВНАЯ ВЁРСТКА', 'задание выполнено на 83 балла');

// Portfolio-imges
//******************************************** */

// window.onload = function () {
// 	console.log('Hello');
// 	addTagsHandler();
// }
// const addTagsHandler= () => {
// 	document.querySelector('.portfolio-btns').addEventListener('click', (e) => {

// 		if (e.target.classList.contains('portfolio-btn')) {
// 			// console.log(e.target.innerText)
// 			let clickedPorfolioBtn = e.target;
// 			removeSelectedTags();
// 			selectClictedTag(clickedPorfolioBtn);
// 		} if(e.target.innerText === 'All') {
// 			showAllGallery();
// 		} else {
// 			filterGalleryBySelectedBtn(e.target.innerText);
// 		}
// 	})
// }
// const removeSelectedTags = () => {
// 	let tags = document.querySelectorAll('.portfolio-btns .btn');
// 	tags.forEach(tag => {
// 		tag.classList.remove('gold');
// 	})
// }
// const selectClictedTag = (clickedPorfolioBtn) => {
// 	clickedPorfolioBtn.classList.add('gold');
// }
// const showAllGallery = () => {

// }
// const filterGalleryBySelectedBtn = (selectedTag) => {
// 	// let gallery = document.querySelectorAll('.portfolio-items img');
// 	// gallery.forEach(img => {
// 	// 	gallery.classlist.add('.hidden');
// 	// 	if(img.className === selectedTag) {
// 	// 		gallery.classList.remove('hidden');
// 	// 	}
// 	// })
// 	// console.log(gallery);

// }

//***************************************************** */
// СhangeImage

const portfolioBtn = document.querySelectorAll('.portfolio-btns .btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelector('.portfolio-btns');

// portfolioBtns.addEventListener('click', (event) => {
// 	if(event.target.classList.contains('portfolio-btn')) {
// 	changeImage(event);
// 	removeClassActive (event);
// 	changeClassActive(event);
// 	// preloadImages(event);
// 	}
// })

// function changeImage(event) {
// 		const dataSeason = event.target.dataset.season;
// 		console.log(dataSeason)
// 		portfolioImages.forEach((img, index) => {
// 			img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`
// 		});
// }

portfolioBtns.addEventListener('click', (event) => {
  changeImage(event);
  removeClassActive(event);
  changeClassActive(event);
});
function changeImage(event) {
  let dataSeason = event.target.dataset.season;
  portfolioImages.forEach((img, index) => {
    img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`;
  });
}

//******************************************************* */
// PreloadImages ???

function preloadImages(event) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  seasons.forEach((seasonName) => {
    let season = seasonName;
  });
}

//******************************************************* */
// Подсветка активной кнопки

function removeClassActive() {
  portfolioBtn.forEach((btn) => {
    btn.classList.remove('gold');
  });
}
function changeClassActive(event) {
  event.target.classList.add('gold');
}
//******************************************************* */
// Функция перевода страницы

//**1 способ */
// const switchLng = document.querySelector('.switch-lng');//родитель кнопок ru и en
// switchLng.addEventListener('click', (event) => {
// 	if(event.target.classList.contains('lang')) {
// 		let btnLang = event.target.dataset.lang;//ru  or en
// 		getTranslate(btnLang);
// 	}
// });

// function getTranslate (btnLang) {
// 	let dataI18 = document.querySelectorAll('[data-i18]');//obj dataI18 html

// 	dataI18.forEach((name) => {
// 		let datasetNames = name.dataset.i18;// все ключи объекта dataI18 html
// 		for (let key in i18Obj[btnLang]){
// 			if(key === datasetNames){
// 				document.querySelector(`[data-i18="${datasetNames}"]`).textContent = i18Obj[btnLang][key];
// 			}
// 		}
// 	})
//**2 способ */ }
// ru.addEventListener('click', function () {
// 	for(let key in i18Obj['ru']) {
// 		dataI18All.forEach(function (dataName) {
// 			if(dataName.dataset.i18 === key) {
// 				dataName.textContent = i18Obj['ru'][key]
// 			}
// 		});
// 	}
// });
// en.addEventListener('click', function () {
// 	for(let key in i18Obj['en']) {
// 		dataI18All.forEach(function (dataName) {
// 			if(dataName.dataset.i18 === key) {
// 				dataName.textContent = i18Obj['en'][key]
// 			}
// 		});
// 	}
// });
//** 3 способ */
let ru = document.querySelector('.ru');
let en = document.querySelector('.en');
let dataI18All = document.querySelectorAll('[data-i18]');
const switchLng = document.querySelector('.switch-lng');

switchLng.addEventListener('click', (event) => {
  let btnLang = event.target.dataset.lang;
  getTranslate(btnLang);
});

function getTranslate(btnLang) {
  // console.log(btnLang)
  for (let key in i18Obj[`${btnLang}`]) {
    dataI18All.forEach(function (dataName) {
      if (dataName.dataset.i18 === key) {
        dataName.textContent = i18Obj[`${btnLang}`][key];
      }
    });
  }
}

//******************************************************* */
// Переключение светлой и тёмной темы

const btnTheme = document.querySelector('.block-theme');
const brgeMenu = document.querySelector('.menu');
const bodyBgd = document.querySelector('body');
const menuListLi = document.querySelector('.menu-list-link');

const classes = document.querySelectorAll('.black-theme');
// console.log(bodyBgd)
classes.forEach((name) => {
  btnTheme.addEventListener('click', function getTheme() {
    name.classList.toggle('light-theme');
    if (name.classList[2] === 'light-theme') {
      btnTheme.classList.add('light');
      bodyBgd.classList.add('light-theme');
      // brgeMenu.classList.add('light-theme');
      // menuList.classList.add('light-theme');
      document.documentElement.style.setProperty('--body-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--hover-color', '#000');
      document.documentElement.style.setProperty('--brg-color', '#000');
    } else {
      btnTheme.classList.remove('light');

      document.documentElement.style.setProperty('--body-color', '#000');
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--hover-color', '#fff');
      document.documentElement.style.setProperty('--gold-text', '#bdae82');
      document.documentElement.style.setProperty('--brg-color', '#fff');
    }
  });
});
//*******************************************************
                  // Video

const wrapper = document.querySelector('div.player');
const video = wrapper.querySelector('video.viewer');
// const progress = document.querySelector('.progress');
// video.ontimeupdate  = progressUpdate;
// progress.onclick = videoRewind;
const playStop = document.querySelector('.play-icon');
const playBtn = document.querySelector('.play-btn');
const volumeIcon = document.querySelector('.volume-icon');
const poster = document.querySelector('.poster')

document.querySelector('.stop').onclick = stop;
document.querySelector('.speed-up').onclick = speedUp;
document.querySelector('.speed-down').onclick = speedDown;
document.querySelector('.speed-normal').onclick = speedNormal;
document.querySelector('.volume').oninput = changeVolume;
document.querySelector('.play-btn').onclick = play;
document.querySelector('.volume-icon').onclick = mute;
poster.onclick = hidePoster;

playStop.addEventListener('click', () => {
  if(playStop.classList.contains('play')) {
    play();   
  } else {
    pause(); 
  }
})


function hidePoster() {
  poster.style.display = 'none';
  play();
}
function addPlayClass () {
  if(playStop.classList[1] !== 'play') { 
    playStop.classList.add('play');
    playStop.classList.remove('pause');
  }
}
function removePlayClass () {
  if(playStop.classList[1] === 'play') { 
    playStop.classList.remove('play');
    playStop.classList.add('pause');
  } 
}
function play() {
  video.play();
  removePlayClass();
  playBtn.style.display = 'none'
};
function pause() {
  video.pause();
  addPlayClass();
  playBtn.style.display = 'block'
};
function stop() {
  video.pause();
  addPlayClass ();
  video.currentTime = 0;// сбросили время
};
function speedUp() {
  play();
  video.playbackRate = 2;// увеличили скорость в 2 раза
};
function speedDown() {
  play();
  video.playbackRate = 0.7;
};
function speedNormal() {
  play();
  video.playbackRate = 1;
};
function changeVolume() {
  let v = this.value;
  video.volume = v / 100;// присваиваем звук к video
  const value = this.value;
  this.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${value}%, rgb(200, 200, 200) ${value}%, rgb(200, 200, 200) 100%)`
};
function mute() {
  if(volumeIcon.classList[1] === 'volume-icon'){
    volumeIcon.classList.remove('volume-icon');
    volumeIcon.classList.add('mute-icon');
    video.muted = true;
  } else {
    volumeIcon.classList.add('volume-icon');
    volumeIcon.classList.remove('mute-icon');
    video.muted = false;
  }

};

// function progressUpdate() {
//   let duration = video.duration;// video.duration - всё время
//   let currentTime = video.currentTime;//video.currentTime - текущее время
//   progress.value = (100 * currentTime) / duration;//progress.value - текущее позиция
//   progress.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progress.value}%, rgb(200, 200, 200) ${progress.value}%, rgb(200, 200, 200) 100%)`
//   // document.querySelector('.counter').innerHTML = (video.currentTime).toFixed(1);
//   // Minutes
//   let minutes = Math.floor(video.currentTime / 60);
//   // Seconds
//   let seconds = Math.floor(video.currentTime % 60);
//   if(seconds < 10) {
//     seconds = '0' + String(seconds)
//   }
//   document.querySelector('.counter').innerHTML =`${minutes}:${seconds}`
// };
// function videoRewind(event) {
//   let width = this.offsetWidth;//возвращает ширину элемента
//   let offset = event.offsetX;//offsetX - отступ курсора мыши по оси X от края целевого DOM узла
//   this.value = 100 * offset / width;
//   video.pause();
//   video.currentTime =  video.duration * (offset / width );
//   play();
// }
 /******************************************************** */


const progress = document.querySelector('input.progress');

video.ontimeupdate  = progressUpdate;
progress.onclick = videoRewind;
console.log(progress)
function progressUpdate() {
  let duration = video.duration;// video.duration - всё время
  let currentTime = video.currentTime;//video.currentTime - текущее время
  progress.value = (100 * currentTime) / duration;//progress.value - текущее позиция
  progress.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progress.value}%, rgb(200, 200, 200) ${progress.value}%, rgb(200, 200, 200) 100%)`
};
function videoRewind() {
  let width = this.offsetWidth;//возвращает ширину элемента
  let offset = event.offsetX;//offsetX - отступ курсора мыши по оси X от края целевого DOM узла
  this.value = 100 * (offset / width);
  video.pause();
  // video.currentTime =  video.duration * (offset / width );
  video.play();
  console.log('kshdc')
    console.log()
  console.log()
  console.log()
}