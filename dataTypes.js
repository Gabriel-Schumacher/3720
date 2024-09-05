





//let reaction = 'yikes';
//reaction[0] = 'l';
//console.log(reaction);



//it will run an error because I can't change a string variable that has been declared.

let arr = [212, 8, 506];
let str = 'hello';

console.log(arr[0]); // 212
console.log(str[0]); // "h"

//let fifty = 50;
//fifty.shades = 'gray'; // No!

let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet); // It will be the Kraken because we're reassigning the whole variable not the value already declared.

//20000 = 'leagues under the sea'; // Nope.
//'war' = 'peace'; // Nope.

function double(x) {
    x = x * 2;
  }
  
  let money = 10;
  double(money);
  console.log(money); // 10

let x = 10;
let y = x;
x = 0;

console.log(x, y)

//Quiz

//let numberOfTentacles = 10;
//numberOfTentacles = 'eight';
//console.log(typeof numberOfTentacles);

let numberOfTentacles = 10;
console.log(typeof numberOfTentacles);
numberOfTentacles = 'eight';

//let answer = true;
//answer.opposite = false;
//console.log(answer.opposite);

//null = 10;
//console.log(null);

let it = 'be';
let them = 'eat cake';
it = them;

//import feed from './feed.js';

let pets = 'Tom and Jerry';
//feed(pets);
console.log(pets[0]);


//import feed from './feed.js';

//let pets = ['Tom', 'Jerry'];
//feed(pets);
//console.log(pets[0]);

let varOne = ['Jeremy', 1]

function addToArray(x) {
    x.push('Jim')
    x.unshift('Dorothy')
    return x
}

console.log(addToArray(varOne))

function displayContent() {
  document.getElementById('toDoList') 
  toDoList.innerHTML = ""
  varOne.forEach(name => {
    let listItem = document.createElement('li')
    listItem.textContent = name
    toDoList.appendChild(listItem)
  })
}

displayContent()
