var main = function() {
  
    var cities = [
      "KIEV",
      "KHARKOV",
      "LVOV",
      "LA",
      "NY",
      "TORONTO",
      "LISSBOn",
      "ANKARA",
      "LONDON",
      "PARIS"
    ];
   $( "#search" ).autocomplete({source: cities });
  };
 
$(document).ready(main);