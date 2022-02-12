// a010eeb4

let form = document.getElementById('form');
const main = document.querySelector('.main');
let inputValue = form.querySelector('[name="z"]').value;
let url ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c'


form.addEventListener('submit', getInputValue);

	getData()


function getInputValue(event) {
	event.preventDefault();
	let inputName = form.querySelector('[name="z"]');
	inputValue = inputName.value
	console.log('inputName-', inputValue);
	getUrl()
}
	console.log('inputValue-',  inputValue);

function getUrl() {
	let url1 =`https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`
	//console.log('url--', url)
	getData(url1)
}

async function getData() {
   const res = await fetch(url);
   const data = await res.json();
	let posterPath ; let altName ; let voteAverage; let overview; let i = 20;

	while(i) {
		posterPath = data.results[i - 1].poster_path;
		altName =  data.results[i -1].original_title;
		voteAverage = data.results[i -1].vote_average;
		overview =  data.results[i -1].overview
		createMovieBlock(posterPath, altName, voteAverage, overview);
		i--;
	}
}


function createMovieBlock(posterPath, altName, voteAverage, overview) {
	const movieBlock = document.createElement('div');
	movieBlock.classList.add('movie')
	main.append(movieBlock);

	const img = document.createElement('img');
	img.src = `https://image.tmdb.org/t/p/w1280${posterPath}`;
	img.alt = `${altName}`;
	movieBlock.append(img)	

	const movieInfo = document.createElement('div');
	movieInfo.classList.add('movie-info');
	movieBlock.append(movieInfo)
	const titleMovieInfo = document.createElement('h3')
	movieInfo.append(titleMovieInfo)
	titleMovieInfo.textContent = `${altName}`

	const spanMovieInfo = document.createElement('span')
	movieInfo.append(spanMovieInfo)
	spanMovieInfo.textContent = `${voteAverage}`

	const overviewDiv = document.createElement('div')
	overviewDiv.classList.add('overview')
	movieBlock.append(overviewDiv)

	const overviewTitle = document.createElement('h3')
	overviewDiv.append(overviewTitle)
	overviewTitle.textContent = 'overview'
	const overviewText = document.createElement('p')
	overviewDiv.append(overviewText)
	overviewText.textContent = `${overview}`
}


