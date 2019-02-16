__Hoofdstuk 6__
# The Secret Life of Objects
## Encapsulation
Het kernidee bij object-georiënteerd programmeren is om programma's in kleinere stukjes te verdelen en elk stuk verantwoordelijk te maken voor het beheer van zijn eigen staat.  
Op deze manier kan wat kennis over de manier waarop een stuk van het programma werkt, lokaal bij dat stuk worden bewaard.  
Iemand die aan de rest van het programma werkt, hoeft zich die kennis niet te herinneren of zelfs maar te kennen.
Verschillende delen van een dergelijk programma communiceren met elkaar via interfaces, beperkte sets van functies of bindingen die nuttige functionaliteit bieden op een meer abstract niveau, waardoor hun precieze implementatie wordt verborgen.  
Interface scheiden van de implementatie wordt meestal __Encpasulation__ genoemd.  

## Methods
Methoden zijn niets meer dan eigenschappen die function values bevatten. Een eenvoudige methode is:
```
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```
Meestal moet een methode iets doen met het object waarop het werd aangeroepen.  
Wanneer een functie wordt aangeroepen als een methode - opgezocht als een eigenschap en onmiddellijk wordt opgeroepen, zoals in object.method () -   
verwijst de binding die dit in zijn hoofdtitel heeft aangeroepen automatisch naar het object waarop de functie is aangeroepen.
```
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'
```
Je kunt __this__ zien als een extra parameter die op een andere manier wordt doorgegeven.
Aangezien elke functie zijn eigen this-binding heeft, waarvan de waarde afhangt van de manier waarop deze wordt aangeroepen,  
kunt u niet verwijzen naar deze van de wrapping-scope in een reguliere functie die is gedefinieerd met het functie keyword.

## Prototypes 
Javascript-objecten hebben naast hun verzameling eigenschappen ook een prototype.  
Een __prototype__ is een ander object dat wordt gebruikt als een terugvalbron van eigenschappen.  
Wanneer een object een aanvraag ontvangt voor een eigenschap die het niet heeft,  
wordt er naar het prototype gezocht naar de eigenschap, dan naar het prototype van het prototype, enzovoort.
```
console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true
```
Je kan Object.create gebruiken om een object met een specifiek prototype te maken:
```
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
```

## Classes
Een __Class__ definieert de vorm van een type object - welke methoden en eigenschappen het heeft. Zo'n object wordt een instantie van de class genoemd.
Dus om een exemplaar van een bepaalde class te maken, moet je een object maken dat is afgeleid van het juiste prototype, maar je moet ook zorgen dat het zelf de eigenschappen heeft die instanties van deze class zouden moeten hebben. Dit is wat een __Constructor__ functie doet.
```
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```

## Class notation
De class keyword start een class decoration, waarmee we een constructor en een set methoden op één plaats kunnen definiëren.  
Elke methode kan in de accolades van de declaratie worden geschreven.
Class-declaraties staan ​​momenteel alleen toe dat methoden (eigenschappen die functies bevatten), aan het prototype worden toegevoegd.  
Net als functies, kan class zowel in statements als in expressions worden gebruikt: 
```
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
```