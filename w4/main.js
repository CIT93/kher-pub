const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apartment") {
    houseSizePoints = 2;
  }
  return houseSizePoints
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  // We would put it before becuase it would just reset its code past this console code
  console.log(
    'based on the number of members in the household ${numberInHousehold} the points would be ${houseHoldPoints}'
  )

  return houseHoldPoints
}

function start(houseHoldMembers, houseSize) {   
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePoints = determineHouseSizePts(houseSize);
const total = houseHoldPTS + houseSizePoints;
cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePoints, total]);
}

const myInputs = [5,"apt"] //on the global slope

/// Arrays

const myArr = [1, 2, 3, 4, 5];
console.log(myArr[1])
console.log(myArr[4])
console.log(myArr[0] = 10)
console.log(myArr.push [1])

// How to do i modify the start parameter to use the arrat rhat is the argument?
function modifyStart(arr) {
  let start = arr[0];  // Use the first element of the array
  console.log(start);  // Output the start value
}

let numbers = [5, 10, 15];
modifyStart(numbers);


function displayOutput() {

 }

 // yesish

for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    const newP1 = document.createElement("p");
    const newP2 = document.createElement("p");
    const newP3 = document.createElement("p");
    const newP4 = document.createElement("p");
    const newP5 = document.createElement("p");
    const lineBreak = document.createElement("br");
    newP.innerHTML = "<strong>Carbon Foot Print Data</strong>";
    newP1.textContent = `Number of Household members ${arr[0]}`;
    newP2.textContent = `Pionts For Number of Household Members ${arr[2]}`;
    newP3.textContent = `House Size ${arr[1]}`;
    newP4.textContent = `Pionts For House Size ${arr[3]}`;
    newP5.textContent = `Carbon Footprint total is ${arr[4]}`;
    output.appendChild(newP);
    output.appendChild(newP1);
    output.appendChild(newP2);
    output.appendChild(newP3);
    output.appendChild(newP4);
    output.appendChild(newP5);
    output.appendChild(lineBreak);

  }

start(5, "apartment");
start(4, "large");
start(3, "medium");
start(0, "large");
start(0, "medium");
start(0, "small");
start(0, "apartment");

displayOutput()

