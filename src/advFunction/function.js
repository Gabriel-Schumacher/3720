let countDown = (num) => {
    //console.log(num)

    if (num === 0) return
    countDown(num -1)
}

countDown(3)

let factorial = (num) => {
    //console.log(num)
    if (num === 1) return 1
    return num * factorial(num - 1) 
}

let myNum = factorial(4)

//console.log(myNum)

let reverse = (string) => {
    //console.log(string[0])
    //console.log(string.substring(1))

    if (string === '') return ''
    return reverse(string.substring(1)) + string[0]
}



//console.log(reverse('train'))

//console.log(reverse('frankenstein'))

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    },{
        name: 'Alice',
        salary: 1600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        },{
            name: 'Alex',
            salary: 1800
        }],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    },
    humanResources: [{
        name: 'Jennifer',
        salary: 2000
    }]
}

function countSalary (department) {
    if (Array.isArray(department)) {
        //return all salary summed together Case One
        return department.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0
        for(let subdep of Object.values(department)) {
            //make recursive call Case two
            sum += countSalary(subdep)
        }
        return sum
    }
}

//console.log(countSalary(company))


let person = {
    name: 'Gabriel',
    age: '26',

}

let myArray = [1,2,3,4,5,6,7,8,9]

let evens = myArray.filter(num =>  num % 2 === 0)

//console.log(evens)

let data = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'retreiver', parent: 'dogs' },
    { id: 'corgi', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' },
    { id: 'maineCoon', parent: 'cats' }
];

function makeNewTree(arr, parent) {
    const newTree = {}
    arr.forEach(e => {
        if(e.parent === parent) {
            newTree[e.id] = makeNewTree(arr, e.id)
        }
    })
    return newTree
}

//console.log(makeNewTree(data, null))

//Reduce Demo 

let arr = [1,2,3,4,5,6,7,8,9]


let sum = arr.reduce((acc, num) => {
    return acc * num
}, 0)

//console.log(sum)


let people = [
    {name: 'Alice', age: 21},
    {name: 'Bob', age: 25},
]

let grouped = people.reduce((acc, person) => {
    if(!acc[person.age]) {
        acc[person.age] = []
    }
    acc[person.age].push(person)
    return acc
}, {})

console.log(grouped)