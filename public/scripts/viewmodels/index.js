var _posts = ko.observableArray([
	{
		title: 'Round One-Keg Time!!',
		date: new Date('09/30/2012').toLocaleDateString().split(","),
		content: "On the last leg moving round one from secondary to the keg where she'll be there primed and left to delicify to something ( fingers crossed ) amazing. So taste test confirms great flavor even without carbination. Can out more like an octoberfesty flavor than IPA. Stay tuned for round one conclusion in two weeks."
	},
	{
		title: 'Round One-Secondary Fermentation',
		date: new Date('09/25/2012').toLocaleDateString().split(","),
		content: "Time to move to secondary round one to secondary fermentation. See you in a week."
	},
	{
		title: 'Round One-Brewing',
		date: new Date('09/14/2012').toLocaleDateString().split(","),
		content: "Round on with 12lbs of barley, two ounces of hops, a bag of yeast, a cooler, two pots, four dogs, one two year. All went well until it was time for the yeast apparently you are suppose to pop it three hours before you are ready for it, oops. Time brewing two hours time waiting on yeast and geeting things we forgot about 6 hours."
	}
]);

var vm = function() {
	return {
		posts: _posts
	}
}();

ko.applyBindings(vm);