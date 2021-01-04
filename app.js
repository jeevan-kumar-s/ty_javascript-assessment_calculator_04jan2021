var storedExpression = '';
var storedExpression1 = '';

function solve() {
    let y = eval(storedExpression1)
    document.getElementById("edu").value = y
    document.getElementById('wholeElement').innerHTML = y;
}

function clr() {
    document.getElementById("edu").value = "";

}


function dis(val) {
    storedExpression += val;
    storedExpression1 += val;
    console.log("storedExpression", storedExpression);
    console.log("storedExpression1", storedExpression1);
    document.getElementById('wholeElement').innerHTML = storedExpression1;
    document.getElementById("edu").value = storedExpression
    if (val == "+" || val == "-" || val == "*" || val == "/") {
        clr();
        storedExpression = '';
    }
    if (val == "=") {
        console.log(storedExpression1);
        solve()
    }
}
function backSpace() {
    storedExpression = storedExpression.slice(0,-1);
    storedExpression1 = storedExpression1.slice(0,-1);
    console.log(storedExpression);
    document.getElementById("edu").value = storedExpression;
}
