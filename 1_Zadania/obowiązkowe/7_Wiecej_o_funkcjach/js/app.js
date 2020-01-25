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
// Stworzenie funkcji `jeden`
function jeden() {

    //Twoj komentarz ...
    // Stworzenie zmiennej `zmienna1` i przypisanie do niej wartosci `1`
    var zmienna1 = 1;

    //Twoj komentarz ...
    // Stworzenie funkcji `dwa`
    function dwa() {

        //Twoj komentarz ...
        // Wyświetlenie w konsoli wartości zmiennej `zmienna1`
        console.log(zmienna1);

        //Twoj komentarz ...
        // Stworzenie zmiennej `zmienna2` i przypisanie do niej wartosci `3`
        var zmienna2 = 3;
    }

    //Twoj komentarz ...
    // Wywołanie funkcji `dwa`
    dwa();

    //Twoj komentarz ...
    console.log(zmienna2)
    // Wyświetlenie w konsoli wartości zmiennej `zmienna2`
    // Funkcja `jeden` nie ma dostępu do zmiennej `zmienna2` ponieważ zmienne opisane słowem `var` mają zasięg funkcyjny (`zmienna2` została stworzona w funkcji `dwa`)
    console.log(zmienna2);
}

//Twoj komentarz ...
jeden() 
// Wywołanie funkcji `jeden`
jeden(); 