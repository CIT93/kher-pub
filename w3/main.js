// function determineHouseholdPts() {
//   console.log("Inside the Function");
// }

// let carbonFootprintPoints = 0;
// const numberInHousehold = 3;

// if (numberInHousehold === 1) {
//   carbonFootprintPoints = carbonFootprintPoints + 14;
// } else if (numberInHousehold === 2) {
//   carbonFootprintPoints = carbonFootprintPoints + 12;
// } else if (numberInHousehold === 3) {
//   carbonFootprintPoints = carbonFootprintPoints + 10;
// } else if (numberInHousehold === 4) {
//   carbonFootprintPoints = carbonFootprintPoints + 8;
// } else if (numberInHousehold === 5) {
//   carbonFootprintPoints = carbonFootprintPoints + 6;
// } else if (numberInHousehold === 6) {
//   carbonFootprintPoints = carbonFootprintPoints + 4;
// } else if (numberInHousehold > 6) {
//   carbonFootprintPoints = carbonFootprintPoints + 2;
// }
// console.log(
//   "Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}"
// );

// let carbonFootprintPoints = 0;
// const numberInHousehold = 3;

function determineHouseHoldPts(famMembers) {
  console.log("Inside the function");
  let carbonFootprintPoints = 0;

  if (famMembers === 6) {
      carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (famMembers === 4) {
      carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (sizeHousehold === 2) {
      carbonFootprintPoints = carbonFootprintPoints + 2;
  } else {
      
  }

  console.log('Based on household size ${famMembers) the points are ${carbonFootprintPoints}.');
}

const famMembers = 4;
determineHouseHoldPts(famMembers);

// Global Scope

determineHouseholdPts (3)
determineHouseholdPts (4)