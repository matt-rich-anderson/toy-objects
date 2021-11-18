const toys = [
    {
        id: 1,
        name: "Robby the Robot",
        inStock: true,
        price: 12.99
    },
    {
        id: 2,
        name: "Captian Lightning's Spaceship",
        inStock: true,
        price: 26.99
    },
    {
        id: 3,
        name: "Mars Mission Playset",
        inStock: false,
        price: 49.99
    }
]

console.log(toys)

console.log(toys[0].name)

for (const toy of toys) {
    console.log(toy.inStock)
}

const newToy = {
    id: 4,
    name: "Lord Zog",
    inStock: true,
    price: 12.99
}

toys.push(newToy)

for (const toy of toys) {
    console.log(toy.id)
}

const newerToy = {
    id: 5,
    name: "Alan, the Space Chimp",
    inStock: true,
    price: 14.99
}

toys.push(newerToy)

for (const toy of toys) {
    console.log(toy.price)
}

for (const toy of toys) {
    console.log(`${toy.name} costs $${toy.price}`)
} 

for (const toy of toys) {
    toy.price = toy.price * 1.05
    toy.price = toy.price.toFixed(2)
}

for (const toy of toys) {
    console.log(`${toy.name} costs $${toy.price}`)
}

let toyToFind = 4

for (const toy of toys) {
    if (toy.id === toyToFind) {
        console.log(`The toy you searched for is ${toy.name}`)
    }    
}

// Add a toy the right way

const newestToy = {
    name: "The Purple People Eater",
    inStock: true,
    price: 20.99
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    // console.log(currentLastToy)
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(newestToy)

for (const toy of toys) {
    console.log(toy.name)
}