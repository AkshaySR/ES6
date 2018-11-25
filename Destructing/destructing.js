var car = {
    model : 'subaru',
    price : 30000,
    color: 'white'
};

var color1 = car.color;
var amount1 = car.price;

//ES6 Destructing - The name should be identical to property name
const { color, price } = car;
console.log(color);
console.log(price);


function carDetails({model,price,color}){
    return `The model of the car is ${model} and price is ${price} and color is ${color} ` ;
}
console.log(carDetails(car));



const cars2 = [
    'bmw' , 'subaru' , 'subaru'
];

//destructing arrays
//ES6
const [car1,car2,car3] = cars2;

const numbers = [1, 2, 3];

function double(numbers) {
    const nums = [...numbers];
    var output = nums.reduce(function(previous,number){
        previous.push(number * 2);
        return previous;
    }, []);
    return output;
}

console.log(double(numbers));