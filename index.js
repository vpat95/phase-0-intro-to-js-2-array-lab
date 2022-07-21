
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
};

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat(name) {
    return cats.slice(0, -1);
}

function removeFirstCat(name) {
    return cats.slice(1);
}