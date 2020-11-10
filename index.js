var result = getID("result");

getID("plus").addEventListener("click", function plus(val1, val2) {
    var val1 = parseFloat(getID("input1").value);
    var val2 = parseFloat(getID("input2").value);
     result.innerHTML = val1 + val2;
})

getID("minus").addEventListener("click", function minus(val1, val2) {
    var val1 = parseFloat(getID("input1").value);
    var val2 = parseFloat(getID("input2").value);
     result.innerHTML = val1 - val2;
})

getID("multi").addEventListener("click", function multi(val1, val2) {
    var val1 = parseFloat(getID("input1").value);
    var val2 = parseFloat(getID("input2").value);
     result.innerHTML = val1 * val2;
})
getID("division").addEventListener("click", function division(val1, val2) {
    var val1 = parseFloat(getID("input1").value);
    var val2 = parseFloat(getID("input2").value);
     result.innerHTML = val1 / val2;
})
function getID(id) {
    return document.getElementById(id);
}
