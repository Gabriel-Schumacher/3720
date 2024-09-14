let numberArray = [2, 3, 4, 5]
//let doubleArray = [1, 2 , 3, 6]

let doubleArray = numberArray.map(num => num * 2)
numberArray.forEach(el => console.log(el))

function myForEach(arr, callBackFunction) {
  for (let i = 0; i < array.length; i++) {
      console.log(i), 0, 1, 2, 3, 4
      callBackFunction(arr[i])
  }  
}





function myMap(arr, cb) {

  let newArr = []

  for (let index = 0; index < array.length; index++) {
    cb(arr[i])
  }
  return newArr
}

myMap(numberArray, myMap)

myForEach(doubleArray, el => console.log('item: ' + gabe))