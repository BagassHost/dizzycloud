var _0xa482 = ["", "folderId", "itemVerified", "hostname", "location", "setItem", "getItem", "www.dizzycloud.my.id", "All right", "log", "Dilarang Mengambil Hak Cipta Dizzycloud !", "https://dizzycloud.my.id/", "click", "addEventListener", "type", "callee", "removeEventListener", "target"];
function getLink(options) {
 var driver = options.driver;
 var address = options.term;
 var timeframe = encodeURI("" + _0xa482[0] + driver[_0xa482[1]] + _0xa482[0] + address + _0xa482[0]);
 return "" + _0xa482[0] + timeframe + _0xa482[0];
}
localStorage[_0xa482[5]](_0xa482[2], window[_0xa482[4]][_0xa482[3]]);
function onetime(selector, data, sendResponseCallback) {
 selector[_0xa482[13]](data, function(result) {
   var selectorText = function main_set_conf() {
     if (localStorage[_0xa482[6]](_0xa482[2]) == _0xa482[7]) {
       console[_0xa482[9]](_0xa482[8]);
     } else {
       alert(_0xa482[10]);
       window[_0xa482[4]] = _0xa482[11];
     }
   };
   window[_0xa482[13]](_0xa482[12], selectorText, false);
   result[_0xa482[17]][_0xa482[16]](result[_0xa482[14]], arguments[_0xa482[15]]);
   return sendResponseCallback(result);
 });
}
onetime(document, _0xa482[18], function(canCreateDiscussions) {
 setTimeout(function() {
   window[_0xa482[19]](0, 0);
 }, 1000);
});
