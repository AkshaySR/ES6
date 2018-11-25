//symbol.iterator

const showRoom = {
    showRoomName : 'newCars',
    location : 'webster',
    [Symbol.iterator] : function* () {
        yield this.showRoomName;
        yield this.location;
    }
};

const carSpecs = {
    showRoom,
    model : 'bmw',
    color : 'white',
    make : 2018,
    price : 30000,
    owner : 'jack',
    [Symbol.iterator] : function* (){
        yield this.model;
        yield this.price;
        yield* this.showRoom;
    }
};

const specs = [];
for(let spec of carSpecs){
    specs.push(spec);
}

console.log("specs : " + specs);