var isConn;

//$(window).on("load", function() {
$(function(){
	isConn = new ISjs.Connection();
	isConn.events.addEventListener(ISjs.EventType.ConnectionOpened, ISOpened);
	isConn.events.addEventListener(ISjs.EventType.ConfigsReceived, ConfigsReceived);
	isConn.events.addEventListener(ISjs.EventType.StateStartup, Startup);
	isConn.events.addEventListener(ISjs.EventType.StateActivate, Activate);
	isConn.events.addEventListener(ISjs.EventType.StateDeactivate, Deactivate);
	isConn.events.addEventListener(ISjs.EventType.StateShutdown, Shutdown);
	isConn.connect();
});

function ISOpened(){
	document.getElementById("txt1").innerHTML = "Connected to IS. You can set a live config lifecycle.send=false in order to test NOT sending lifecycle events. Otherwise the Lifecycle: space below should display the current I.S. state of this activity.";
};

function ConfigsReceived(evt){
	document.getElementById("txt2").innerHTML = "Configured Lifecycle.send: " + evt.message.lifecycle.send;
};

function Startup(){
	document.getElementById("txtLifecycle").innerHTML = "startup";
};

function Activate(){
	document.getElementById("txtLifecycle").innerHTML = "activate";
};

function Deactivate(){
	document.getElementById("txtLifecycle").innerHTML = "deactivate";
};

function Shutdown(){
	document.getElementById("txtLifecycle").innerHTML = "Shutdown";
};