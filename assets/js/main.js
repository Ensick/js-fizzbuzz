
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// **Prima di partire a scrivere codice poniamoci qualche domanda:**
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// **Consigli del giorno:**
// >
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

let box = document.getElementById("box")







for (let x = 1; x <= 100; x++) {

    let divNuovo = document.createElement("div")
    divNuovo.classList.add("box-js")


    if (x % 3 == 0 && x % 5 == 0) {

        divNuovo.innerText = `FizzBuzz`;
        divNuovo.classList.add("ms-bg-red")

        console.log("FizzBuzz")

    } else if (x % 5 == 0) {

        divNuovo.innerText = `Buzz`;
        divNuovo.classList.add("ms-bg-orange")
        console.log("Buzz")

    } else if (x % 3 == 0) {

        divNuovo.innerText = `Fizz`;
        divNuovo.classList.add("ms-bg-green")
        console.log("Fizz")
    } else {

        divNuovo.innerText = `${x}`;
        divNuovo.classList.add("ms-bg-blue")
        console.log(x)
    }

    box.append(divNuovo)

}