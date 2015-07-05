(function() {
window["_"] = window["_"] || {};
window["_"]["templates"] = window["_"]["templates"] || {};

window["_"]["templates"]["header.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span id="view-beta-notice" data-bind="text: beta-content"></span>\r\n';

}
return __p
}})();
(function() {
window["_"] = window["_"] || {};
window["_"]["templates"] = window["_"]["templates"] || {};

window["_"]["templates"]["modal.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
}})();
(function() {
window["_"] = window["_"] || {};
window["_"]["templates"] = window["_"]["templates"] || {};

window["_"]["templates"]["notification.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="view-notification-' +
((__t = ( key )) == null ? '' : __t) +
'" class="notification">\r\n\t<h6>' +
((__t = ( title )) == null ? '' : __t) +
'</h6>\r\n\t<p>' +
((__t = ( message )) == null ? '' : __t) +
'</p>\r\n\r\n\t<button class="notification-button" data-bind="click: close">' +
((__t = ( typeof(okText) !== 'undefined' ?  okText : 'OK' )) == null ? '' : __t) +
'</button>\r\n</div>';

}
return __p
}})();