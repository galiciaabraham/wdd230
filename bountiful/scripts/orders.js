//This section is for the drinks ordered box.
let orderPlaced = 10;
//get the last local storage number of drinks ordered saved
let numberOfOrders = Number(window.localStorage.getItem("number-of-orders"))
//set the local storage to today's date
localStorage.setItem('number-of-orders', orderPlaced);
//display the orders placed.
const ordersCount = document.querySelector('.s-drinks');
ordersCount.textContent = `${numberOfOrders}`; 

//Submission time part...

let submissionTimeValue = new Date();

const label = document.querySelector('label.submission-date');

const submissionInput = label.querySelector('input');
let submissionInputValue = submissionInput.value;
submissionInputValue = submissionTimeValue;

//Pick fruits options part...
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';


async function getFruits() {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json();
        displayOptions(data);
        return data;
    }
}

getFruits();
function displayOptions(fruitList){
    let fruit1 = document.querySelector('#fruit-1');
    let fruit2 = document.querySelector('#fruit-2');
    let fruit3 = document.querySelector('#fruit-3');

    const selectFruitsList = [fruit1,fruit2,fruit3];

    selectFruitsList.forEach(fruittyfruit => {
        fruitList.forEach(fruit => {
            let fruitInPlace = fruit.name;
            let fruittyOption = document.createElement('option');
            fruittyOption.setAttribute('value',`${fruitInPlace}`);
            fruittyOption.textContent = `${fruitInPlace}`;
    
            fruittyfruit.appendChild(fruittyOption);
            
        });
    });
       
}

//Submission button part...

const submissionForm = document.querySelector('#fresh-form');
const freshPage = document.querySelector('.fresh');

submissionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(submissionForm);
    console.log(formData.get('fname'));
    
    const orderBox = document.createElement('div');    
    orderBox.setAttribute('class', 'order-details');

    const personalInfoBox = document.createElement('div');
    const pickedFruitsBox = document.createElement('div');
    const specialInfoBox = document.createElement('div');

    const firstNameElement = document.createElement('span');
    firstNameElement.textContent = `Name: ${formData.get('fname')}`;

    const lastNameElement = document.createElement('span');
    lastNameElement.textContent = `${formData.get('lname')}`;

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${formData.get('email')}`;

    const phoneElement = document.createElement('p');
    phoneElement.textContent = `Phone: ${formData.get('phone')}`;


    async function findChoices (){
        const ListofFruits = await getFruits();

        let chosenFruit1 = formData.get('fruit-1');
        let chosenFruit2 = formData.get('fruit-2');
        let chosenFruit3 = formData.get('fruit-3');
      
        const filteredFruits = ListofFruits.filter((fruit) => fruit.name === chosenFruit1);
        filteredFruits.push(...ListofFruits.filter((fruit) => fruit.name === chosenFruit2));
        filteredFruits.push(...ListofFruits.filter((fruit) => fruit.name === chosenFruit3));
        console.log(filteredFruits);

        let totalCarbs = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalSugar = 0;
        let totalCalories = 0;

        for (fruit of filteredFruits) {
            let fruitCarbs = fruit.nutritions.carbohydrates;
            let fruitProtein = fruit.nutritions.protein;
            let fruitFat = fruit.nutritions.fat;
            let fruitSugar = fruit.nutritions.sugar;
            let fruitCalories = fruit.nutritions.calories;
        
            totalCarbs += fruitCarbs;
            totalProtein += fruitProtein;
            totalFat += fruitFat;
            totalSugar += fruitSugar;
            totalCalories += fruitCalories;
          }

        const fruitsElement = document.createElement('p');
        fruitsElement.textContent = `Selected Fruits: ${chosenFruit1}, ${chosenFruit2}, ${chosenFruit3} ||
        Total Carbs: ${totalCarbs.toFixed(1)} ||
        Total Protein: ${totalProtein.toFixed(1)} ||
        Total Fat: ${totalFat.toFixed(1)} ||
        Total Sugar: ${totalSugar.toFixed(1)} ||
        Total Calories: ${totalCalories.toFixed(1)}`;

        pickedFruitsBox.appendChild(fruitsElement);
           
        } 
    
    findChoices();


    const instructionsElement = document.createElement('p');
    instructionsElement.textContent = `Special Instructions: ${formData.get('special-instructions')}`;
    

    personalInfoBox.appendChild(firstNameElement);
    personalInfoBox.appendChild(lastNameElement);
    personalInfoBox.appendChild(emailElement);
    personalInfoBox.appendChild(phoneElement);

    specialInfoBox.appendChild(instructionsElement);


    orderBox.appendChild(personalInfoBox);
    orderBox.appendChild(pickedFruitsBox);
    orderBox.appendChild(specialInfoBox);
    freshPage.appendChild(orderBox);
    
    orderPlaced += 1;
});


