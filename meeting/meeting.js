console.log('hello world')


const spreadsheet = { title: 'Sales' };
const copy = spreadsheet;
copy.title = copy.title + ' (Copy)';

console.log(spreadsheet.title); // ???
///////////////////////////////////////////////////////////////////////////////////////




let music = {
    taste: "classical"
}

let onion = music

console.log(music.taste); // "classical"
onion.taste = "umami";
console.log(music.taste); // "umami"t

let burger = {
    beef: "veggie"
}

let rapper = {
    beef: "legit"
}

console.log(burger.beef); // 'veggie'
burger = rapper;
console.log(burger.beef); // 'legit'

let daria = {
    address: { city: 'Lawndale' }
  };
  let place = daria.address;
  place.city = 'L.A.';
  let jane = {
    address: place
  };
  
  console.log(daria.address.city); // ???

  let dipper = {
    address: {
      city: { name: 'Gravity Falls' }
    }
  };
  
  let mabel = {
    address: dipper.address
  };
  
  dipper.address.city = {
    name: 'Land of Ooo'
  };
  
  console.log(mabel.address.city.name); // ???