# cosmicscoops
An order form for your favorite cosmic ice cream deserts!


This project is a menu and order form for a fictional outer-space themed ice cream shop called “Aly’s Cosmic Scoops”. It contains a list of menu items, a form to enter your name and desert choice, a random desert generator, a tip calculator, and a reference to a NASA API so you can see cool new cosmic photos daily. The site includes a responsive design with the use of media queries and flexbox (two media queries: one from 600-800 pixels & the other 801+ pixels with substantial changes to the layout of the menu items which go from one desert per row at the page’s smallest, to two deserts per row, and finally three deserts on the top row/two deserts on the middle row/one desert on the bottom row). It also features a responsive navigation bar that uses JavaScript to expand from the hamburger navigation to a horizontal navigation bar when the page is displayed on larger devices. The “name” field of the order form is validated, and an error alert is displayed if the user forgets to enter their name.

Instructions for opening project: 
This project does not require any special set-up. Simply clone to your machine and open cosmicscoops2.html to view in the browser.

To meet the requirements of this project, I included the following features:

1.	Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX). 
**I used fetch() to grab data from a NASA API and display it at the bottom of the site, just above the footer. The cosmic images provided by NASA give my cosmic themed ice cream shop an educational component! **

2.	Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application.
**This is fulfilled by the Random Desert Generator. I created an array called ‘deserts’, populated it with each of my menu items, and used my function called ‘randomDesertGenerator’, to retrieve one value at random and display it back to the user as an alert.

3.	Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value.
**I created a tip calculator, which allows the user to select their desired tip percentage then calculates the tip based on their order amount. The two parameters being passed are “bill” and “percent” and the function returns the value of “bill” x “percent”.

