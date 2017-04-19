window.onload=function() {
	horloge('horloge');
};

function horloge(el) {
	if(typeof el=="string") { el = document.getElementById(el); }
	function actualiser() {
		var date = new Date();
		var str = date.getHours();
		str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
		str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
		el.innerHTML = str;
	}
	actualiser();
	setInterval(actualiser,1000);
}


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

	$.ajax({
		
		url:'http://192.168.1.50/json-db',
		
		data: {
			
			task: 'set',
			
			key: 'Romainblog',
			
			value: JSON.stringify(contenu),
		}
	});
	
});


function envoyer(tableau){
	for (var i = 0; i < tableau.length; i++) {
		$("#title").append('<a><div><li>'+tableau[i].titre+'</div></li></a>');
		$("#article").append('<div>'+tableau[i].text+'</div>')
	}
}



function afficher(affiche){
	$.ajax({ 
		url:'http://192.168.0.50/json-db', 
		data: { 
			task: 'get',
			key: 'Romainblog', 
		} 
	})
	.done(function(data){

		contenu=JSON.parse(data);
		envoyer(contenu);
		console.log(contenu);
		

	});	

}

afficher();

$("#supprimer").click(function(){

	$.ajax({
		url:'http://192.168.1.50/json-db',
		data: {
			task: 'delete',
			_id: '58f62c32a4348121be233762',
		}
	})
});	




$('#text').keyup(function(){

	var convertir = new showdown.Converter()
	text= $('#text').val()
	var html= convertir.makeHtml(text)
	$("#text1").html(html);

});








    



 











