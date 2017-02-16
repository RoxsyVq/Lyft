
function validateForm(){
  var salida_enviar = document.getElementById("salida");
	var enlace=document.getElementById("enlace");
	
  validaName();
  
  validaEmail(); 

      
  if(validaName() == true  && validaEmail()==true){
      salida_enviar.innerHTML='<p style="color:green;">Formulario Enviado Correctamente ✔</p>';
	  
	 enlace.href="app.html";
	  
	  alert("LAB-"+aleatorio(100,999));
	 
  }
  else{
     salida_enviar.innerHTML='<p style="color:red;">Llena todos los campos correctamente X </p>'; 
	 
  }
	
}
function aleatorio(a,b) {
         return Math.round(Math.random()*(b-a)+parseInt(a));
		
         }





function primMayuscula(id){
    var nombreArray = id.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
} 

function validaName(){
  var name = document.getElementById("name"); 
  var isValid=false;
	var salida_name=document.getElementById("salName");
  if(name.value.length > 0 && name.value.match(/^[a-zA-Z\s]*$/) && name.value.length < 30){
    var palabra=primMayuscula(name.value);
    document.getElementById("name").value = palabra; 
    salida_name.innerHTML="<p style='color:green; font-size:15px;' >Nombre valido ✔</p>";
    isValid=true;
  }
  else{
    salida_name.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras en el nombre</p>";
    isValid=false;
  }   
  return isValid;
}


function validaEmail(){
  var email = document.getElementById("email");
	var salida_email=document.getElementById("salEmail");

  var isValid=false;
 if(email.value.length > 0 &&email.value.length < 50 && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){  
    salida_email.innerHTML="<p style='color:green; font-size:15px;'>Email valido ✔</p>";
    isValid=true;
  }
  else{
    salida_email.innerHTML="<p style='color:red; font-size:15px;' >Formato Invalido, Ej: name@domain.com</p>";
    isValid=false;
  }
  return isValid;
 }









