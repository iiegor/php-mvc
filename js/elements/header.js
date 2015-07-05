Namespace('Reaper.Elements');

Reaper.Elements.Header = Class.extend({
	init: function(_session) {
		this.isExpanded = ko.observable(false);
		this.session = _session();
		this._timeout = null;
	},

	mouseover: function() {
		if (this._timeout) {
			clearTimeout(this._timeout);

			this.isExpanded(true);
		} else {
			var target = !this.isExpanded();

			this.isExpanded( target );
		}
	},

	mouseleave: function() {
		var self = this;
		var target = !this.isExpanded();
		var delay = target ? 0 : 3000;

		this._timeout = setTimeout(function() {
			self.isExpanded( target );
		}, delay);
	},

	setup: function() {
		return this;
	}
});