
 $.ajax({
	dataType: 'jsonp',
	url: 'http://sgcc.cl/sgccApi/public/api/actividades',
	type: 'GET',
	//data: {access_token: token, q: username},
	success: function(data){
	console.log(data);
		$.ajax({
			  dataType: 'jsonp',
              url: "http://sgcc.cl/sgccApi/public/api/actividades",
              type: "GET",
			//data: {access_token: token, count: num_photos},
			success: function(data2){
			console.log(data2.data2);
				for(x in data2.data){
					 console.log(data2.data.fecha);
				}
    			},
			error: function(data2){
				console.log(data2);
			}
		});
	},
	error: function(data){
		console.log(data);
	}
});