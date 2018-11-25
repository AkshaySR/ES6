class Car {
    constructor({model}){
        this.model = model;
    }
    drive(){
         return 'driving subaru';
    }
}


class Subaru extends Car{
    constructor(carDetails){
        super(carDetails);
        this.price = carDetails.price;
    }
    color(){
        return 'white';
    }
}

const car = new Car({model : 'subaru'});
const subaru = new Subaru({model: 'subaru',price : 30000});

console.log("car :" +car.model);
console.log("Subaru : " + subaru.model);
console.log("Subaru : " + subaru.drive());