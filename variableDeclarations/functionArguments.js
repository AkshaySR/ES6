//default arguments

function carDetaisl (model , color = 'white'){
    console.log(`${model + color}`);
}

carDetaisl("subaru");
carDetaisl("bmw", 'balck');