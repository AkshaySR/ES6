var cars = [
    {model : 'subaru' ,  color : 'white' , price : 20000},
    {model : 'bmw' ,  color : 'black' , price : 30000},
    {model : 'audi' ,  color : 'white' , price : 30000}
];

//do i have any car with price more than 20000

var doesAllCarValueMoreThanRequiredValue = true;
var onlySomeAllCarValueMoreThanRequiredValue = false;

doesAllCarValueMoreThanRequiredValue = cars.every(function(car){
    return car.price > 2000;
});
console.log("doesAllCarValueMoreThanRequiredValue : " + doesAllCarValueMoreThanRequiredValue);


onlySomeAllCarValueMoreThanRequiredValue = cars.some(function(car){
    return car.price > 200000;
});
console.log("onlySomeAllCarValueMoreThanRequiredValue : " + onlySomeAllCarValueMoreThanRequiredValue);