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

## Footer Click State Implementation

- User Story: As a user, when I click on a "House"-Button the button should change it's background-color, so that I can see I clicked on it. Other Buttons should change to the default background color.

### Ideen

- jeweils eine state-varable für ein haus
- eine varible als string in der die hausfarbe steht
- ein objekt mit vier properties für jedes haus, jeweils ein boolean
