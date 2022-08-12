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
    window.alert("You have to enter 2 names first!");
}
else if (loveScore > 80) {
  document.getElementById("prozent").innerHTML = name1 + " your Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "Der richtige Deckel für deinen hässlichen Topf. Kaufe dieser Person am besten sofort hübsche Unterwäsche um auf diesem Wege zu zeigen: Ich liebe dich trotz deines Übergewichts.";
}
else if (loveScore > 60 && loveScore <= 80) {
  document.getElementById("prozent").innerHTML = name1 + " your Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "So weit so gut! Geh mal auf Tuchfühlung. Wenn's im Bett läuft, gib der Person eine Chance. Dringender Tipp: Wenn ihr mit dieser Person ein Sexvideo dreht, unterlegt es unbedingt mit Musik von irgendeinem Disney-Film! Falls es irgendwie doch den Weg ins Internet findet, werden die Disney-Anwälte schon dafür sorgen, dass es gelöscht wird.";
}
else if (loveScore > 30 && loveScore <= 60) {
  document.getElementById("prozent").innerHTML = name1 + " your Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "Ihr könnt ein Paar werden, aber ihr werdet viel Streiten, Teller werfen und euch mit Nudelhölzern verprügeln. Beziehung heißt, Kompromisse einzugehen und sich auf den Gegner einzustellen. Partner, ich meinte Partner! Solange er/sie gut im Bett ist, wirst du glücklich sein.";
}
else {
  document.getElementById("prozent").innerHTML =  name1 + " your Love Score with " + name2 + " is " + loveScore + "%";
  document.getElementById("text").innerHTML = "Diese Person ist nicht die richtige! Am besten einen Korb geben, eine Abfuhr, eine Backpfeife, einen Arschtritt. Meat Loafs “I would do anything for love, but I won’t do that” bezieht sich im übrigen auf die Weigerung, dem ostdeutschen Lebenspartner “Tomatensauce” aus Mehlschwitze und Ketchup zu machen. Falls diese Person allerdings Freundschaft Plus will - schlag zu.";
}




}
