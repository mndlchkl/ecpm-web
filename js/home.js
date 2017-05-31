 var home={};
 var request;
 if (request) {
     request.abort();
 }
    console.log("hme.js");
 request = $.ajax({
     url: "endpoints/home.php",
     type: "get",
 });
 request.done(function(data) {
    home = JSON.parse(data);
    console.log(home)
    $('#parrafo1').text(home.parrafo1);
    $("#url1").attr("src",home.url1);
     $('#parrafo2').text(home.parrafo2);
    $("#url2").attr("src",home.url2);
    $('#titulo1').text(home.titulo1);
    $("#titulo2").text(home.titulo2);
 });
 request.fail(function(jqXHR, textStatus, errorThrown) {
     console.log("Request failed: " + textStatus + errorThrown);
 });
 request.always(function() {});
 
 