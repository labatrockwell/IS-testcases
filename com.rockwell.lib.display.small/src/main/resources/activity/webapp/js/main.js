var isConn;

//$(window).on("load", function() {
$(function(){
	isConn = new ISjs.Connection();
	isConn.events.addEventListener(ISjs.EventType.ConnectionOpened, ISOpened);
	isConn.connect();
});


function ISOpened(){
	document.body.innerHTML = "This webpage should go to an odd size (check IS logs if nothing happens)";
};