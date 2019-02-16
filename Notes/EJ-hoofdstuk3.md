__Hoofdstuk 3__
# Functions
Functies zijn het brood en boter van Javascript.  
Het geeft ons een manier om grotere programma's te structureren, herhaling te verminderen, namen aan subprogramma's te koppelen en deze subprogramma's van elkaar te isoleren.

## Defining a function
Een functie definitie is een reguliere binding waarbij de value van de binding een functie is, bijvoorbeeld:
```javascript
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
```
Er wordt een functie gemaakt met een expression die begint met de keyword functie.  
Functies hebben een set parameters (in dit geval alleen x) en een hoofdtekst, die de instructies bevat die moeten worden uitgevoerd wanneer de functie wordt aangeroepen.  
Een __return__ statement bepaalt de waarde van de functie. 

Parameters van een functie gedragen zich als normale bindingen, maar hun beginwaarden worden gegeven door de _caller_ van de functie, niet door de code in de functie zelf.

## Bindings and scopes
Elke binding heeft een scope, dat is het deel van het programma waarin de binding zichtbaar is.  
Voor bindingen die buiten een functie of blok zijn gedefinieerd, is de scope het hele programma - u kunt naar dergelijke bindingen verwijzen waar u maar wilt.  
Deze worden __Global__ genoemd.  
Bindingen die zijn gemaakt voor functieparameters of die zijn gedeclareerd in een functie, kunnen alleen in die functie worden vermeld, dus staan ​​ze bekend als __Local__ binding. 
```javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```
Bindingen gedeclareerd met __let__ en __const__ zijn in feite local voor het blok waarin ze zijn gedeclareerd, dus als je een van die binnen een loop maakt, kan de code voor en na de loop het niet "zien".

## Nested scope
Blokken en functies kunnen in andere blokken en functies worden gemaakt en produceren meerdere graden van lokaliteit, bijvoorbeeld:
```javascript
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```
De reeks bindingen zichtbaar binnen een blok wordt bepaald door de plaats van dat blok in de programmatekst. Elk lokaal bereik kan ook alle lokale bereiken zien die het bevatten en alle bereiken kunnen de globale scope zien. Deze benadering van bindende zichtbaarheid wordt __lexical__ scoping genoemd.

## Functions as values
Een functie doet zich meestal gewoon als een naam voor, voor een specifiek onderdeel van het programma. Zo'n binding is eenmaal gedefinieerd en nooit veranderd. Dit maakt het gemakkelijk om de functie en de naam ervan te verwarren.
```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```

## Declaration Notation
Er is een iets kortere manier om een functiebinding te maken. Wanneer het keyword functie wordt gebruikt aan het begin van een instructie, werkt het anders.
```javascript
function square(x) {
  return x * x;
}
```
Dit is een functie declaration. De instructie definieert het bindende 'square' en wijst het naar de gegeven functie. Het is iets gemakkelijker om te schrijven en vereist geen puntkomma na de functie.

## Arrow functions
Er is een derde notatie voor functies, die er heel anders uitziet dan de andere. In plaats van het functiezoekwoord gebruikt het een pijl (=>) bestaande uit een gelijkteken en een groter-dan-teken (niet te verwarren met de groter-dan-of-gelijk-operator, die zo geschreven wordt >=).
```js
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

## Closure
in staat zijn om te verwijzen naar een specifiek exemplaar van een lokale binding in een insluitende scope - wordt een __Closure__ genoemd.
Een functie die verwijst naar bindingen van lokale scopes eromheen wordt een __Closure__ genoemd.
```js
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2;
```

## Recursion
Het is oke voor een functie om zichzelf te noemen, zolang het maar niet zo vaak gebeurt dat het de stapel overstroomt. 
Een functie die zichzelf aanroept, wordt __Recursive__ genoemd.
__Recursion__ zorgt ervoor dat sommige functies in een andere stijl kunnen worden geschreven, bijvoorbeeld:
```js
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```

## Samenvatting
In dit hoofdstuk hebt u geleerd hoe u uw eigen functies kunt schrijven. Het functiezoekwoord kan, wanneer het als een uitdrukking wordt gebruikt, een functiewaarde creëren. Als het wordt gebruikt als een statement, kan het worden gebruikt om een binding te declareren en het een functie als waarde te geven. Pijlfuncties zijn nog een andere manier om functies te creëren.
```js
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
```