moment.locale('es') 
console.log(moment("2017-06-08 21:30:26").fromNow());
moment("20111031", "YYYYMMDD").fromNow(); // 6 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 5 years ago
moment().startOf('day').fromNow();        // 20 hours ago
moment().endOf('day').fromNow();          // in 4 hours
moment().startOf('hour').fromNow();       // 9 minutes ago
 //http://www.dotnetbull.com/2013/08/parsererror-jquery-ajax-request-jsonp.html
//http://help.slimframework.com/discussions/questions/75-how-can-i-make-a-callback-eventjsonp-with-slim-framework
 var home={};
 var request;
 if (request) {
     request.abort();
 }
 request = $.ajax({
    dataType: 'jsonp',
	url: 'http://sgcc.cl/sgccApi/public/api/actividades',
	type: 'GET',
	crossDomain:true,
 });
 request.done(function(data) {
  console.log(data);
		  for (var key in data) {
 			$('#actividades').append('<div class="row">'+
					      '<div class="white-text col m8 s12 ">'+
								'<h3>'+data[key].titulo+'</h3>'+
								'<h5>'+ data[key].lugar+'</h5>'+
								'<p>'+ data[key].descripcion +'</p>'+
								'<p>' + data[key].fecha+'</p>'+
					      		'<p>'+ moment(data[key].inicia).fromNow() +'</p>'+
					      '</div>'+
					       '<div  class="col m4 s12 ">'+
							'<img class="responsive-img" src="http://sgcc.cl/baj/web/'+data[key].img +'">'+
					      '</div>'+
					       '<hr class="style9">'+
			' </div>');

		}

 });
 request.fail(function(jqXHR, textStatus, errorThrown) {
     console.log("Request failed: " + textStatus + errorThrown);
 });
 request.always(function(data) {
 //	console.log(data);

 });
 
 

