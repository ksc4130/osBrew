function descape(str) {
	str = str.replace(/&(l|g|quo)t;/g, 
		function(a,b){
			return {
				l   : '<',
				g   : '>',
				quo : '"'
			}[b];
		});
	return str;
}
