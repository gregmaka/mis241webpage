//funtion takes 3 parameters 2 numbers and a + or -
function math_function(num1,num2,sign){
  if (sign == '+') {
    var newNum = num1 + num2;
  }
   else
    if (sign == '-') {
      newNum = num1 - num2;
    };
   return newNum;
}

// Function to convert US into Euro
function convertMoney(num){

  inputdollar = document.forms[0].inputdollar.value;
  var euro = inputdollar * .883785;
  var inputString = "You entered $" + inputdollar + " USD" + "</br>";
  var convertString = "You exchanged $" + inputdollar + " U.S. Dollars for $" + euro.toFixed(2) + " Euros" + "</br>";
  var outPutString = inputString + convertString;
  document.getElementById('moneyForm').innerHTML = outPutString;
}

