
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

 let div = document.getElementById("box")

 let span = document.createElement("span")

 div.append(span)


 console.log("x")


  for( let x=1; x <=100; x++){

     if( x % 3 == 0 && x % 5 == 0 ){

         span.innerHTML += `pera`;
         console.log("x")

     }else if(x % 5 == 0){

         span.innerHTML += `mela`
         console.log("x")

     } else if(x % 3 == 0){

         span.innerHTML += `arancia`
         console.log("x")
     }

  }