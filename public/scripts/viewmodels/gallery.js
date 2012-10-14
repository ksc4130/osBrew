/// <reference file="../libs/jquery-1.7.2.vsdoc.js" />
/// <reference file="../libs/knockout-2.1.0.debug.js" />

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

ko.bindingHandlers.slideShow = {
    init: function (el, val, aVal, vm, bc) {
        var $el = $(el);
        var w = parseInt($el.width()) + 20;
        $el.css({ overflow: 'hidden', position: 'relative' });
        console.log(bc.$data.curImgs());
        for (var i = 0; i < bc.$data.curImgs().length; i++) {
            console.log(bc.$data.curImgs()[i]);
            var $img = $("<img />").attr({ 'src': bc.$data.curImgs()[i].src, 'alt': bc.$data.curImgs()[i].alt }).css({ width: w, position: 'absolute' }).appendTo(el);
            if (i > 0) {
                $img.css({ left: w });
            }
            console.log('1');
        }
        (function () {
            var im = 0;
            setInterval(function () {
                //console.log($el.children('img'));
                $($el.children('img')[im]).animate({ left: (w * (-1)) }, 500, function () {
                    console.log(this);
                    $(this).css({ left: w });
                });
                im = im < (bc.$data.curImgs().length - 1) ? im + 1 : 0;
                $($el.children('img')[im]).animate({ left: 0 }, 500);
            }, 2000);
        } ());
        //$el.bind('DOMNodeInserted', function (e) {
        //console.log($(this));
        //$(this).children('img').hide();
        // $(this).children('img:first-child').show();
        //});
        $el.bind('afterRender', function (e) {
            console.log($(this));
            $(this).children('img').hide();
            $(this).children('img:first-child').show();
        });
    }
};

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