
exports.index = function(req, res){
  res.render('index', { title: 'osBrew', active: 'home' });
};

exports.gallery = function(req, res){
  res.render('gallery', { title: 'osBrew', active: 'gallery' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'osBrew', active: 'contact' });
};