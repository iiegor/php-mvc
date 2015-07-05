Namespace('Reaper');

Reaper.ViewManager = Class.extend({
    init: function(doc) {
        this._document = doc || window.document;
        this._views = {};
    },

    register: function(id, instance) {
        var element = this._document.getElementById('view-' + id);
        ko.applyBindings(instance, element);
        instance.setup();
        this._views[id] = instance;
        return instance;
    },

    unregister: function(id) {
        id = id.replace('view-', '');
        
        if (typeof this._views[id] === 'undefined') {
            return null;
        }

        return delete this._views[id];
    },

    getViewById: function(id) {
        if (typeof this._views[id] === 'undefined') {
            return null;
        }
        return this._views[id];
    }
});