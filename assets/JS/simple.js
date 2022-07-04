// Javascript Document

var rights=0;
var wrongs=0;

function quiz(theAnswer) {
    if (theAnswer ==='right') {
        rights=rights+1;
    }
    else {
        wrongs=wrongs+1;
    }
    
}

function showResults() {
document.getElementById("results").innerHTML="You got " + rights + " answers right!";
document.getElementById("submitAnswers").style.display="none";
}
    
    