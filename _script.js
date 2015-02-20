$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.title.search(myExp) != -1) ||
			(val.category.search(myExp) != -1) ||
			(val.month.search(myExp) != -1))  {
				output += '<li>';
				output += '<img src="'+ val.image +'" alt="'+ val.title +'" />';
				output += '<div class="txt">';
				output += '<h2>'+ val.title +'</h2>';
				//output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
				output += '<span class="category">'+ val.category +'</span>';
				output += '<span class="month">'+ val.month +'</span>';
				output += '</div>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});

//https://spreadsheets.google.com/feeds/list/1f7D1l1VEo7YZPL0DYdy3zfNhFPmUFEMM4HVrVzURDd4/od6/public/basic?hl=en_US&alt=json