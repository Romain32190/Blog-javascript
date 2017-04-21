function HeureCheckEJS()
{
	krucial = new Date;
	heure = krucial.getHours();
	min = krucial.getMinutes();
	sec = krucial.getSeconds();
	jour = krucial.getDate();
	mois = krucial.getMonth()+1;
	annee = krucial.getFullYear();
	if (sec < 10)
		sec0 = "0";
	else
		sec0 = "";
	if (min < 10)
		min0 = "0";
	else
		min0 = "";
	if (heure < 10)
		heure0 = "0";
	else
		heure0 = "";
	DinaHeure = heure0 + heure + ":" + min0 + min + ":" + sec0 + sec;
	which = DinaHeure
	if (document.getElementById){
		document.getElementById("heure").innerHTML=which;
	}
	setTimeout("HeureCheckEJS()", 1000)
}
window.onload = HeureCheckEJS;


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
	$("textarea").val("");
	$("input").val("");

	$.ajax({ 
		url:'http://192.168.1.50/json-db',
		data: { 
			task: 'set', 
			key: 'Romainblog', 
			value: JSON.stringify(contenu),

		} 
	});
});





var recup;

$.ajax({ 
	url:'http://192.168.1.50/json-db', 
	data: { 
		task: 'get',
		key: 'Romainblog', 
	} 
})
.done(function(data){

	recup=JSON.parse(data);
	console.log(recup);

	for (var i = 0; i < recup.length; i++) {
		$("#title").append('<div><option value="'+i+'">'+recup[i].titre+'</option></div>');
		$("#article").append('<div class="ID'+i+'">'+recup[i].text+'</div>');
		$('#title').html()
		$('#contenu').append('<li value="'+i+'">'+recup[i].titre+' <button class="waves-effect waves-light btn-small red" id="supprimer">Supprimer</button></li>');
	}
	$('#supprimer').click(function(){
		var id = $(this).data('_id');


		$.ajax({
			url:'http://192.168.1.50/json-db',
			data: {
				task: 'delete',
				_id: id,
			}
		});

	});

});

$('#text').keyup(function(){

	var convertir = new showdown.Converter()
	text= $('#text').val()
	var html= convertir.makeHtml(text)
	$("#text1").html(html);

});


























































