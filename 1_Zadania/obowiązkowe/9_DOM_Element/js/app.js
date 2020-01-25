document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     // Exercise 1

});
console.log('9.1');

function getDatasInfo(elements) {
    let colors = [];

    for(let element of elements)
    colors.push(element.dataset.color);

    return colors;
}

console.log(getDatasInfo(links));

// Exercise 2

console.log('9.2');

console.log(homeElement);
console.log(childElements);
console.log(banner);
console.log(blocks);
console.log(links);

for(let element of childElements)
    console.log(`${ element.nodeName } | ${ element.className }`);

for(let element of blocks)
    console.log(`${ element.nodeName } | ${ element.className }`);

for(let element of links)
    console.log(`${ element.nodeName } | ${ element.className }`);

// Exercise 3

console.log('9.3');

for(let element of blocks) {
    // `innerHTML` zwraca tylko kod zawierający się w badanym elemencie
    console.log(element.innerHTML);
    // zmiana `innerHTML` zmieniła cały kod zawarty w elementu
    element.innerHTML = 'Nowa wartość diva o klasie blocks';
    console.log(element.innerHTML);
    // `innerHTML` zwraca kod zawierający się w badanym elemencie oraz sam element
    console.log(element.outerHTML);
}

// Exercise 4

console.log('9.4');

function getId(element) {
    return element.id;
}

console.log(getId(document.querySelector('#mainFooter')));

// Exercise 5

console.log('9.5');

function getTags(elements) {
    let tags = [];

    for(let element of elements)
        tags.push(element.nodeName);

    return tags;
}

console.log(getTags(childElements));

// Exercise 6

console.log('9.6');

function getClassInfo(element) {
    let classes = [];

    for(let i = 0; i < element.classList.length; i++)
        classes.push(element.classList[i]);

    return classes;
}

console.log(getClassInfo(banner));

// Exercise 7

console.log('9.7');

function setDataDirection(elements) {
    for(let element of elements)
        !element.dataset.direction &&
            element.setAttribute('data-direction', 'top');
}

setDataDirection(document.querySelectorAll('nav li'));
}); 


