function lovegenerator() {
var yourName = "";
var othername = "";
yourName = document.getElementById("YourName").value;
otherName = document.getElementById("OtherName").value;

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) +1;

var nameUpper1 = yourName.slice(0,1);
var nameLower1 = yourName.slice(1,yourName.lenght);
var nameUpper2 = otherName.slice(0,1);
var nameLower2 = otherName.slice(1,yourName.lenght);

var name1 = nameUpper1.toUpperCase() + nameLower1.toLowerCase();
var name2 = nameUpper2.toUpperCase() + nameLower2.toLowerCase();

if (yourName.length < 2 | otherName.length < 2) {
    window.alert("Oops... You have to enter 2 names first!");
}
else if (loveScore > 80) {
  document.getElementById("prozent").innerHTML = name1 + "'s Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("ueberschrift").innerHTML = "Are you fur real?";
  document.getElementById("text").innerHTML = "You match purrfectly together. That's pawsome! You two have met a great purrsonality in each other and you're purrfect just the way you are. You really love each other, meow and forever!";
}
else if (loveScore > 60 && loveScore <= 80) {
  document.getElementById("prozent").innerHTML = name1 + "'s Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("ueberschrift").innerHTML = "So fur, so good.";
  document.getElementById("text").innerHTML = "You are definitely the best furends in the whole wide world! If you work on your purrsonality a little, this can be a fantastic love story. Enjoy every meowment with each other. Best fishes for you!";
}
else if (loveScore > 30 && loveScore <= 60) {
  document.getElementById("prozent").innerHTML = name1 + "'s Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("ueberschrift").innerHTML = "That's a pawsibility.";
  document.getElementById("text").innerHTML = "Purrhaps you two can cuddle later with the right catitude. At the moment you are not quite settled in a relationship. But anything is pawsible. Stay pawsitive!";
}
else {
  document.getElementById("prozent").innerHTML =  name1 + "'s Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("ueberschrift").innerHTML = "Now wait a meowment...";
  document.getElementById("text").innerHTML = "Pawdon my language. You've got to be kitten me?! You guys don't match at all. You two together = a cat-astrophe!";
}




}
