//including custom css-loading function
//because requirejs does not support loading css
function loadCSS(url){
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	document.getElementsByTagName("head")[0].appendChild(link);
};

require(["basepath"],function(){
	//load CSS here
	require([BASEPATH+"js/libs/jquery/jquery-1.9.1.js"], function(){
		require([BASEPATH+"js/libs/lab/labjs-r3.js",
			BASEPATH+"js/libs/lab/is-2.0.0.js"], function(){
			require(["main"]);
		});
	});
});