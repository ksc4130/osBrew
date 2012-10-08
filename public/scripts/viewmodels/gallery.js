var _imgs = [
	[
		{ src: '/images/sunset.jpg', alt: 'Sunset' },
		{ src: '/images/road.jpg', alt: 'Road' },
		{ src: '/images/boatC.jpg', alt: 'Boat' }
	],
	[
		{ src: '/images/sunset.jpg', alt: 'Sunset' },
		{ src: '/images/road.jpg', alt: 'Road' },
		{ src: '/images/boatC.jpg', alt: 'Boat' }
	]
];

var _curImgs = ko.observableArray(_imgs[0]);

var vm = function() {
	return {
		imgs: _imgs,
		curImgs: _curImgs
	}
}();

ko.applyBindings(vm);

$(function(){
	$('#slides').slides({
		preload: true,
		preloadImage: '/images/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true
	});
});