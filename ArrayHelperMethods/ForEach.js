var cars = ['bmw', 'audi', 'subaru'];

cars.forEach(function(car){
    console.log(car);
});

var numbers = [1,2,3,4,5];
var sum = 0;
numbers.forEach(function(num){
   sum += num;
});
console.log("sum = " + sum);


//passing function in forEach
var numbers = [1,2,3,4,5];
var value = 0;
function sumNumber(number){
    value += number;
}
numbers.forEach(sumNumber);
console.log("value = " + value);


