function clearScreen() {
 document.getElementById("result").value = "";
}

function display(value) {
 document.getElementById("result").value += value;
}

function calculate() {
 var n1 = document.getElementById("result").value;
 var n2 = eval(n1);
 document.getElementById("result").value = n2;
}