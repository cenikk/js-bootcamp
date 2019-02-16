__Hoofdstuk 1__
# Values, Types, And Operators
*Bits* zijn allerlei soorten van twee waarden, meestal beschreven als nullen en énen.
Bijvoorbeeld, we kunnen nummer 13 in bits uitdrukken:
```
    0   0   0   0   1   1   0   1
    128 64  32  16  8   4   2   1
```
Dus dat is de binaire getal 00001101. De niet-nullen cijfers staan voor 8, 4 en 1, en tellen op tot 13.

## Values
Een typische moderne computer heeft meer dan 30 miljard bits in zijn gegevensopslag (werkgeheugen)
Om met zulke hoeveelheden bits te kunnen werken zonder te verdwalen, moeten we de bits scheiden in brokken  
die stukjes informatie vormen. In JavaScript worden die brokken ook wel 'Values' genoemd.   
Elke Value heeft een type dat de rol bepaalt, sommige zijn nummers, sommige stukjes tekst,  
sommige functies, enzovoort. Als je een Value wil maken, hoef je alleen de naam ervan te gebruiken.  

## Numbers
Nummerieke waardes, je schrijft ze als volgt:  
`13`  
Fractienummers worden geschreven met behulp van een punt,  
`9.81`  
Voor zeer grote/kleine getallen, kan je ook een __e__ (exponent) toevoegen, gevolgd door een nummer  
`2.998e8, Dat is 2.998 * 108 = 299.800.000`  

## Arithmetic
Arithmetic operations zoals optellen en vermenigvuldigen nemen twee getalswaarden en produceren  
er een nieuwe getal uit. Hier is hoe ze eruit zien:  
`100 + 4 * 11`  
De + en * symbolen worden __Operators__ genoemd.  
Operators hebben voorangsregels:  
`() Haakjes`  
`* en / Vermenigvuldigen en delen`  
` + en - Plus en Min`  
Er is nog een andere operator: __%__- Modulo, deze wordt gebruikt om de 'rest' te berekenen, bijvoorbeeld:  
`15%4 = 3`  

## Strings 
Strings worden gebruikt om tekst weer te geven. Je schrijft ze door hun inhoud tussen aanhalingstekens te plaatsen.  
`"Realize"`  
`'Real lies'`  
Wanneer een backslash ( \ ) wordt gevonden in de tekst, geeft dit aan dat de teken erna een speciale betekenis heeft.  
Bijvoorbeeld: `"Dit is de eerste regel\nEn dit is de tweede regel` wordt:  
`Dit is de eerste regel`  
`En dit is de tweede regel`  

Strings kunnen niet worden gedeeld, vermenigvuldigd of afgetrokken, maar de + operator kan wel erop worden gebruikt.  
Het voegt dingen aan elkaar, wat __concatenate__ wordt genoemd, bijvoorbeeld:  
`"Ja" + "va" + "Scr" + "ipt"` wordt `"JavaScript"`  

Wanneer je iets in ${} schrijft, wordt het resultaat ervan berekend en opgenomen op die positie, bijvoorbeeld:  
`De helft van 50 is ${50/2}` wordt `De helft van 50 is 100`  

## Unary operators
Sommige operators zijn geschreven als woorden, een voorbeeld is __typeof__, die een string value produceert  
met de naam van de value die je geeft.

```javascript
console.log(typeof 6.5)
// -> number

console.log(typeof "Hello world")
// -> string
```
Operators die twee waarden gebruiken, worden __Binaire__ operators genoemd,  
operators die éen waarde gebruiken, __Unaire__ operators. (min (-) kan beide)  

## Boolean Values
Boolean types hebben slechts twee waarden, __true__ en __false__, die ook zo geschreven worden.  
``` javascript
console.log(3 > 2)
// -> true
console.log(3 < 2)
// -> false
```

#### Comparison
De tekens > en < zijn symbolen voor "is groter dan" en "is kleiner dan", ook wel binaire operators.  
Andere vergelijk operators zijn:
* __>=__ (groter of gelijk aan) 
* __<=__ (kleiner of gelijk aan)
* __==__ (gelijk aan)
* __===__ (identiek aan (ook hetzelfde _datatype_))
* __!=__ (niet gelijk aan)
Er is slechts éen waarde in JS die niet gelijk is aan zichzelf en dat is `NaN` ("Not a Number").
```javascript
console.log(Nan == Nan)
// -> false
```
__NaN__ geeft het resultaat van een onzinnige resultaat aan, zoals: `24 - 'hello' = NaN`

## Logical Operators
Er zijn enkele bewerkingen die zelf kunnen worden toegepast op Boolean waardes.  
Javascript ondersteunt vier Logical operators:
1. __&&__ - En, het resultaat is alleen waar als alle waarden waar zijn.
2. __||__ - Of, het resultaat is waar als éen van de waarden waar is.
3. __!__ - Niet, het draait de waarde die eraan gegeven is om.

Ten slotte is er ook een Ternary operator die werkt op drie waarden.
``` javascript
console.log(true? 1 : 2)
// -> 1
console.log(false? 1: 2)
// -> 2
console.log((21 >= 18) ? "Je mag naar binnen" : "Je bent te jong")
// -> "Je mag naar binnen"
```
