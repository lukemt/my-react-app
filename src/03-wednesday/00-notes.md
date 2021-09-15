# React und State

## Show Details

- Funktion die ausgeführt wird wenn der button geklickt wird
- Ändert den Zustand der Card

### Steps

1. Detailansicht der Card implementieren
   1. Mit Konfigurations-Variable `showDetails`
2. Funktion implementieren die aufgerufen wird wenn der Button geklickt wird
3. Diese muss den "State" der Komponente `Card` verändern
   1. `showDetails` auf true setzen bzw. togglen
      1. Hint: Use negation or ternary expression or if-statement

## Emoji Tags

- Eine leiste mit emoji-buttons
- Bei klick auf ein emoji erscheint das emoji vor dem namen

### Steps

1. eine neue state-variable `emoji`
   1. Datentyp: String
   2. Default Value: ""
   3. Example Value: "🤓"
   4. Execution Plan
      1. const [emoji, setEmoji] = useState("")
2. Eine leiste mit Emoji-Buttons einbauen
   1. In den einzelen Buttons `onClick`-Funktionen implemientieren
   2. Die onClick-Funktionsaufrufe sollen die emoji-state-variable ändern
