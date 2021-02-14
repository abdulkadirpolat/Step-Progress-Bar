class UI {
	static change() {
		steps.forEach((stp, index) => {
			if (index < active) {
				stp.classList.add('action');
			} else {
				stp.classList.remove('action');
			}
		});
		const actions = document.querySelectorAll('.action');

		progres.style.width =
			((actions.length - 1) / (steps.length - 1)) * 100 + '%';

		if (active === 1) {
			prev.disabled = true;
			// next.style.disabled = (	background-color: $color;
			// 		cursor: not-allowed;)
		} else if (active === steps.length) {
			next.disabled = true;
		} else {
			next.disabled = false;
			prev.disabled = false;
		}
	}
}
