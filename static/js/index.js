//https://www.eclipse.org/paho/clients/js/
//
//function LED1_On() {
	//alert("led on");
	//console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
  
//}
//function LED1_Off(){	
	//alert("led off");
	//console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
// }
//

var btn=document.getElementById('btn'),contador=0;
function cambio()
{ if (contador==0)
{

message = new Paho.MQTT.Message("ENCENDER");
message.destinationName= "julyvelasco19@gmail.com/test1";

client.send(message);

contador=1;

}

else

{

message = new Paho.MQTT.Message("APAGAR");

message.destinationName= "julyvelasco19@gmail.com/test1";

client.send(message);

contador=0;

}

}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "julyvelasco19@gmail.com",
    password: "julyvelasco19",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("julyvelasco19@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "julyvelasco19@gmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  
Lista de mensajes
tired winnie the pooh GIF by good-night (im... de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY25/3 23:03

26 de marzo de 2021
enviame el link mijo de JULISA DAMARIS VELASCO AUCAPI�A

JULISA DAMARIS VELASCO AUCAPI�A
26/3 10:51
enviame el link mijo
hubo embebidos o no  de JULISA DAMARIS VELASCO AUCAPI�A

JULISA DAMARIS VELASCO AUCAPI�A26/3 10:52
hubo embebidos o no 
Mensaje de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY
26/3 10:52
https://cedia.zoom.us/j/82592864154
Vista previa de URL para Join our Cloud HD Video Meeting
Join our Cloud HD Video Meeting
Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems. Zo...

cedia.zoom.us
estaba resolviendo dudas de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY26/3 10:52
estaba resolviendo dudas
Mensaje de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY
26/3 10:57
http://servidor-marco.herokuapp.com/
entra  a mi web  y mira si funciona  de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY26/3 10:58
entra  a mi web  y mira si funciona 
si funca jajajaj de JULISA DAMARIS VELASCO AUCAPI�A

JULISA DAMARIS VELASCO AUCAPI�A
26/3 11:10
si funca jajajaj
WTF    de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY
26/3 11:10
WTF   
me asuste  xq se predio mi led  en el esp32 de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY26/3 11:11
me asuste  xq se predio mi led  en el esp32
jaajajaj q andaras haciendo  de JULISA DAMARIS VELASCO AUCAPI�A

JULISA DAMARIS VELASCO AUCAPI�A
26/3 11:11
jaajajaj q andaras haciendo 
me avisas lo que sea aun no acabo de cocina... de JULISA DAMARIS VELASCO AUCAPI�A

JULISA DAMARIS VELASCO AUCAPI�A26/3 11:12
me avisas lo que sea aun no acabo de cocinar no ha nadie en mi casa pilassss
veo q  con el link  de nuestro web podemos ... de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY
26/3 11:13
veo q  con el link  de nuestro web podemos  controlar el esp32  desde cualquier lugar jajaaj
de uma  ahi te aviso  de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY26/3 11:13
de uma  ahi te aviso 
jajajaja no se q hablas jajajaaj de JULISA DAMARIS VELASCO AUCAPI�A

JULISA DAMARIS VELASCO AUCAPI�A
26/3 11:20
jajajaja no se q hablas jajajaaj
Nada nada jajajja de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY
26/3 11:23
Nada nada jajajja
Hoy
Leído por última vez
var btn = document . getElementById ( 'bt... de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY
12:27
var btn=document.getElementById('btn'),contador=0;

function cambio()

{ if (contador==0)

{

message = new Paho.MQTT.Message("ENCENDER");

message.destinationName= "marco08580212@gmail.com/test1";

client.send(message);

contador=1;

}

else

{

message = new Paho.MQTT.Message("APAGAR");

message.destinationName= "marco08580212@gmail.com/test1";

client.send(message);

contador=0;

}

}
// called when a message arrives function ... de MARCO VINICIO SANCHEZ CULLAY

MARCO VINICIO SANCHEZ CULLAY
12:33
// called when a message arrives

function onMessageArrived(message){

console.log("onMessageArrived:"+message.payloadString);

//comando para poner el sensor desde esp32

document.getElementById("sensor").innerHTML=message.payloadString;

if(message.payloadString==='Encendido'){

document.getElementById("imagen").src="http://www.clker.com/cliparts/M/h/R/9/8/H/red-led-on-md.png";

} else if(message.payloadString==='Apagado'){

document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";



}

if(message.payloadString==='Encendido'){

document.getElementById("btn").innerHTML="Apagar";

} else if(message.payloadString==='Apagado'){

document.getElementById("btn").innerHTML="Encender";

}

}
