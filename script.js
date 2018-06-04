function rollDice(){

  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() *6) + 1;
  var d2 = Math.floor(Math.random() *6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+".";
   if(d1 == d2){
    status.innerHTML += " Doubles! you win!!";
    }else{ (d1 != d2)
      status.innerHTML = "No doubles! you lose!!";
    }
}

var quotes=[
    'GTA 4', 'Pokemon Red', 'Pokemon Yellow', 'Digimon', 'Forza Games', 'Silent Hill',
    'Fornite', 'Burnout', 'Hi kim'

];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}