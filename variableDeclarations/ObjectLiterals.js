var cars = [
    {model : 'subaru' ,  color : 'white' , price : 20000},
    {model : 'bmw' ,  color : 'black' , price : 30000},
    {model : 'audi' ,  color : 'white' , price : 30000}
];

function carDetails(cars){
    return {
        cars,
        totalCarPrice() {
            return this.cars.reduce((previous, car) => previous + car.price, 0);
        },
        carColor(model){
            return this.cars.find(car => car.model === model).color;
        }
    }
}

const details = carDetails(cars);
console.log(details.totalCarPrice());
console.log(details.carColor("subaru"));
console.log(cars);