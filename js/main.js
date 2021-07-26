/* This function switches the nav menus */
function myFunction() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*This is the Random Desert Generator */
function randomDesertGenerator() {
const deserts = [
    "Lemon Blueberry Galaxy", 
    "The Milky Way", 
    "Sprinkled Stardust", 
    "Oreo Moon Rock Shake", 
    "The Zero Gravity"
];
    
    const random = deserts[Math.random() * deserts.length | 0]
    alert("We think you should order the " + random, deserts[random]);
}




/* This function validates the name field + prompts alert to customer on submit */
function myfunction() {
var x=document.getElementById('fname').value;
if (x == "") {
    alert("Oops! You didn't tell us your name!");
    return false;
} else {
alert("Thanks, " +x + "! Your ice cream is being prepared!");
}
}


/* Tip Calculator Function*/
function tipCalculator (slider, bill){
  var tip = document.getElementById('tipamount');
  var slideval = document.getElementById('slideval');
  var bill = document.getElementById(bill).value;
  var prcnt = slider * .01;
  
  
  if (bill == null || bill == '') {
    tip.innerHTML = 'Oops! Enter an amount.';
    return false;
  }
  if(isNaN(bill)) {
    tip.innerHTML = 'Oops! Make sure you entered a real number.';
    return false;
  }
  if(bill >= 0){
    tip.innerHTML = '$' + (bill * prcnt) .toFixed(2);
  slideval.innerHTML = slider + '%';
  }
}
