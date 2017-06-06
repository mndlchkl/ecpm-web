var token = '4903487647.4eec902.f2d19fbaa8084c50883f4480a8b70dae',
    username = 'ecpm_sur',
    num_photos = 9;
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/search',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, q: username},
	success: function(data){
		//console.log(data);
		$.ajax({
			url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent',
			dataType: 'jsonp',
			type: 'GET',
			data: {access_token: token, count: num_photos},
			success: function(data2){
				//console.log(data2);
				for(x in data2.data){
					if (data2.data[x].type == "image"){
						$('#insta-grid').append('<div class="col s12 m6 padfotos"><div class="marco"><div class="mascara"><a target="_blank" href="'+data2.data[x].link+'"><img class="responsive-img" src="'+data2.data[x].images.standard_resolution.url+'"> <div class="gallery-box-caption"><div class="gallery-box-content"><h4><i class="fa fa-heart"></i>&nbsp;'+data2.data[x].likes.count+'&emsp;<i class="fa fa-comment"></i>&nbsp;'+data2.data[x].comments.count+'</h4></div></div> </a></div></div></div>');
					}else{
						$('#insta-grid').append('<div class="col s12 m6 padfotos"><div class="marco"><div class="mascara"><a target="_blank" href="'+data2.data[x].link+'"><img class="responsive-img" src="'+data2.data[x].images.standard_resolution.url+'"> <div class="gallery-box-caption"><div class="gallery-box-content"><h4><i class="fa fa-play"></i></h4></div></div> </a></div></div></div>');
					}
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