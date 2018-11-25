const showRoom = {
    showRoomName : 'newCars',
    location : 'webster'
};

const carSpecs = {
    showRoom,
    model : 'bmw',
    color : 'white',
    make : 2018,
    price : 30000,
    owner : 'jack'
};

function* specIterator(carSpecs){
    yield carSpecs.model;
    yield carSpecs.price;
    const showRoomDetailsIterator = ShowRoomDetailsIterator(carSpecs.showRoom);
    yield* showRoomDetailsIterator;
}

function* ShowRoomDetailsIterator(showRoom){
    yield showRoom.showRoomName;
    yield showRoom.location;
}

const specs = [];
for(let spec of specIterator(carSpecs)){
    specs.push(spec);
}

console.log("specs : " + specs);