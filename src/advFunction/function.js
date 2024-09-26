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

console.log(countSalary(company))