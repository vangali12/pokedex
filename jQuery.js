$(document).ready(function(){

	for (var i=1; i<21; i++) {
		$.ajax({
			method: 'GET',
			url: "https://pokeapi.co/api/v2/pokemon/" + i + "/",
			success: function(res) {
				var pic = (res['sprites']['front_default']);
				$("#images").append('<img id="' + res['id'] + '" src="' + pic + '">');

			}
		});
	}

	$(document).on("click", "img", function(){
		$.ajax({
			method: 'GET',
			url: "https://pokeapi.co/api/v2/pokemon/" + $(this).attr("id") + "/",
			success: function(res) {
				
				$("#select").empty();
				$("#select").append('<img src="' + res['sprites']['front_default'] + '">');

				var listTypes = [];
				for (var k in res['types']) {
					listTypes[k] = res['types'][k]['type']['name'];
				}
				var height = (res['height']);
				var weight = (res['weight']);
				
				$("#type ul").empty(); //empty the last input
				for (var i=0; i <listTypes.length; i++) { //input all types
					$("#type ul").append("<li>" + listTypes[i] + "</li>");
				}

				if (($("#height").children().length) > 1) { //checks for input, replaces if exists. appends if new. INEFFICIENT.
					$("#height p").replaceWith("<p>" + height + "</p>");
				} else {
					$("#height h3").after("<p>" + height + "</p>");
				}

				if (($("#weight").children().length) > 1) { //checks for input, replaces if exists. appends if new. INEFFICIENT.
					$("#weight p").replaceWith("<p>" + weight + "</p>");
				} else {
					$("#weight h3").after("<p>" + weight + "</p>");
				}

			}
		});
	});

});