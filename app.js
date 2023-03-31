
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fir: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({time = "20 : 00", address, mainIndex = 1, starterIndex = 0}) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`)
    }
}
// Default value
restaurant.orderDelivery ({
    address: 'Via del Sole, 21',
})

const arr = [7, 8, 9]
const newBadArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(newBadArr)

const newGoodArr = [1, 2, ...arr]
console.log(newGoodArr)

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt("Ingredient 2"),
    prompt("Ingredient 3")]

console.log(ingredients)

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients)


// const {name, openingHours, categories} = restaurant
// console.log(name, openingHours, categories)

// // Mutating variables
// let a = 111
// let b = 999
// const obj = {a: 23, b: 7, c: 14}




// console.log(restaurant.order(2, 0))

// const [starter, main] = restaurant.order(2, 0)
// console.log(starter, main)


// const nested = [2, 4, [5, 6]]
// const [l, , [j, k]] = nested
// console.log(l, j, k)