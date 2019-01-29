
function Ticket(age, time, movie) {
  this.age = age;
  this.time =  time;
  this.movie = movie;
}


Ticket.prototype.calcPrice = function() {
  var cost = parseFloat(this.movie.price);
  if(this.age < 18){
    cost = cost / 2;
  }
  if(parseFloat(this.time)<4){
    cost = cost *1.125;
  }
  return cost;
}

function Movie (name, price) {
  this.name = name;
  this.price = price;
}












$(document).ready(function() {
  $("form#new-movie").submit(function(event) {
    event.preventDefault();
    var inputAge = $("input#age").val();
    var inputTime = $("#time").val();
    var inputMovie = $("#movie option:selected").text();
    var inputPrice = $("#movie").val();
    console.log(inputMovie + inputPrice);
    $("input#age").val("");
    var ticketPrice = new Ticket (inputAge, inputTime, new Movie(inputMovie, inputPrice));
    console.log(ticketPrice);
    $(".ticketprice").text(ticketPrice.calcPrice());
  })
})
