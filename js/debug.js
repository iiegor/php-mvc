Namespace('Reaper');

Reaper.Debug = function(type, str) {
	switch(type) {
		case "error":
			console.log("%c FAILED ", "background: #ff0000; color: #ffffff", str, arguments[2]);
			break;
		case "log":
		case "info":
			console.log("%c INFO ", "background: #555555; color: #ffffff", str);
			break;
		case "ok":
		case "success":
			console.log("%c OK ", "background: #00ff00; color: #000000", str);
	}
}