var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.4573893, lng: -71.53153089999999},
    zoom: 15
  });
	var ubicacion={lat: -16.4573893, lng: -71.53153089999999}
	var ubicacion2={lat: -16.45614, lng: -71.532708}
	var ubicacion3={lat: -16.450948 , lng: -71.534692}
	var ubicacion4={lat: -16.450824 , lng: -71.525894}
	var ubicacion5={lat: -16.461762 , lng: -71.527879}




	  
	var image = 'img/here.png';
	var marker = new google.maps.Marker({
		map: map,
		position: ubicacion,
		title:'Aqui Estas !!',
		
			
	});
	var image = 'img/coche5x.png';
		var marker = new google.maps.Marker({
		map: map,
		position: ubicacion2,
		title:'auto A!!',
		icon: image
			
	});
	var imag = 'img/coche4x.png';
	var marker = new google.maps.Marker({
		map: map,
		position: ubicacion3,
		title:'Auto-B',
		icon: imag
			
	});
	var img= 'img/coche5x.png';
	var marker = new google.maps.Marker({
		map: map,
		position: ubicacion5,
		title:'Auto-C',
		icon:img
			
	});
	var image = 'img/coche5x.png';
	var marker = new google.maps.Marker({
		map: map,
		position: ubicacion4,
		title:'Auto-D',
		icon:image
			
	});
 
}

