// script.js
// Get the form elements
const form = document.getElementById('petrol-calculator');
const costPerLiterInput = document.getElementById('cost-per-liter');
const litersPurchasedInput = document.getElementById('liters-purchased');
const calculateButton = document.getElementById('calculate-button');
const totalCostDisplay = document.getElementById('total-cost');

// Add event listener to calculate button
calculateButton.addEventListener('click', calculateTotalCost);

// Calculate total cost function
function calculateTotalCost(event) {
    event.preventDefault();
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const litersPurchased = parseInt(litersPurchasedInput.value);
    const totalCost = costPerLiter * litersPurchased;
    totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}