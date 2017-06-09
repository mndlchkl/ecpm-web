 var notas={};
 var request;
 if (request) {
     request.abort();
 }
 request = $.ajax({
     url: "endpoints/notas.php",
     type: "get",
 });
 request.done(function(data) {
    notas=JSON.parse(data);
    console.log(notas);
     for (var key in notas) {
       $('#listadoNotas').append(''+
        ' <div  id="verNota" class="col s12 m6 padcero">'+
           ' <div class="marco">'+
             '<div class="mascara">'+
                '<img class="responsive-img" src="' +notas[key].url +'">'+
                  '<div   class="gallery-box-caption">'+
                   ' <div  style="cursor:pointer" class="gallery-box-content">'+
                      '<h4  onclick="sop('+notas[key].id+')" value="'+ notas[key].id +'" data-idnota="'+notas[key].id+'"  style="text-align: center"  >'+ notas[key].header +'</h4>'+
                   ' </div>'+
                  '</div>'+
             ' </div>'+
           ' </div>'+
          '</div>');

     }
 });
 request.fail(function(jqXHR, textStatus, errorThrown) {
     console.log("Request failed: " + textStatus + errorThrown);
 });
 request.always(function() {});
 
function sop(idnota){
      console.log(notas);
        $( "#contenido" ).load( "notadeprensa.html", function() {
             for (var key in notas) {
                    if (notas[key].id==idnota) {
                            $('#header ').html(notas[key].header);
                            $('#subheader ').html(notas[key].subheader);
                            $('#body ').html(notas[key].body);
        notas[key].url==undefined? $("#link ").css( "display", "none" ) :$("#link ").attr("href", notas[key].url);
                           //   $("#pic").attr("src",notas[key].pic);
                              $('#fecha').html(notas[key].created2);
                              $("#author").html(notas[key].author);
 
                    }
                }

            window.scrollTo(0, 0);
           
        });


       


   
}