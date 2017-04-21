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

	var recup;


	// $("#titre").keyup(function(){
	// 	titre = $("#titre").val();
	// 	text = $("#text").val();

	// });	

	// $("#text").keyup(function(){

	// });	


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
			$('#contenu').append('<li >'+recup[i].titre+' <button  value="'+recup[i]._id+'" class="waves-effect waves-light btn-small red supprimer">Supprimer</button><button value="'+recup[i]._id+'" class="waves-effect waves-light btn-small blue modifier">Modifier</button></li>');
		}
		$('.supprimer').click(function(){
			var id = $(this).attr('value');
			console.log(id);

			$.ajax({
				url:'http://192.168.1.50/json-db',
				data: {
					task: 'delete',
					_id: id,
				}
			});

		});

	});
	$('.modifier').click(function(){

		var contenu = {"titre" : $("#title").val(), "text" : $("#article").val()};
		var id = $(this).attr('value');
		console.log(id);
		
		$("#title").val("");
		$("#article").val("");
		
		$.ajax({
			url:'http://192.168.1.50/json-db',
			data: {
				task: 'update',
				_id: id,
				value: JSON.stringify(contenu),
			}
		});
	});

	$('#text').keyup(function(){

		var convertir = new showdown.Converter()
		text= $('#text').val();
		titre= $('#titre').val();
		var html= convertir.makeHtml(text)
		$("#text1").html(html);

	});



























































