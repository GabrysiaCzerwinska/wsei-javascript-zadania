/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */
/*
Zagniezdzanie funkcji.
Przesledz krok po kroku kazda linijke kodu. Kazda!
Napisz komentarze dla kazdej z linijek kodu
*/

//Twoj komentarz ...
// Stworzenie funkcji `sortArray`
function sortArray() {

    //Twoj komentarz ...
    // Stworzenie tablicy `points` i wypełnienie jej liczbami
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twoj komentarz ...
    // Posortowanie tablicy `points` za pomocą wbudowanej metody `sort`
    points.sort(function (a, b) {
        //Twoj komentarz ...
        // Posortowanie tablicy rosnąco dzięki badaniu różnicy dwóch sąsiadujących elementów tablicy
        return a - b;
    });

    //Twoj komentarz ...
    // Zwrócenie tablicy `points`
    return points;
}

//Twoj komentarz ...
sortArray();
// wywołanie funkcji `sortArray`
sortArray(); 