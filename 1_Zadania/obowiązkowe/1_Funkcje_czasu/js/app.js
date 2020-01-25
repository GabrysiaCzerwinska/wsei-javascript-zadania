console.log('zadanie 1');

function countHello(number) {
    let counter = 1;

    let interval = setInterval(() => {
        counter++;

        console.log(`Hello ${ counter }`);

        (counter === number)
            && clearInterval(interval);
    });
}

countHello(4); 