console.log('4.1');

let country = {
    capital: 'Warsawa',
    population: 38486000,
    president: 'Andrzej Duda',
    primeMinisters: ['Mateusz Morawiecki', 'Piotr Gliński', 'Jacek Sasin', 'Jarosław Gowin']
};

console.log(country.capital);
console.log(country.population);
console.log(country.president);
console.log(country.primeMinisters);

let timeMchine = {
    shape: 'shape',
    model: 'model',
    run: (date, place) => {
        console.log(`Przenosimy się do daty: ${ date }, w miejsce: ${ place }`);
    }
};

console.log(timeMchine.shape);
console.log(timeMchine.model);

timeMchine.run('18/01/2020', 'Aleja Pokoju');

// Exercise 2

console.log('4.2');

let book = {
    title: 'Harry Potter',
    author: ['J.K.Rowling'],
    numberOfPages: 418
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// Exercise 3

console.log('4.3');

let person = {
    name: 'Gabrysia',
    age: 22,
    sayHello: () => {
        console.log('Hello');
    }
};

console.log(person.name);
console.log(person.age);

person.sayHello();

// Exercise 4

console.log('4.4');

let recipe = {
    title: 'nalesniki',
    servings: 1
};

recipe.ingredients = ['patelnia', 'ciasto'];

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

// Exercise 5

console.log('4.5');

let spoon = {
    isExist: true
};

let fork = spoon;

fork.isExist = false;

spoon.isExist
    ? console.log('Istnieje')
    : console.log('Nie istnieje');