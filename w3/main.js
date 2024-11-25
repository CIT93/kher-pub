function determineHouseSizePts(size) {
  if(size === 'large') {
    cardonFootprintPoints = cardonFootprintPoints + 10
  } else if (size === 'medium') {
    cardonFootprintPoints = cardonFootprintPoints + 7
  } else if (size === 'small'){
    cardonFootprintPoints = cardonFootprintPoints + 4
  } else if (size === 'apt') {
    cardonFootprintPoints = cardonFootprintPoints + 2
  }
}

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

//global scope

determineHouseholdPoints(3);
determineHouseSizePts("medium");