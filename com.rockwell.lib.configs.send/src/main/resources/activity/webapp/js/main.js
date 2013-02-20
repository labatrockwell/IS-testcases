var isConn;

//$(window).on("load", function() {
$(function(){
	isConn = new ISjs.Connection();
	isConn.events.addEventListener(ISjs.EventType.ConnectionOpened, ISOpened);
	isConn.events.addEventListener(ISjs.EventType.ConfigsReceived, ConfigsReceived);
	isConn.connect();
});

function ISOpened(){
	document.getElementById("txt1").innerHTML = "Connected to IS. You should see the config json populate below. You can disable sending the configs by setting configs.send=false or configs.compile=false";
};

function ConfigsReceived(evt){
	document.getElementById("txtConfigs").innerHTML = JSON.stringify(evt.message);
};