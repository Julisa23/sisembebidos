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
  
  cliente  =  nueva  Paho . MQTT . Cliente ( "maqiatto.com" ,  8883 ,  "web_"  +  parseInt ( Math . Aleatorio ( )  *  100 ,  10 ) ) ;

  // establecer controladores de devolución de llamada
  cliente . onConnectionLost  =  onConnectionLost ;
  cliente . onMessageArrived  =  onMessageArrived ;
  var  options  =  {
   useSSL : falso ,
    nombre de usuario : "julyvelasco19@gmail.com" ,
    contraseña : "julyvelasco19" ,
    onSuccess : onConnect ,
    onFailure : doFail
  }

  // conecta el cliente
  cliente . conectar ( opciones ) ;
   
  // llamado cuando el cliente se conecta
  function  onConnect ( )  {
    // Una vez que se haya establecido la conexión, suscríbase y envíe un mensaje.
    consola . log ( "Conectado ..." ) ;
	
    cliente . subscribe ( "julyvelasco19@gmail.com/test" ) ;
    mensaje  =  nueva  Paho . MQTT . Mensaje ( "hola desde la web" ) ;
    mensaje . destinationName  =  "julyvelasco19@gmail.com/test1" ;
    cliente . enviar ( mensaje ) ;
	
  }

  function  doFail ( e ) {
    consola . log ( e ) ;
	
  }

  // llamado cuando el cliente pierde su conexión
  function  onConnectionLost ( responseObject )  {
    if  ( responseObject . errorCode  ! ==  0 )  {
      consola . log ( "onConnectionLost:" + responseObject . errorMessage ) ;
    }
  }

  // llamado cuando llega un mensaje
  function  onMessageArrived ( mensaje )  {
    consola . log ( "onMessageArrived:" + mensaje . payloadString ) ;
	  // comando para poner el sensor desde esp32
	  documento . getElementById ( "sensor" ) . innerHTML = mensaje . payloadString ;
	  if ( message . payloadString === 'Encendido' ) {
		 documento . getElementById ( "imagen" ) . src = "http://www.clker.com/cliparts/M/h/R/9/8/H/red-led-on-md.png" ;
	  }  else  if ( message . payloadString === 'Apagado' ) {
		 documento . getElementById ( "imagen" ) . src = "http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png" ;
 		
	  }
	  if ( message . payloadString === 'Encendido' ) {
	  	documento . getElementById ( "btn" ) . innerHTML = "Apagar" ;
	  }  else  if ( message . payloadString === 'Apagado' ) {
		documento . getElementById ( "btn" ) . innerHTML = "Encender" ;
	  }
  }
