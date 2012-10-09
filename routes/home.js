
exports.index = function(req, res){
  res.render('index', { title: 'osBrew-Home', active: 'home' });
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