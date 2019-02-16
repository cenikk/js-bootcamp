__Hoofdstuk 5__
# Higher-Order Functions
Kijk naar de volgende voorbeelden:  
```
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
```
en
```
console.log(sum(range(1, 10)));
```
Welke is waarschijnlijker om een bug te bevatten?
Als we de grootte van de definities van sum en range tellen, is het tweede programma ook groot - zelfs groter dan het eerste.  
Maar toch zou ik zeggen dat het waarschijnlijker is dat het correct is.  

Het is waarschijnlijker dat dit correct is omdat de oplossing wordt uitgedrukt in een __vocabulaire__ die overeenkomt met het probleem dat wordt opgelost. 


## Abstraction
In de context van programmeren worden dit soort vocabulaires meestal __abstracties__ genoemd.  
Abstracties verbergen details en geven ons de mogelijkheid om op een hoger (of abstracter) niveau over problemen te praten.  

## Higher order Functions 
Functies die werken op andere functies, ofwel door ze als argumenten te gebruiken of door ze terug te zetten, worden Highter order functions genoemd.  
Higher order functions stellen ons in staat om acties te abstracten, niet alleen waarden, bijvoorbeed:
```
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

## Filtering arrays
Zoals forEach, is filter een standaard array-methode.  
In plaats van elementen uit de bestaande array te verwijderen, bouwt het een nieuwe array op met alleen de elementen die een test doorstaan.  
```
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
```

## Summarizing with reduce
Een ander veelvoorkomend probleem met arrays is het berekenen van een enkele waarde ervan.  
De bewerking van de hogere orde , wordt __Reduce__ (soms ook fold genoemd) genoemd.  
De Reduce parameters zijn (behalve de array): een combinatie-functie en een startwaarde. 
```
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
```

## Samenvatting
Het kunnen doorgeven van functiewaarden aan andere functies is een zeer nuttig aspect van JavaScript.  
Het stelt ons in staat om functies te schrijven die berekeningen met "hiaten" in hen modelleren.   
De code die deze functies aanroept, kan de hiaten opvullen door functiewaarden op te geven.  

Arrays bieden een aantal bruikbare methoden van hogere orde. je kan forEach gebruiken om de elementen in een array te herhalen.  
De filtermethode retourneert een nieuwe array die alleen de elementen bevat die de predicatefunctie passeren.  
Het transformeren van een array door elk element door een functie te leiden, wordt gedaan met behulp van de kaart.  
U kunt reduc gebruiken om alle elementen in een array te combineren in één waarde. De enige methode test of een element  
overeenkomt met een bepaalde predicatefunctie. En findIndex vindt de positie van het eerste element dat overeenkomt met een predicate.