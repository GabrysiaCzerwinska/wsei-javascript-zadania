document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    window.addEventListener('DOMContentLoaded', function() {
        // Exercise 1
    
        console.log('10.1');
    
        let ex5Element = document.querySelector('.ex5');
        let liElements = ex5Element.querySelectorAll('li');
    
        for(let i = 0; i < liElements.length; i = i + 2) {
            liElements[i].style.backgroundColor = 'green';
        }
    
        liElements[4].classList.add('big'); // liElements[5].classList.add('big');
    
        for(let i = 0; i < liElements.length; i = i + 3) {
            liElements[i].style.textDecoration = 'underline';
        }
    
        // Exercise 2
    
        console.log('10.2');
    
        let chromeElement = document.querySelector('.chrome');
        let edgeElement = document.querySelector('.edge');
        let firefoxElement = document.querySelector('.firefox');
    
        edgeElement.style.backgroundImage = 'url("assets/img/edge.png")';
        firefoxElement.style.backgroundImage = 'url("assets/img/firefox.png")';
    
        chromeElement.nextElementSibling.setAttribute('href', 'https://www.google.com/intl/pl_pl/chrome/');
        chromeElement.nextElementSibling.innerHTML = 'Chrome';
        chromeElement.style.width = '100px';
    
        edgeElement.nextElementSibling.setAttribute('href', 'https://www.microsoft.com/en-us/edge');
        edgeElement.nextElementSibling.innerHTML = 'Edge';
    
        firefoxElement.nextElementSibling.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');
        firefoxElement.nextElementSibling.innerHTML = 'Firefox';
    
        // Exercise 3
    
        console.log('10.3');
    
        document.querySelector('#name').innerHTML = 'Kamil';
        document.querySelector('#fav_color').innerHTML = 'Niebieski';
        document.querySelector('#fav_meal').innerHTML = 'Oscypek';
    
        // Exercise 4
    
        console.log('10.4');
    
        let ex3Element = document.querySelector('.ex3')
    
        ex3Element.querySelector('ul').classList.add('menu');
    
        for(let element of ex3Element.querySelectorAll('li')) {
            element.classList.add('menuElement');
            element.classList.remove('error');
        }
    
        // Exercise 5
    
        console.log('10.5');
    
        for(let i = 0; i < document.querySelector('.ex4').querySelectorAll('li').length; i++) {
            document.querySelector('.ex4').querySelectorAll('li')[i].setAttribute('data-id', i + 1);
        }
    }); 

});