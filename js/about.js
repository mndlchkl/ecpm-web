var colabs={};
 var request;
 if (request) {
     request.abort();
 }
 request = $.ajax({
    dataType: 'jsonp',
	url: 'http://sgcc.cl/sgccApi/public/api/colabs',
	type: 'GET',
	crossDomain:true,
 });
 request.done(function(data) {
      console.log(data);
		  for (var key in data) {
          colabs=data;
            $('#colabs .row').append('  <div onclick="verperfil('+data[key].Id+')" value="'+ data[key].Id+'" class="colab-card  col m3 s6">'+
                ' <div class="center col m12 s12">'+
                 '<img  class="  circle responsive-img" src="http://sgcc.cl/baj/web/'+data[key].RutaImg+'" alt="">'+
                 ' </div>  '+
                 ' <div   class="colab-detail col m12 s12">'+
                 '<h5>'+data[key].Nombre1+' '+data[key].Apellido1+'</h5><hr class="center detail-sep" >'+
                 '<p>'+data[key].Descripcion+' </p>'+
              '</div> '+
            '</div>');
		}

 });
 request.fail(function(jqXHR, textStatus, errorThrown) {
     console.log("Request failed: " + textStatus + errorThrown);
 });
 request.always(function(data) {
 //	console.log(data);

 });


function verperfil(id){
      console.log(colabs);
        $( "#contenido" ).load( "colab.html", function() {
             for (var key in colabs) {
                    if (colabs[key].Id==id) {
                            $('#nombre ').html(colabs[key].Nombre1+' '+colabs[key].Apellido1);
               
                            $('#bio ').html(colabs[key].Bio);
                               $("#foto").attr("src",'http://localhost/TESIS/SGCCbasic/web/'+colabs[key].RutaImg);
                        
 
                    }
                }

            window.scrollTo(0, 0);
           
        }); 
}
 

