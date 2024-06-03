window.addEventListener ('scroll', function() {

	let header = document.querySelector('header');
	let scrollPosition = window.scrollY;
		
	if (scrollPosition > 0) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});