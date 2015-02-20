$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.title.search(myExp) != -1) ||
			(val.festival.search(myExp) != -1) ||
			(val.month.search(myExp) != -1))  {
				output += '<li>';
				output += '<h2>'+ val.title +'</h2>';
				output += '<div class="txt">';
				//output += '<div class="level'+ val.level +'"></div>';
				output += '<div class="status">LEVEL '+ val.level +'';
				output += '<span class="level'+ val.level +'">'+ val.level +'</span>';
				output += '</div>';
				output += '<span class="details"><strong>Details:</strong> '+ val.details +'</span>';
				output += '<span class="festival"><strong>Festival:</strong> '+ val.festival +'</span>';
				output += '<span class="month"><strong>Month:</strong> '+ val.month +'</span>';
				output += '<span class="days"><strong>Ending: </strong>  '+ val.days +' days</span>';
				output += '<span class="hint"><strong>Hint:</strong> '+ val.hint +'</span>';
				output += '<span class="value"><strong>Value:</strong> &#8364;'+ val.value +'</span>';
				//output += '<span class="date"> '+ val.date +'</span>';
				output += '<a href="'+ val.link +'"  target="_blank">Link</a>';
				output += '</li>';
				output += '</div>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
		Object.keys(jsonArray).length;
	}); //get JSON
});
//https://spreadsheets.google.com/feeds/list/1f7D1l1VEo7YZPL0DYdy3zfNhFPmUFEMM4HVrVzURDd4/od6/public/values?alt=json-in-script&callback=importGSS