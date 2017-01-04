function HelloWord (name){
  return "Hello Word!! I am " + name;
}
var name = "Adrian";
var result= HelloWord(name);
var tag =<HTMLElement>document.getElementById("container");

tag.innerHTML = result;

var name:string = "Adrian";
var age:number =36;
var programmer:boolean = true;
var languages:Array<string> = ["Java", "JavaScript", "CSS"];

tag.innerHTML = name + " - " + age;

var a = 7;
var b = 12;

if (a === 7){
  let a = 4;
  var b = 1;

  console.log("Into of if: "+ a + "-" + b);
}

console.log("Outside of if: "+ a + "-" + b);

function returnNumber(num:number):string{
  return "Returned Number: "+ num;
}

function returnString(texto:string):boolean{
  if(texto == "hello"){
    var num = true;
  } else {
    var num = false;
  }
  return num;
}

alert(returnNumber(37));
alert(returnString("hello"));
