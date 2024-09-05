console.log('hello world')


//let isSad = true;
//let isHappy = !isSad; // The opposite
//let isFeeling = isSad || isHappy; // Is at least one of them true?
//let isConfusing = isSad && isHappy; // Are both true?



let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

//console.log(Object.is(dwarves, continents)); // ?
//console.log(Object.is(continents, worldWonders)); // ?
//console.log(Object.is(worldWonders, dwarves)); // ?


let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

//console.log(Object.is(banana, cherry)); // ?
//console.log(Object.is(cherry, chocolate)); // ?
//console.log(Object.is(chocolate, banana)); // ? 

fingernails = 'mu'

toes = 'mu'

//console.log(fingernails === toes)

let tea = function() {
    return 0 / 0
}

matcha = tea()

console.log(matcha)