'use strict';
import i18Obj from './translate.js';

// BurgerMenu
document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('animate');
});
const menuLink = document.querySelectorAll('.menu-list-link');



console.log('PORTFOLIO#2 - АДАПТИВНАЯ ВЁРСТКА', 'задание выполнено на 83 балла');


//***************************************************** */
// СhangeImage

const portfolioBtn = document.querySelectorAll('.portfolio-btns .btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelector('.portfolio-btns');



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
const playStop = document.querySelector('.play-icon');
const playBtn = document.querySelector('.play-btn');
const volumeIcon = document.querySelector('.volume-icon');
const poster = document.querySelector('.poster')
const progress = document.querySelector('input.progress');

video.ontimeupdate  = progressUpdate;
progress.oncick = videoRewind;

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

function progressUpdate() {
  let duration = video.duration;// video.duration - всё время
  let currentTime = video.currentTime;//video.currentTime - текущее время
  progress.value = (100 * currentTime) / duration;//progress.value - текущее позиция
  progress.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progress.value}%, rgb(200, 200, 200) ${progress.value}%, rgb(200, 200, 200) 100%)`
  // document.querySelector('.counter').innerHTML = (video.currentTime).toFixed(1);
  // Minutes
  let minutes = Math.floor(video.currentTime / 60);
  // Seconds
  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10) {
    seconds = '0' + String(seconds)
  }
  document.querySelector('.counter').innerHTML =`${minutes}:${seconds}`
};
function videoRewind(event) {
  let width = this.offsetWidth;//возвращает ширину элемента
  let offset = event.offsetX;//offsetX - отступ курсора мыши по оси X от края целевого DOM узла
  this.value = 100 * offset / width;
  video.pause();
  video.currentTime =  video.duration * (offset / width );
  play();
}
 /******************************************************** */
