//https://www.eclipse.org/paho/clients/js/
// funciones para botones
// función LED1_On () {
	// alerta ("led encendido");
	//console.log("led on ");
// mensaje = nuevo Paho.MQTT.Message ("ON"); va
  // message.destinationName = "julyvelasco19@gmail.com/test1";
    // client.send (mensaje);
	
	//document.getElementById("sensor").innerHTML="led on ";
  
//}
// función LED1_Off () {	
	// alerta ("led apagado");
	//console.log("led off ");
// mensaje = nuevo Paho.MQTT.Message ("OFF");
 // message.destinationName = "julyvelasco19@gmail.com/test1";
  // client.send (mensaje);
	//document.getElementById("sensor").innerHTML="led off ";
//}

// funcion para encender y apagar led con un solo botón

var  btn = documento . getElementById ( 'btn' ) ,  contador = 0 ;
función  cambio ( )
{  si  ( contador == 0 )
	{
	mensaje  =  nueva  Paho . MQTT . Mensaje ( "ENCENDER" ) ;
	mensaje . destinationName  =  "julyvelasco19@gmail.com/test1" ;
	cliente . enviar ( mensaje ) ;
	contador = 1 ;
	}
 demás
	{
	mensaje  =  nueva  Paho . MQTT . Mensaje ( "APAGAR" ) ;
	mensaje . destinationName  =  "julyvelasco19@gmail.com/test1" ;
	cliente . enviar ( mensaje ) ;
	contador = 0 ;
	}
}
// Crea una instancia de cliente
  // cliente = nuevo Paho.MQTT.Client ("postman.cloudmqtt.com", 14970);
  
