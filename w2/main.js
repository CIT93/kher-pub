console.log('Hello World!')

const myHeading = document.querySelector("h2");
myHeading.textContent = "Hello World";

// Calculate Carbon Footprint Points

// 1. Count the members of your household.
const myHouseMembers = 8;
// 2. Consider the size of your home
const myHomeSize = 2;
// 3. Evaluate your food choices
const myFoodChoices = 32;
// 4. Examine your water consumption
const myWaterConsumption = 0;
// 5. Determine how many household purchases you make each year.
const myHouseHoldPurchases = 6;
// 6. Consider how much waste you produce
const myWaste = 40;
// 7. Identify the amount of waste that you recycle
const myRecycle = 16;
// 8. Tally up your annual transportation scores.
const myTransportation = 10;
// 9. Add up your points
const cfpTotal = myHouseMembers + myHomeSize + myFoodChoices + myWaterConsumption + myHouseHoldPurchases + myWaste + myRecycle + myTransportation;
// 10. Write JS to update the rendered html (index.html) with total footprint
const cfpHeading = document.querySelector('h2');
cfpHeading.textContent = cfpTotal
