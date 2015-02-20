<?php $jsonData = file_get_contents("https://spreadsheets.google.com/feeds/list/1f7D1l1VEo7YZPL0DYdy3zfNhFPmUFEMM4HVrVzURDd4/1/public/values?alt=json-in-script&callback=dataLoaded");
var_dump(json_decode($jsonData, true));?>

<<?php print(jsonData) ?>