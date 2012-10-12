var fs = require('fs');
//less
var less = require('less');
var parser = new(less.Parser)({
    paths: ['./public/styles/boxes'], // Specify search paths for @import directives
    filename: 'style.less' // Specify a filename, for better error messages
});

exports.index = function(req, res){
	res.render('index', { title: 'osBrew-Home', active: 'home' });
	// fs.readFile('./public/styles/boxes/style.less', 'utf-8', function (err, data) {
	// 	if (err) throw err;
	// 	parser.parse(data, function (e, tree) {
	// 		fs.writeFile('./public/styles/boxes/style.css', tree.toCSS({ compress: true }), function(err) {
	// 			if(err) {
	// 				console.log('error writing less to css', './public/styles/boxes/style.less');
	// 			}
	// 			else {
	// 				console.log('good less parse', './public/styles/boxes/style.less');
	// 			}
	// 			res.render('index', { title: 'osBrew-Home', active: 'home' });
	// 		});
	// 	});
	// });
};

exports.indexO = function(req, res){
  res.render('indexO', { title: 'osBrew-Home', active: 'home' });
};

exports.gallery = function(req, res){
  res.render('gallery', { title: 'osBrew-Gallery', active: 'gallery' });
};

exports.about = function(req, res){
  res.render('about', { title: 'osBrew-About', active: 'about' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'osBrew-Contact', active: 'contact' });
};

exports.login = function(req, res){
	console.log(req.body.email);
  	res.render('index', { title: 'osBrew-Home', active: 'index' });
};