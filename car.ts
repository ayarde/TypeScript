interface BaseCar {
  getModel():string;
  getColor():string;
  getVelocity():number;
}

class Car implements BaseCar {
  private color: string;
  private model: string;
  private velocity: number = 0;

  constructor(model:any = null){
    this.velocity = 0;
    if (model == null){
      this.model = "Ford Mustang";
    } else {
      this.model = model;
    }
    this.color = "White";
  }

  public getColor():string{
    return this.color;
  }

  public setColor(color: string){
    this.color = color;
  }

  public getModel():string{
    return this.model;
  }

  public setModel(model: string){
    this.model = model;
  }

  public getVelocity():number{
    return this.velocity;
  }

  public setVelocity(velocity: number){
    this.velocity = velocity;
  }

  public speedUp() {
    this.velocity++;
  }

  public brake(){
    this.velocity--;
  }
}

var car1 = new Car("Chevrolet Camaro");
var car2 = new Car();
var car3 = new Car();

car1.setColor("Red");
car1.speedUp();
car1.speedUp();
car1.speedUp();

/*car2.setColor("Blue");
car3.setColor("Yellow");*/

console.log("The color of car 1 is: "+ car1.getColor());
console.log("The velocity of car 1 is: "+ car1.getVelocity());
console.log("The model of car 1 is: "+ car1.getModel());

car1.brake();
console.log("The velocity of car 1 after brake is: "+ car1.getVelocity());
/*console.log("The color of car 2 is: "+ car2.getColor());
console.log("The color of car 3 is: "+ car3.getColor());*/
