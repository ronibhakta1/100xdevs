class Animals{
  constructor(name, legs, speaks){
  this.name= name;
  this.legs= legs;
  this.speaks=speaks;
  }
  speak(){
    console.log("This is "+this.name);
  }
  static method(){
    console.log("Animals");
  }
}
const dog = new Animals("dog",4,"bhow bhow");
dog.speak();
Animals.method();