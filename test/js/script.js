$(document).ready(function () {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	$('.songs-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		variableWidth: true
	});

	$('.history-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		variableWidth: true,
		centerMode: true,
	});
});