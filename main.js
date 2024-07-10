var totalInput = document.getElementById('total-price-input');
var tipPercentageSelect = document.getElementById('tip-pct-sel');
var message = document.getElementById('error-message');
var calculateButton = document.getElementById('calculate-button');

var tipAmountText = document.getElementById('tip-amount');
var totalAmountText = document.getElementById('total-amount');

calculateButton.addEventListener("click", function() {
	var total = totalInput.value;
	if (validateTotal(total)) {
		total = parseFloat(total);
		var tipPercentage = parseFloat(tipPercentageSelect.options[tipPercentageSelect.selectedIndex].value);
		tipPercentage /= 100;
		var tipAmount = total * tipPercentage;
		var finalTotal = total + tipAmount;

		message.style.visibility = "hidden";

		tipAmountText.style.visibility = "visible";
		totalAmountText.style.visibility = "visible";
		tipAmountText.innerHTML = `$${tipAmount.toFixed(2)}`;
		totalAmountText.innerHTML = `$${finalTotal.toFixed(2)}`;
	}
	
});

function validateTotal(total) {
	var regex  = /^\d+(?:\.\d{0,2})$/;
	try {
		if (total == '') throw 'Price is empty';
		if (isNaN(total)) throw 'Not a number';
		if (!regex.test(total)) throw 'Incorrect format';
	}
	catch(err) {
		message.style.visibility = "visible";
		message.innerHTML = err + ". Please try again."
		return false;
	}
	return true;
}
