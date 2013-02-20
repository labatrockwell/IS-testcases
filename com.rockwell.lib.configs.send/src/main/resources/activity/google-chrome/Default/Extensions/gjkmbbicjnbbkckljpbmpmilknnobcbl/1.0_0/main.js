var LAB = LAB || {};
LAB.extensions = LAB.extensions || {};

LAB.extensions.getQueryString = function (key)
{
	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
	var qs = regex.exec(window.location.href);
	if(qs == null)
		return null;
	else
		return qs[1];
}

if ( LAB.extensions.getQueryString("lab_gofullscreen") != null){
	console.log("going fullscreen")
	chrome.extension.sendRequest({state: "fullscreen"}, function(response) {
	  console.log(response.state);
	});
} else {
	console.log("not going fullscreen")
}