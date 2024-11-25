const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePts = 0;
  if (size === "large") {
    houseSizePts = 10;
  } else if (size === "medium") {
    houseSizePts = 7;
  } else if (size === "small") {
    houseSizePts = 4;
  } else if (size === "apt") {
    houseSizePts = 2;
  }

  return houseSizePts;
}

function determineHouseholdPoints(numberInHousehold) {
  let houseHoldPts = 0;
  if (numberInHousehold === 1) {
    houseHoldPts = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPts = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPts = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPts = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPts = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPts = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPts = 2;
  }

  return houseHoldPts;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPts = determineHouseholdPoints(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPts, houseSizePts, total]);

}

function displayOutput() {

}

start([5, 'apt']);
start([4, 'large']);
start([3, 'medium']);



displayOutput()