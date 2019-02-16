__Hoofdstuk 8__
# Bugs and Errors
Fouten in computerprogramma's worden meestal __bugs__ genoemd. 
Het vinden van fouten - bugs - in programma's wordt __debugging__ genoemd.

## Strict mode
JavaScript kan een beetje strenger worden gemaakt door de strikte modus in te schakelen. Dit wordt gedaan door de string "use strict" bovenaan een bestand of een functie-instantie te plaatsen. bijvoorbeeld:
```js
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined
```

## Types
Sommige talen willen de typen van al uw bindingen en uitdrukkingen kennen voordat ze zelfs maar een programma uitvoeren.  
JavaScript houdt alleen rekening met typen wanneer het programma wordt uitgevoerd en zelfs daar probeert vaak impliciet waarden te converteren naar het type dat het verwacht, dus het helpt niet veel. Toch vormen typen een bruikbaar kader om over programma's te praten. Veel fouten komen door verwarring over het soort waarde dat in een functie komt of eruit komt. Als je die informatie hebt genoteerd, loop je minder snel in de war.

Je kan commentaar toevoegen aan je code om je code te beschrijven, bijvoorbeeld:
```js
// (VillageState, Array) → {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
  // ...
}
```

## Testing
Als de taal niet veel zal doen om ons te helpen fouten te vinden, zullen we ze op de moeilijke manier moeten vinden: door het programma uit te voeren en te zien of het goed werkt.
Computers zijn goed in repetitieve taken en testen is de ideale repetitieve taak. 
```js
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
  return "مرحبا".toUpperCase() == "مرحبا";
});
```

## Debugging
Zodra je merkt dat er iets mis is met je programma omdat het zich misdraagt of fouten oplevert, is de volgende stap om erachter te komen wat het probleem is.
Soms is het duidelijk. De foutmelding wijst naar een specifieke regel van uw programma en als u naar de foutbeschrijving en die regel kijkt, ziet u vaak het probleem.
Maar niet altijd. Kijk naar de volgende voorbeeld:
```js
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…
```
Als je deze code runt zul je merken dat je programma niet goed functioneert en we willen weten waarom.  
Hier moet je weerstand bieden aan de drang om willekeurige wijzigingen in de code aan te brengen om te zien of dat het beter maakt. In plaats daarvan, __denk na__. Analyseer wat er gaande is en bedenk een theorie van waarom het zou kunnen gebeuren. Het plaatsen van een paar strategische __console.log__-oproepen in het programma is een goede manier om aanvullende informatie te krijgen over wat het programma aan het doen is.

## Exceptions
Wanneer een functie niet normaal kan verlopen, willen we gewoon stoppen met wat we doen en onmiddellijk naar een plaats springen die weet hoe het probleem moet worden aangepakt. Dit is wat __exception handling__ doet. Hier is een voorbeeld:
```js
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
```

## Samenvatting
Fouten en slechte input zijn feiten van het leven. Een belangrijk onderdeel van programmeren is het vinden, diagnosticeren en oplossen van bugs. Problemen kunnen gemakkelijker worden opgemerkt als u een geautomatiseerd 'test-suite' hebt of beweringen aan uw programma's toevoegt.

Problemen veroorzaakt door factoren buiten de controle van het programma moeten meestal netjes worden behandeld. Soms, wanneer het probleem lokaal kan worden afgehandeld, zijn speciale retourwaarden een goede manier om ze op te sporen. Anders kunnen uitzonderingen de voorkeur verdienen.