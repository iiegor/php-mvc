/**
 *  Definitifion for the Class Object
 */
(function(){
    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
    this.Class = function(){};

	Class.extend = function(prop) {
		var _super = this.prototype;

		initializing = true;
		var prototype = new this();
		initializing = false;

		for (var name in prop) {
			prototype[name] = typeof prop[name] == "function" &&
			typeof _super[name] == "function" && fnTest.test(prop[name]) ?

			(function(name, fn){
				return function() {
					var tmp = this._super;
					this._super = _super[name];
					var ret = fn.apply(this, arguments);
					this._super = tmp;

					return ret;
				};
			})(name, prop[name]) : prop[name];
		}

		function Class() {
			if ( !initializing && this.init )
			this.init.apply(this, arguments);
		}

		Class.prototype = prototype;
		Class.prototype.constructor = Class;
		Class.extend = arguments.callee;
		return Class;
	};

    Class.addSingleton = function(ctor) {
        ctor.getInstance = function(params) {
            return ctor._instance || (ctor._instance = new ctor(params));
        }
    };

    this.Iface = function(methods) {
        this.methods = methods;
    };

    this.Iface.extractPublicMethodsFrom = function(cls) {
        var methods = [];

        for(var propname in cls.prototype) {
            var val = cls.prototype[propname];
            
            if(propname != 'constructor' && propname != 'init' && typeof val === 'function' && propname.charAt(0) != '_') {
                methods.push(propname);
            }
        }

        return methods;
    };

    Iface._implementations = {}; // map class-name => list of interface-names
    Iface.defineImplementation = function(iter, cls) {
        /*
         * if wanted, this block would test the function to check if it implements all of its interface's methods,
         * and throw an exception if it doesn't upon definition

        var f_cls = eval(cls);
        var f_iter = eval(iter);

        for(var iname in f_iter.prototype) {
            var is_defined = (typeof f_cls.prototype[iname] === 'function' && fnTest.test(f_cls.prototype[iname]));

            if(!is_defined) {
                var exc = 'Fatal: Class "' + cls + '" does not implement required "' + iname + '" of interface "' + iter + '".';
                throw new Error(exc);
            }
        }
        */

        if(!(cls in Iface._implementations)) {
            Iface._implementations[cls] = [];
        }

        Iface._implementations[cls].push(iter);
    };
})();

/**
 *  Definitifion for the Namespace Function
 */
Namespace = function() {
	var a=arguments, o=null, i, j, d;
	for (i=0; i<a.length; i=i+1) {
		d=a[i].split(".");
		o=window;
		for (j=0; j<d.length; j=j+1) {
			o[d[j]]=o[d[j]] || {};
			o=o[d[j]];
		}
	}
	return o;
}