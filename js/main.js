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

/* This is the Tip Calculator Function*/

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
      var tipAmount = calculateTip(bill, prcnt);
    tip.innerHTML = '$' + tipAmount .toFixed(2);
  slideval.innerHTML = slider + '%';
  }
}

function calculateTip(bill, percent) {
    return bill * percent;
}

/* This is fetching the NASA API */

const url = 'https://api.nasa.gov/planetary/apod?api_key=cq5SqQ5zqx1YK9aOVvHF2OzihtPy0nien6OX5fMA'


const fetchNASAData = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

/*This is displaying the NASA image on the site */

const displayData = data => {
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}

fetchNASAData()

fetchNASAData()