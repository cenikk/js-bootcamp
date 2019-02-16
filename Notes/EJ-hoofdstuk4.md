__Hoofdstuk 4__
# Data Structures: Objects and Arrays
Numbers, Booleans en strings zijn de atomen waaruit datastructuren zijn opgebouwd.  
Veel soorten informatie hebben echter meer dan één atoom nodig. Met __objecten__ kunnen we waarden, waaronder andere objecten, groeperen om meer complexe structuren te bouwen.

## Data sets
JavaScript biedt een gegevenstype dat specifiek is bedoeld voor het opslaan van waarden sequenties. Het wordt een __array__ genoemd en wordt geschreven als een zoeklijst tussen vierkante haken, gescheiden door komma's.
```js
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
```

## Properties
Bijna alle JavaScript-waarden hebben __Properties__. De uitzonderingen zijn `null` en `undefined`.  
De twee belangrijkste manieren om toegang te krijgen tot eigenschappen in JavaScript zijn met een punt en met vierkante haakjes. Zowel `value.x` als  `value[x]` krijgen toegang tot een eigenschap op waarde, maar niet noodzakelijk dezelfde eigenschap. Wanneer je een punt gebruikt, is het woord na de punt de letterlijke naam van de eigenschap. Wanneer vierkante haakjes worden gebruikt, wordt de uitdrukking tussen de haakjes geëvalueerd om de eigenschapsnaam te krijgen.

## Methods
Zowel string- als array-objecten bevatten, naast de eigenschap length, een aantal eigenschappen met functiewaarden.
```js
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
```
Eigenschappen die functies bevatten worden over het algemeen __Methods__ van de waarde genoemd waartoe ze behoren, zoals in "toUpperCase is een methode van een string".

## Objects
Waarden van het type __object__ zijn willekeurige verzamelingen van eigenschappen. Een manier om een object te maken is door accolades als een uitdrukking te gebruiken.
```js
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
```

## Mutability
We hebben gezien dat objectwaarden kunnen worden gewijzigd. De soorten waarden die in eerdere hoofdstukken zijn besproken, zoals getallen, strings en Booleans, zijn allemaal onveranderlijk (immutable) - het is onmogelijk om waarden van die typen te veranderen. 

Objecten werken anders. U kunt hun eigenschappen wijzigen, waardoor een enkele objectwaarde op verschillende tijdstippen andere inhoud heeft.
```js
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

## Array loops
```js
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```
Dit soort loop komt veel voor in klassieke JavaScript arrays. Eén element tegelijk is iets dat vaak voorkomt, en om dat te doen zou je een teller over de lengte van de array laten lopen en elk element om beurten selecteren. Er is een makkelijkere manier:
```js
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

## Samenvatting
Objecten en arrays(een specifiek soort object) bieden manieren om meerdere waarden in een enkele waarde te groeperen. Conceptueel stelt dit ons in staat een aantal verwante dingen in een tas te doen en met de tas rond te rennen, in plaats van onze armen om alle individuele dingen te wikkelen en ze afzonderlijk te proberen vast te houden.

De meeste waarden in JavaScript hebben eigenschappen, de uitzonderingen zijn null en undefined. Eigenschappen worden geopend met value.prop of value ["prop"]. Objecten gebruiken meestal namen voor hun eigenschappen en slaan min of meer een vaste set ervan op. Arrays daarentegen bevatten gewoonlijk verschillende hoeveelheden conceptueel identieke waarden en gebruiken nummers (beginnend bij 0) als de namen van hun eigenschappen.

Er zijn een aantal eigenschappen in arrays, zoals length en een aantal methoden. Methoden zijn functies die in eigenschappen leven en (meestal) handelen volgens de waarde waartoe ze behoren.

U kunt arrays itereren met een speciaal soort for loop (__let__ `element` __of__ `arrayName`).