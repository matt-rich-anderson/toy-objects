const toys = [
    {
        id: 1,
        name: "Robby the Robot",
        inStock: true,
        price: 12.99
    },
    {
        id: 2,
        name: "Captian Lightning's Spaceship ",
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