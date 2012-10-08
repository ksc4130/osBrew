$(function(){
	$('#slides').slides({
		preload: true,
		preloadImage: '/images/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true,
		generatePagination: false
	});
});