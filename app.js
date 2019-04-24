var billAmt = document.getElementById('bill-amt');
var serviceAmt = document.getElementById('service-category');
var peopleAmt = document.getElementById('people-amt');
const calculate = document.getElementById('calculate');
const tip = document.getElementById('tipamt');


function main(){
    calculate.addEventListener('click',calculateTip);
}
main();

//calculates tip

function calculateTip(){
    if (billAmt.value == '' || peopleAmt.value == ''){
        alert("Please fill in all fields.")
        return false;
    } else {
        b = parseFloat(billAmt.value);
        p = peopleAmt.value;
        s = parseFloat(serviceAmt.value);
        var total = (b * s) / p;
        total = Math.round(total * 100) / 100;
        console.log(total);
        tip.innerHTML = "Tip = $ " + total;
    }
}