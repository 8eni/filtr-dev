<?php

// Parsing this spreadsheet: https://spreadsheets.google.com/pub?key=0Ah0xU81penP1dFNLWk5YMW41dkcwa1JNQXk3YUJoOXc&hl=en&output=html
$url = 'http://spreadsheets.google.com/feeds/list/1f7D1l1VEo7YZPL0DYdy3zfNhFPmUFEMM4HVrVzURDd4/od6/public/values?alt=json';
$file= file_get_contents($url);

$json = json_decode($file);
$rows = $json->{'feed'}->{'entry'};
foreach($rows as $row) {

  $title = $row->{'gsx$title'}->{'$t'};
  $category = $row->{'gsx$category'}->{'$t'};
  $month = $row->{'gsx$month'}->{'$t'};
  echo $title . ' by ' . $category . '<br>' . $month;

}

// See this here: http://imagine-it.org/google/spreadsheets/showspreadsheet.php
?>