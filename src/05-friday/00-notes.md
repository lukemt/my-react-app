# notes friday

## Install React Dev Tools

## Favorites Function

1. neuen state:
   favorites = []
   in App-Compnent
2. Button erstellen
   1. Wo? Card-Component.
3. onClick handler
   1. Wo? App-Cpmponent
   2. Was muss der Handler machen? Der muss den state (favorites) in App verändern (eintrag hinzufügen/entfernen)
      1. HINT use .filter() to remove a
   3. Muss von App an Card weitergereicht werden
4. Card markiert oder nicht-markiert darstellen
   1. favorites-state von App an Card weitergeben
   2. Card markieren wenn name im state vorhanden ist, ansonsten nicht

## In Local Storage speichern

1. onClick-Handler soll zusätzlich zum state in App-Component, auch den neuen Inhalt des favorites-array in LocalStorage speichern
2. Standatdwert von favorites umschreiben
   1. Statt leeres array lesefunktion von LocalStorage aufrufen
   2. Im Fall dass noch nichts gespeichert ist: Leeres array als start-wert nehmen
