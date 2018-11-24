var numbers = [1,2,3,4,5];
var result = numbers.reduce(function(result, number){
    return result + number;
},0);

console.log(result);


var cars = [
    {model : 'subaru' ,  color : 'white' , price : 20000},
    {model : 'bmw' ,  color : 'black' , price : 30000},
    {model : 'audi' ,  color : 'white' , price : 30000}
];
var carModels =  cars.reduce(function(previous,car){
    previous.push(car.model);
    return previous;
}, []);

console.log(carModels);



