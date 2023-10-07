const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries;

const initialValue = 0;
totalBatteries = batteryBatches.reduce(function (accumulator, element) {
    return accumulator + element;
}, initialValue);
