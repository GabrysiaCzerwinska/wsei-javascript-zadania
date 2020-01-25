document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    document.addEventListener("DOMContentLoaded", function () {
        /*
        Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
         */
    window.addEventListener("DOMContentLoaded", function () {
        // Exercise 1
    
    });
        console.log('8.1');
    
        console.log(document.querySelector('.title'));
    
        function getDataAnimation(element) {
            let animation = element.dataset.animation;
    
            return animation;
        }
    
        console.log(getDataAnimation(document.querySelector('.title')));
    
        // Exercise 2
    
        console.log('8.2');
    
        let homeElement1 = document.querySelector('#home');
        let homeElement2 = document.getElementById('home');
        let liElement = document.querySelector('li[data-direction]');
        let blockElement = document.querySelector('.block');
    
        console.log(homeElement1);
        console.log(homeElement2);
        console.log(liElement);
        console.log(blockElement);
    
        // Exercise 3
    
        console.log('8.3');
    
        let liElements = document.querySelectorAll('nav li');
        let pElements = document.querySelectorAll('div p');
        let divElements = document.querySelectorAll('article div');
    
        console.log(liElements);
        console.log(pElements);
        console.log(divElements);
    
        // Exercise 4
    
        console.log('8.4');
    
        let article = document.querySelector('article.first');
    
        console.log(article.querySelectorAll('h2').length);
    }); 

});
