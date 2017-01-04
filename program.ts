module Shop {
  export class Clothe {
    constructor(public title: string){
      alert(title);
    }
  }

  export class Computing {
    constructor(public title: string){
      alert('Computing Shop: '+title);
    }
  }
}

import Computing = Shop.Computing;
let computing = new Computing('Compumundo');

function start(launch: string){
  return function(target: Function){
    target.prototype.launching = function(): void{
      //console.log(launch);
      alert(launch);
    }
  }
}

@start('Launch of NodeJS and Angular 2 training')
class Program {
  private name:string;
  private version:number;

  public setName(name:string){
    this.name = name;
  }

  public getName():string {
    return this.name;
  }

  public setVersion(version:number){
    this.version = version;
  }

  public getVersion():number {
    return this.version;
  }
}
var program2 = new Program();
program2.launching();
class VideoEditor extends Program {
  private timeline: number;

  public setTimeLine(timeline:number){
    this.timeline = timeline;
  }

  public getTimeLine():number {
    return this.timeline;
  }

  public getAllData():string{
    return this.getName() + "-" + this.getVersion() + "-" + this.getTimeLine();
  }
}

var editor = new VideoEditor();
editor.setName("Atom");
editor.setVersion(8);
editor.setTimeLine(5000);


console.log(editor.getAllData());

var programs = [];

function save(){
  var name = (<HTMLInputElement>document.getElementById("name")).value.toString();

  var program = new Program();
  program.setName(name);
  program.setVersion(1);

  programs.push(program)

  var list = "";
  for(var i = 0; i < programs.length; i++){
    list = list + "<li>" + programs[i].getName() + "</li>";
  }

  var listado =<HTMLElement>document.getElementById("listado");
  listado.innerHTML = list;

  (<HTMLInputElement>document.getElementById("name")).value = "";
}

setInterval((var_name, hi)=>{
  console.log('Hi!');
},1000);

var fruits = [
  'Apple',
  'Orange',
  'Lemmon'
];

var go_over = fruits.map(fruit => {
  console.log(fruit);
  console.log(fruit.length);
});
