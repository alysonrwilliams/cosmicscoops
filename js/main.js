/* This function switches the nav menus */
function myFunction() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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
function calc() {
        var bill = Number(document.getElementById('bill').value);
        var tip = bill * .20;
        var total_bill = bill + tip;

        document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
        document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);         
    }