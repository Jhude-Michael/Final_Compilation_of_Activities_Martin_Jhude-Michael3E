import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

const c = console.log.bind(this);

//No. 1
function calculateFuelCost(
  distanceLeg1Km,
  distanceLeg2Miles,
  distanceLeg3Meters,
  efficiencyKmL,
  costPerLiter
) {
  const milesToKm = 1.60934;
  const metersToKm = 1000;
  let convLeg2 = distanceLeg2Miles * milesToKm;
  c(convLeg2);
  let convLeg3 = distanceLeg3Meters / metersToKm;
  c(convLeg3);
  let totalDistancekm = distanceLeg1Km + convLeg2 + convLeg3;
  c(totalDistancekm);
  let totalLiter = totalDistancekm / efficiencyKmL;
  c(totalLiter);
  let totalCost = totalLiter * costPerLiter;
  c(totalCost);
  console.log(`The total distance in kilometers is ${totalDistancekm}, then
  calculate the total liters needed is ${totalLiter}, and finally, return the total estimated fuel cost in pesos is ${totalCost}. `);
  return totalCost;
}
calculateFuelCost(250, 75, 150000, 12, 64);

//No. 2
function calculateFencingMeters(lengthMeters, widthFeet) {
  const FEET_TO_METER_FACTOR = 0.3048;
  let widthFeetMeters = FEET_TO_METER_FACTOR * widthFeet;
  c(widthFeetMeters);
  let Perimeter = 2 * (lengthMeters + widthFeet);
  c(Perimeter);
  let final_fencing_length = 2 * (lengthMeters + widthFeet * 0.3048);
  c(final_fencing_length);
  console.log(`The width in meters is ${widthFeetMeters}, then calculate the total perimeter in meters 
  ${Perimeter}, and return the final fencing length is ${final_fencing_length}.`);
  return;
}
calculateFencingMeters(15.5, 50);

//No.3

function calculateIndividualShareWithFee(
  billSubtotal,
  tipRate,
  numberOfPeople,
  paymentFee
) {
  let Tip_Amount = billSubtotal * tipRate;
  c(Tip_Amount);
  let Grand_Total = billSubtotal + Tip_Amount + paymentFee;
  c(Grand_Total);
  let Cost_Per_Person = Grand_Total / numberOfPeople;
  c(Cost_Per_Person);
  let Round_result = (Cost_Per_Person * 100) / 100;
  c(Round_result);
  console.log(`The tip amount is ${Tip_Amount}, the grand total ${Grand_Total}, and return the exact
  amount each person owes is ${Cost_Per_Person}, rounded to two decimal places is ${Round_result} .`);
  return;
}
calculateIndividualShareWithFee(4550.0, 0.18, 7, 10.5);
