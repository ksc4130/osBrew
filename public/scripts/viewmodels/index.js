var socket = io.connect();

socket.on('updateTeam', function(data) {

});

var dragging;

var teams = ko.observableArray([]);

var vm  = function() {
	var _playAfterRenderHandler = function(els, data) {
		var $els = $(els);
		if(data.top) {
			$els.css({ top: data.top });
		}
		if(data.left) {
			$els.css({ left: data.left });
		}
	};
	return {
		teams: teams,
		playAfterRenderHandler: _playAfterRenderHandler
	}
}();

var playerModel = function() {
	if(this === window) {
		return new playerModel(arguments);
	}
	var self = this;
	var args = arguments[0]._id ? arguments[0] : arguments[0][0];
	if(typeof(args) === 'undefined') {
		args = {};
	}
	self._id = args._id || '';
	self.fname = ko.observable(args.fname || '');
	self.lname = ko.observable(args.lname || '');
	self.left = args.left || '';
	self.top = args.top || '';
	self.isEdit = ko.observable(false);
	self.edit = function() {
		self.isEdit(!self.isEdit());
	}
};

var teamModel = function() {
	if(this === window) {
		return new teamModel(arguments);
	}
	var self = this;
	var args = arguments[0]._id ? arguments[0] : arguments[0][0];
	if(typeof(args) === 'undefined') {
		args = {};
	}
	self._id = args._id || '';
	self.name = args.name || '';
	self.players = ko.observableArray([]);
	self.players.subscribe(function(v, e) {
		console.log(ko.toJSON(self));
		socket.emit('teamUpdate', ko.toJSON(self));
	});
	if(args.players && args.players.length > 0) {
		for(var i = 0; i < args.players.length; i++) {
			self.players.push(playerModel(args.players[i]));
		}
	}
	self.addPlayer = function() {
		self.players.push(playerModel());
	};
};

data = $.parseJSON(data);
for(var i = 0; i < data.length; i++) {
	teams.push(teamModel(data[i]));
}

ko.bindingHandlers.player = {
	init: function(el, val, allVal, vm, bc) {
		var $el = $(el);
		$el.draggable({
			revert: 'invalid',
			start: function(e, ui) {
				dragging = { bc: bc, $el: $el };
			}
		});
	}
};

ko.bindingHandlers.team = {
	init: function(el, val, allVal, vm ,bc) {
		var $el = $(el);
		$el.droppable({
			accept: '.player',
			drop: function(e, ui) {
				if(dragging.bc.$parent !== bc.$data) {
					//changed teams
					dragging.bc.$data.left = ui.offset.left - e.target.offsetLeft;
					dragging.bc.$data.top = ui.offset.top - e.target.offsetTop;
					dragging.bc.$parent.players.remove(dragging.bc.$data);
					bc.$data.players.push(dragging.bc.$data);
				}
			}
		});
	}
};

$(function() {
	ko.applyBindings(vm);
});