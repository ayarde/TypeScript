function HelloWord(name) {
    return "Hello Word!! I am " + name;
}
var name = "Adrian";
var result = HelloWord(name);
var tag = document.getElementById("container");
tag.innerHTML = result;
var name = "Adrian";
var age = 36;
var programmer = true;
var languages = ["Java", "JavaScript", "CSS"];
tag.innerHTML = name + " - " + age;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("Into of if: " + a_1 + "-" + b);
}
console.log("Outside of if: " + a + "-" + b);
function returnNumber(num) {
    return "Returned Number: " + num;
}
function returnString(texto) {
    if (texto == "hello") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(returnNumber(37));
alert(returnString("hello"));
