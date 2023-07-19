//This section is for the drinks ordered box.
let orderPlaced = 100;
//get the last local storage number of drinks ordered saved
let numberOfOrders = Number(window.localStorage.getItem("number-of-orders"))
//set the local storage to today's date
localStorage.setItem('number-of-orders', orderPlaced );
//display the orders placed.
const ordersCount = document.querySelector('.s-drinks');
ordersCount.textContent = `${numberOfOrders}`; 
