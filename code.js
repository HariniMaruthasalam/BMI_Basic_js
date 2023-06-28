var c = prompt("Enter the weight");
var h = prompt("Enter the height");

var bmi = (c / ((h * h)/ 10000)).toFixed(2)

if (bmi < 18.5) {
    alert("Underweight: " + bmi);
} else if (bmi >= 18.5 && bmi < 25) {
    alert("Normal weight: " + bmi);
} else if (bmi >= 25 && bmi < 30) {
    alert("Overweight: " + bmi);
} else {
    alert("Obese: " + bmi);
}
