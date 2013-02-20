var isConn;
var outputs, inputs;

//$(window).on("load", function() {
$(function(){
	isConn = new ISjs.Connection();
	isConn.events.addEventListener(ISjs.EventType.ConnectionOpened, ISOpened);
	isConn.events.addEventListener(ISjs.EventType.ConfigsReceived, ConfigsReceived);
	isConn.connect();
});

function ISOpened(){
	document.getElementById("txt1").innerHTML = "Connected to IS. You should see the random numbers update below. If you want to test having all messages get bridged, just set the live config message.bridge.all=true";
};

function ConfigsReceived(evt){
	outputs = evt.message.space.activity.routes.outputs.split(":");
	inputs = evt.message.space.activity.routes.inputs.split(":");
	initInputs();
	initRandoms();
};

function initInputs(){
	for(index in inputs){
		isConn.events.addEventListener(ISjs.EventType.RoutePrefix + inputs[index], gotInput);
	}
};

function gotInput(evt){
	document.getElementById("i:"+evt.type.substr(ISjs.EventType.RoutePrefix.length)).innerHTML = evt.message.value;
	console.log(evt);
};

function initRandoms(){
	for(index in outputs){
		createInterval(outputs[index]);
	}
};

function createInterval(f){
	return setInterval(function(){updateOutput(f, Math.random())}, 1000);
};

function updateOutput(o, n){
	document.getElementById("o:"+o).innerHTML = n;
	isConn.sendMessage(o, {value:n});
};