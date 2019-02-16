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