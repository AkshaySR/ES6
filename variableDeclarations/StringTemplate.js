function carModelDetails(modelMessage){
    return "The model of the car is " + modelMessage
}

carModelDetails("subaru");

//with string template
function carModelDetails2(modelMessage){
    return `The model of the car is ${modelMessage}`;
}
carModelDetails2("subaru");