var numbers = [1,2,3,4,5];
var result = numbers.reduce((result, number) => {
    return result + number;
},0);

console.log(result);

//Rest capture all arguments and put it in a single array
function numbersListSum(...numbers){
    var result = numbers.reduce((result, number) => {
        return result + number;
    },0);
    return result;
}
console.log(numbersListSum(1,2,3,4,5));

//Spread is used to flatten all the numbers
var numberList1 = [1,2,3,4];
var numberList2 = [4,5,6,7,8];
var numberList3 = [6,7,8,9,10];
var resultOfNumbers = [...numberList1, ...numberList2, ...numberList3, 'str'];
console.log(resultOfNumbers);

