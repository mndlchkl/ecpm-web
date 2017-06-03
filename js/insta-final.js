var token = '4903487647.4eec902.f2d19fbaa8084c50883f4480a8b70dae',
    username = 'ecpm_sur',
    num_photos = 9;
$('#insta-grid').html('<div id="load" class="center-align" style="padding-top: 100px"><img src="images/gears.svg"></div>');
/* Guarda la petición en una variable y previene su ejecución si ya esta siendo ejecutada*/
var request;
if (request) {
    request.abort();
}

 request = $.ajax({
    url: 'https://api.instagram.com/v1/users/search',
    dataType: 'jsonp',
    type: 'GET',
    data: {
        access_token: token,
        q: username
    },
    success: function(data) {
      //  console.log(data);
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {
                access_token: token,
                count: num_photos
            },
            success: function(data2) {
            console.log(data2);
                $("#load").remove();
                for (x in data2.data) {
                    if (data2.data[x].type == "image") {

                            $('#insta-grid').append('<li>'+
                '<div  class="card insta-polaroid">'+
                   ' <img src= " '+  data2.data[x].images.standard_resolution.url+' " alt="">'+
                '</div>  <a target="_blank" href="' + data2.data[x].link + 
                            '" class="instalink"><div  class="instalink card insta-comments">'+
                '<h5 class="light grey-text text-lighten-3"><i class="fa fa-heart"></i>&nbsp;'+
                           data2.data[x].likes.count+'&emsp;<i class="fa fa-comment"></i>&nbsp; '+data2.data[x].comments.count+' </h5>'+
                    '<p class="light grey-text text-lighten-3" > '+data2.data[x].caption.text+'</p>'+
                '</div></a>'+
           ' </li>');

                               

                    } else {
                            $('#insta-grid').append('<li>'+
                '<div  class="card insta-polaroid">'+
                   ' <img src= " '+  data2.data[x].images.standard_resolution.url+' " alt="">'+
                '</div>  <a target="_blank" href="' + data2.data[x].link + 
                            '" class="instalink"><div  class="instalinkcard insta-comments">'+
                '<h5 class="light grey-text text-lighten-3"><i class="fa fa-heart"></i>&nbsp;'+
                           data2.data[x].likes.count+'&emsp;<i class="fa fa-comment"></i>&nbsp; '+data2.data[x].comments.count+' </h5>'+
                    '<p class="light grey-text text-lighten-3" > '+data2.data[x].caption.text+'</p>'+
                '</div></a>'+
           ' </li>');
                    }
                }
                $('.slider').slider({
                    height: 600
                });
            },
            error: function(data2) {
                console.log(data2);
            }
        });
    },
    error: function(data) {
        console.log(data);
    }
});