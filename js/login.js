function init(){
	 
	var objetos = {"Paises":[
16
            {"nombre":"Peru","Cod":+51,"img":"img/pe.jpg"},
17
            {"nombre":"Carlos","edad":17}
18
        ]};
19
 
20
    document.getElementById('content').innerHTML = objetos.Personas[1].nombre ;
21
    /*Declarar un objeto JSON con una funcion en un atributo
22
     notese el uso de "this" que hace referencia a el objeto en sí, es decir a persona*/
23
    var persona = {"name":"Jorge","edad":23,
24
                  "avisar":function(){alert("Hola soy "+this.name);}
25
                 };
26
 
27
    persona.avisar();

}