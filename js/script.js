/*----- constants -----*/
const BABY_IMAGE = './assets/baby.webp';
const CHILD_IMAGE = './assets/child.webp';
const TEEN_IMAGE = './assets/teen.webp';
const ADULT_IMAGE = './assets/adult.webp';
const MAX_STAT_VALUE = 100;
const MAX_BABY_AGE = 5;
const MAX_CHILD_AGE = 12;
const MAX_TEEN_AGE = 19;
const HUNGER_INTERVAL = 2000;
const SLEEPINESS_INTERVAL = 3000;
const BOREDOM_INTERVAL = 4000;
const AGE_INTERVAL = 1000;

/*----- app's state (variables) -----*/
let age;
let hunger;
let boredom;
let sleepiness;

/*----- cached element references -----*/
// save DOM elements you access more than once as a variable
const playBtnEl = document.querySelector('#js-play-btn');
const welcomeModalEL = document.querySelector('.modal-welcome');
const tamagotchiContainerEl = document.querySelector('.tamagotchi-container');
const ageEl = document.querySelector('#js-age');
const petImg = document.createElement('img');

/*----- event listeners -----*/
playBtnEl.addEventListener('click', init);

/*----- functions -----*/

// init() function that will initialize game state. This can be used for starting a new game as well.
function init() {
	console.log('Start Game');
	// Hide welcome modal.
	welcomeModalEL.classList.add('hide');
	// Initialize pet's stats to 0
	age = 0;
	hunger = 0;
	boredom = 0;
	sleepiness = 0;
	// Create egg element
	initEgg();
	// start age timer
	handleAgeInterval();
}

function initEgg() {
	// Create an egg div
	const egg = document.createElement('div');
	// give it an egg class
	egg.setAttribute('class', 'egg');
	// crate a spots div
	const spots = document.createElement('div');
	spots.setAttribute('class', 'spots');
	// give it a spots class
	// append spots to egg
	egg.appendChild(spots);
	// append egg to tamagotchi-container
	tamagotchiContainerEl.appendChild(egg);
}

// render() function responsible for updating DOM

function handleAgeInterval() {
	const ageTimer = setInterval(function () {
		// update the state age data
		age++;
		// update the DOM with new age data
		ageEl.textContent = age;
		renderPet();
	}, AGE_INTERVAL);
}

function renderPet() {
	// If age is 1-5. show baby image.
	if (age === 1) {
		// Clear the egg
		tamagotchiContainerEl.innerHTML = '';
		// Create a petImg element
		// Set image src to our baby image
		petImg.setAttribute('src', BABY_IMAGE);
		// Append petImg to our tamagotchiContainer
		tamagotchiContainerEl.appendChild(petImg);
	}
	if (age === MAX_BABY_AGE) {
		petImg.setAttribute('src', CHILD_IMAGE);
	}
	// If age is 6-12, show child image.
	if (age === MAX_CHILD_AGE) {
		petImg.setAttribute('src', TEEN_IMAGE);
	}
	// If age is 13-19, show teen image.
	if (age === MAX_TEEN_AGE) {
		petImg.setAttribute('src', ADULT_IMAGE);
	}
}
