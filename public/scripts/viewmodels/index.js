var _posts = ko.observableArray([
	{
		title: 'One',
		date: new Date().toLocaleDateString().split(","),
		content: 'content One'
	}
]);

var vm = function() {
	return {
		posts: _posts
	}
}();

ko.applyBindings(vm);