


class Comment {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }


   static mergeName (name1, lastName1) {
        return `${name1} ${lastName1}`
    }
}
const firstComment = new Comment("my first message")



class secondComment extends Comment {
    fio() {
        return this.lastName + this.name
    }
}

console.log(secondComment.fio)

let str = "hollyshit"

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))




const getData = (url) => 
    new Promise((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData("https://jsonplaceholder.typicode.com/todos/todos")
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

const asyncFn = async () => {
    return "Cupress Hill"
}
asyncFn()



console.log("1")

setTimeout(() => {
    console.log("setTimeout 1")
    Promise.resolve().then(() => {
        console.log("promise setTimeout")
    })
}, 0)

setTimeout(() => {
    console.log("setTimeout 2")
}, 0)

queueMicrotask(() => {
    console.log("queueMicrotask 1")
})

Promise.resolve().then(() => {
    console.log("promise 1")
})

queueMicrotask(() => {
    console.log("queueMicrotask 2")
})


Promise.resolve().then(() => {
    console.log("promise 2")
})
    
console.log("4")