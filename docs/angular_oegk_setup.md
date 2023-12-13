## Environment Setup für Angular

#### nodejs installieren

1. **nodejs** version via **Softwarecenter** installieren. Bitte darau achten, dass ihr Version **18.12.1** verwendet
2. checken der Version
   1. Start/cmd -> node -v

#### Visual Studio Code installieren

1. via Softwarecenter falls noch nicht vorhanden
2. alle Plugins kommen dann mit dem repo

#### npm setup (falls ihr Angular noch nicht installiert habt)

Um bei euch am Rechner Angular zu installieren benötigt ihr **npm**
1. Start/CommandLine -> npm --version ... sollte vorinstalliert sein
2. Danach müsst ihr die location von npm wechseln um Befehle ausführen zu dürfen 
   1. npm Ordner unter **C:/Benutzer/<username>/AppData/Roaming/npm** kopieren und auf **D:/TA3/<Ordner>** kopieren
   2. Danach müsst ihr noch **Umgebungsvariablen** setzen
   3. Start und suchen nach "Umgebungsvariablen für dieses Konto bearbeiten"
   4. Path -> bearbeiten und neuen Eintrag hinzufügen
   5. Neuer Eintrag mit **Pfad** zu npm z.B: **D:/TA3/npm**
3. Danach eine neue CommandLine öffnen und npm --version testen
4. brauchen wir nocht einen proxy
   1. CommandLine: **npm config set proxy http://proxy.sozvers.at:8080**


### angular cli installieren
 Nachdem nodejs und npm erfolgreich wahren eine CommandLine öffnen
 1. **npm install -g @angular/cli@16.2** (maximal verfügbare version mit dieser nodejs version)
 2. danach müssen wir wiederum eine **Umgebungsvariable** setzen
    1. Start und suchen nach "Umgebungsvariablen für dieses Konto bearbeiten"
    2. Path -> bearbeiten und neuen Eintrag hinzufügen
    3. Neuer Eintrag mit Pfad zur angular cli z.B: **D:/TA3/npm/node_modules/@angular/cli**
 3. neue CommandLine öffnen und **ng version** 

### Projekt aufsetzen

1. kopiert das angefügte zip in euren **D:/TA3/<Ordner>/**
2. entzippen von **angular-workshop-app.zip**
3. Ordner im **VS Code** öffnen **/angular-workshop-app**
4.  Terminal öffnen und im Pfad des Ordners **npm install** ausführen
5. **ng serve** ausführen -> angular projekt startet
6. im Browser **http://localhost:4200**


**Fertig für morgen**
**Bei Fragen einfach bei mir melden**