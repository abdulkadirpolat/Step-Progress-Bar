const progres = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const steps = document.querySelectorAll('.steps');

eventListener();
function eventListener() {
	next.addEventListener('click', nextEvent);
	prev.addEventListener('click', prevEvent);
}

let active = 1;

function nextEvent() {
	active++;

	if (active > steps.length) {
		active = steps.length;
	}
	UI.change();
}

function prevEvent() {
	active--;

	if (active < 1) {
		active = 1;
	}
	UI.change();
}
