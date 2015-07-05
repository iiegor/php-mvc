Namespace('Reaper.Elements');

Reaper.Elements.Notification = Class.extend({
	init: function(_el) {
		this.el = _el;
	},

	close: function() {
		this.el.remove();

		ViewManager.unregister(this.el.attr('id'));
	},

	setup: function() {
		return this;
	}
});