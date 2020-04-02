var quartstocups = function(quarts){
  return quarts * 4;
}

var gallonstoquarts = function(gallons){
  return gallons * 4;
}

var gallonstopints = function(gallons){
  return gallons * 8;
}

var pintstocups = function(pints){
  return pints * 2;
}

var gallonstoliters = function(gallons){
  return gallons * 3.78541;
}

var tablespoonstoteaspoons = function (tablespoons){
  return tablespoons * 3;
}

var cupstotabletpoons = function(cups) {
  return cups * 16;
}

var milliliterstoteaspoons = function(milliliters) {
  return milliliters * 0.202884;
}


$(document).ready(function(){

  var myarray = ["quartstocups","gallonstoquarts", "gallonstopints","pintstocups","gallonstoliters","tablespoonstoteaspoons","cupstotablespoons","milliliterstoteaspoons"];
  
  
  function generate_handler( item ) {
    return function(e) { 
     
      e.preventDefault();
      var result = window[item]($("#"+item+"input").val());
      
      $("#"+item+"result").text(result);
    };
  }


  myarray.forEach(function(item){
    console.log("#"+item)
    $("#"+item).submit(generate_handler(item));
  });

});
  // $("#quartstocups").submit(function(e){
  //   e.preventDefault();
  //   var result = quartsToCups($("#quartstocupsinput").val());
  //   $("#quartstocupsresult").text(result);
  // });

  // $("#gallonstoquarts").submit(function(e){
  //   e.preventDefault();
  //   var result = gallonsToQuarts($("#gallonstoquartsinput").val());
  //   $("#gallonstoquartsresult").text(result);
  // });

  // $("#gallonstopints").submit(function(e){
  //   e.preventDefault();
  //   var result = gallonsToPints($("#gallonstopintsinput").val());
  //   $("#gallonstopintsresult").text(result);
  // });

  // $("#pintstocups").submit(function(e){
  //   e.preventDefault();
  //   var result = pintsToCups($("#pintstocupinput").val());
  //   $("#pintstocupsresult").text(result);
  // });

  // $("#gallonstoliters").submit(function(e){
  //   e.preventDefault();
  //   var result = gallonstoliters($("#gallonstolitersinput").val());
  //   $("#quartstocupsresult").text(result);
  // });

  // $("#tablespoonstoteaspoons").submit(function(e){
  //   e.preventDefault();
  //   var result = tableSpoonsToTeaspoons($("#tablespoonstoteaspoonsinput").val());
  //   $("#tablespoonstoteaspoonsresult").text(result);
  // });

