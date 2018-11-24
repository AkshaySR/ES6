var numbers = [1,2,3,4,5];
var squaredNumbers = numbers.map(function(number){
    return number * number;
});
console.log(squaredNumbers);


var cars = [
    {model : 'bmw', color : 'white'},
    {model : 'subaru', color: 'black'}
];
var carColors = cars.map(function(car){
   return car.color;
});
console.log(carColors);

//with arrow
var carColors2 = cars.map((car) => car.color);
console.log(carColors2);