Namespace('Reaper');

Reaper.windowPort = Reaper.windowPort || {};

(function() {
  var port_;

  Reaper.windowPort.sendMessage = function(message) {
    var port = getPort_();
    try {
      port.postMessage(message);
    }
    catch (ex) {
      trace('Error sending message via port: ' + ex);
    }
  };

  Reaper.windowPort.addMessageListener = function(listener) {
    var port = getPort_();
    port.onMessage.addListener(listener);
  };

  var getPort_ = function() {
    if (!port_) {
      port_ = chrome.runtime.connect();
    }
    return port_;
  };
})();