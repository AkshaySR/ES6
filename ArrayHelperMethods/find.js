var cars = [
    {model : 'subaru' ,  color : 'white' , price : 20000},
    {model : 'bmw' ,  color : 'black' , price : 30000},
    {model : 'audi' ,  color : 'white' , price : 30000}
];


var car = cars.find(function(car){
    return car.model === 'subaru';
});

console.log(car);