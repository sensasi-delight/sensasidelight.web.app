document.getElementById('darkModeToggleButton').addEventListener('click', function (e) {
	const body = document.getElementsByTagName('body')[0];

	if (body.classList.contains('dark-mode')) {
		body.classList.remove('dark-mode');
		e.target.innerText = "See me in dark mode!";
	} else {
		body.classList.add('dark-mode');
		e.target.innerText = "Back to the light mode!";
	}
});
