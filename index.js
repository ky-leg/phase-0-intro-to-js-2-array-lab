// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats[cats.length] = name
    return cats 
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats 
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats 
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats 
}

function appendCat(name) {
    const newArray = cats.slice()
    newArray.push(name)
    return newArray
}

function prependCat(name) {
    const newArray = cats.slice();
    newArray.unshift(name);
    return newArray
}

function removeLastCat() {
    const newArray = cats.slice()
    newArray.pop()
    return newArray
}

function removeFirstCat() {
    const newArray = cats.slice();
    newArray.shift();
    return newArray
}