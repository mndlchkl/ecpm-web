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
  //  home = JSON.parse(data);
		  for (var key in data) {
		   $('#listado').append('  <li class="collection-item avatar">'+
						     ' <img src="http://sgcc.cl/baj/web/'+data[key].img +'" alt="" class="act-circle ">'+
						      '<div class="actInfo"><h4>'+ data[key].titulo +'</h4>'+
						     ' <p> '+ data[key].lugar+'. ' + data[key].fecha+'<br>'+
						         data[key].descripcion +
						     ' </p></div> '+
					    '</li>');

		}

 });
 request.fail(function(jqXHR, textStatus, errorThrown) {
     console.log("Request failed: " + textStatus + errorThrown);
 });
 request.always(function(data) {
 //	console.log(data);

 });
 
 

