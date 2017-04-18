var envoi= [];
var titre = ""
var text = ""

$("#titre").keyup(function(){
	titre = $("#titre").val();

});	

$("#text").keyup(function(){
	text = $("#text").val();

});	

$("#button").click(function(){

	var contenu = {"titre" : titre, "text" : text}
	$("input").val("");
	$("textarea").val("");
	envoi.push(contenu);

    $.ajax({
        
        url:'http://192.168.1.50/json-db',
        
        data: {
            
            task: 'set',
            
            key: 'Romainblog',
            
            value: JSON.stringify(envoi),
        }
    });
    
});


function envoyer(tableau){
 	for (var i = 0; i < tableau.length; i++) {
 		$("#title").append('<a><div><li>'+tableau[i][i].titre+'</div></li></a>');
 		$("#article").append('<div>'+tableau[i][i].text+'</div>')
 	}
}



function afficher(){
	$.ajax({ 
		url:'http://192.168.1.50/json-db', 
		data: { 
			task: 'get',
			key: 'Romainblog', 
			} 
	})
	.done(function(data){

		envoi=JSON.parse(data);
		console.log(envoi);
		envoyer(envoi);
	});	

}

afficher();

	$("#supprimer").click(function(){
		
	$.ajax({
    url: 'http://192.168.1.50/json-db',
    data: {
    	task: 'delete',
    	key: 'Romainblog',
          	}
		});
	});

$('#text').keyup(function(){

	var convertir = new showdown.Converter()
    text= $('#text').val()
    var html= convertir.makeHtml(text)
    $("#text1").html(html);

});



    // $("#modifier").click(function(){
    // 	$("#article").html(function(){

    // 	});
    // });



		






    



 











