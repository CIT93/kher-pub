function determineHouseholdPoints(numberInHousehold) {
  console.log("inside the function");
  if (numberInHousehold === 1) {
    cardonFootprintPoints = cardonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    cardonFootprintPoints = cardonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    cardonFootprintPoints = cardonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    cardonFootprintPoints = cardonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    cardonFootprintPoints = cardonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    cardonFootprintPoints = cardonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    cardonFootprintPoints = cardonFootprintPoints + 2;
  }
  console.log(
    `Based on the number of member of the household of ${numberInHousehold} the points would be ${cardonFootprintPoints}.`
  );
}

let cardonFootprintPoints = 0;
// const numberInHousehold = 7;
//global scope

determineHouseholdPoints(3);
determineHouseholdPoints(4);

// my try
function determineSizeOfHome(sizeOfHome) {
    console.log("inside the funct");
    if (sizeOfHome === 10) {
        carbonFootprintPoints = sizeOfHome + but;
    } else if (sizeOfHome === 7) {
        carbonFootprintPoints = sizeOfHome + 7;
    } else if (sizeOfHome === 4) {
        carbonFootprintPoints = sizeOfHome + 4;
    } else if (sizeOfHome > 2) {
        carbonFootprintPoints = sizeOfHome + 2;
    }
    console.log(`Based on the number of size of the household of ${sizeOfHome} the resul would be ${carbonFootprintPoints}.`);
}
let carbonFootprintPoints = 0;

determineSizeOfHome(4);
determineSizeOfHome(10);

// I got the code to run but I wanted it to say Large,Medium,Small and Apartment but It kept saying 'not defined'. I couldn't quite figure it out on why it was doing that so I stopped. I got working code, but I didn't quite get the code I wanted.