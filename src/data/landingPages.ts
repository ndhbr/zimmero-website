export interface LandingPage {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  problemTitle: string;
  problem: string[];
  steps: { title: string; text: string }[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  sections: { title: string; paragraphs: string[] }[];
  requirements: string[];
  limitations: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  sources?: { label: string; url: string }[];
}

export const landingPages: LandingPage[] = [
  {
    slug: 'meldeschein-software',
    title: 'Digitaler Meldeschein für Hotels | Zimmero',
    description: 'Meldescheine aus Buchungsdaten erstellen, Pflichtangaben prüfen, elektronisch übermitteln und den Status direkt am Aufenthalt verfolgen.',
    eyebrow: 'Meldeschein Software für Hotels',
    heading: 'Meldescheine bearbeiten, ohne Gästedaten doppelt einzutragen.',
    intro: [
      'An der Rezeption liegen Name, Anschrift und Reisedaten meist schon in der Buchung vor. Trotzdem werden Meldescheine in vielen Betrieben noch einmal getrennt ausgefüllt, geprüft und abgelegt.',
      'Zimmero verbindet den Meldeschein mit Buchung und Aufenthalt. Fehlende Pflichtangaben werden sichtbar, die Übermittlung lässt sich nachvollziehen und Änderungen bleiben am richtigen Vorgang.',
    ],
    benefits: [
      { title: 'Daten weiterverwenden', text: 'Angaben aus Buchung, Gast und Online Check-in stehen für den Meldeschein bereit.' },
      { title: 'Fehlendes früh erkennen', text: 'Zimmero zeigt vor der Meldung, welche erforderlichen Angaben noch fehlen.' },
      { title: 'Status nachvollziehen', text: 'Übermittlung, Änderung und Stornierung bleiben je Meldung sichtbar.' },
    ],
    problemTitle: 'Der Meldeschein ist kein loses Formular neben der Buchung.',
    problem: [
      'Wenn ein Gast anreist, laufen mehrere Dinge gleichzeitig. Das Zimmer wird geprüft, ein Schlüssel vorbereitet, offene Leistungen werden besprochen und vielleicht wartet schon der nächste Gast. Muss die Rezeption in diesem Moment Stammdaten aus der Buchung in ein zweites Programm übertragen, entstehen Tippfehler und Rückfragen. Besonders auffällig wird das bei Anschrift, Staatsangehörigkeit oder den Angaben zu Mitreisenden.',
      'Das Bundesmeldegesetz regelt besondere Meldescheine für Beherbergungsstätten. Die bundesrechtliche Pflicht betrifft nicht pauschal jeden Gast. Für beherbergte ausländische Personen gelten besondere Vorgaben, und Landesrecht kann weitere Daten für Fremdenverkehrsbeiträge und Kurbeiträge vorsehen. Welche Angaben Ihr Betrieb im Einzelfall benötigt, hängt deshalb auch vom Standort und dem verwendeten Meldeverfahren ab.',
      'Für den Hotelalltag zählt eine einfache Trennung: Die Behörde und die örtlichen Vorgaben bestimmen, was zu melden ist. Die Software sorgt dafür, dass die dafür benötigten Daten geordnet am Aufenthalt vorliegen und der Bearbeitungsstand nicht auf einem Zettel neben dem Bildschirm endet.',
    ],
    steps: [
      { title: 'Buchung und Aufenthalt öffnen', text: 'Der Meldeschein gehört in Zimmero zum betreffenden Aufenthalt. Reisedaten, Zimmer und bereits erfasste Gastdaten müssen deshalb nicht erneut zusammengesucht werden.' },
      { title: 'Pflichtangaben prüfen', text: 'Vor der Meldung zeigt Zimmero fehlende Angaben. Die Rezeption sieht dadurch konkret, was beim Gast noch erfragt oder im Datensatz ergänzt werden muss.' },
      { title: 'Angaben bestätigen und unterschreiben', text: 'Der Meldeschein unterstützt die erforderliche Unterschrift. Welche Form im konkreten Verfahren zulässig ist, richtet sich nach den geltenden Vorgaben.' },
      { title: 'Elektronisch übermitteln', text: 'Die Meldung wird aus Zimmero elektronisch an das für den Betrieb konfigurierte Verfahren übergeben. Ein bloßer Ausdruck ist nicht der einzige mögliche Endpunkt.' },
      { title: 'Status und Änderungen verfolgen', text: 'Zimmero zeigt den Status je Meldung. Muss ein Vorgang geändert oder storniert werden, bleibt er mit der Buchung verbunden und kann gezielt bearbeitet werden.' },
    ],
    image: '/assets/meldescheine.webp',
    imageAlt: 'Zimmero zeigt den Meldeschein einer Hotelbuchung mit fehlenden Pflichtangaben und Übermittlungsstatus',
    imageCaption: 'Der Meldeschein liegt direkt an der Buchung. Fehlende Angaben werden vor der Übermittlung genannt.',
    sections: [
      {
        title: 'Gästedaten können schon vor der Anreise vollständig werden.',
        paragraphs: [
          'Zimmero sendet drei Tage vor der Anreise automatisch eine Nachricht zum Gästeportal. Bei kurzfristig bestätigten Buchungen wird sie sofort versendet. Dort meldet sich der Gast mit Buchungsnummer und Nachname an und kann die Daten aller mitreisenden Personen erfassen. Die Informationen stehen danach an der Rezeption bereit.',
          'Das nimmt der Rezeption nicht jede Prüfung ab. Es verschiebt aber einen Teil der Datenerfassung in eine ruhige Phase vor der Ankunft. Beim Check-in geht es dann eher um fehlende Angaben und die notwendige Bestätigung als um das Abschreiben einer vollständigen Adresse.',
        ],
      },
      {
        title: 'Der Status gehört zum Vorgang, nicht ins Gedächtnis.',
        paragraphs: [
          'Ein Meldeschein kann unvollständig, übermittelt, geändert oder storniert sein. Wird dieser Stand getrennt von der Buchung geführt, muss das Team bei Rückfragen erst herausfinden, welcher Ausdruck oder welche Datei zuletzt gültig war. Zimmero hält den Meldestatus am Aufenthalt und protokolliert die Bearbeitung.',
          'Das hilft auch bei Schichtwechseln. Die nächste Person an der Rezeption sieht, welche Daten fehlen und ob eine Meldung bereits bearbeitet wurde. Sie muss sich nicht auf eine mündliche Übergabe verlassen.',
        ],
      },
      {
        title: 'Örtliche Regeln müssen zum Haus passen.',
        paragraphs: [
          'Meldeverfahren und zusätzliche Angaben unterscheiden sich nach Standort. Zimmero sieht deshalb eine ortsspezifische Konfiguration und eigene Stornogründe vor. Bei mehreren Häusern muss nicht jedes Haus dieselben Regeln verwenden.',
          'Vor dem Start wird geklärt, welches Verfahren Ihr Haus nutzt und welche Angaben dort erwartet werden. Das ist Teil einer sauberen Einrichtung. Eine allgemeine Einstellung für alle Gemeinden wäre einfacher, aber im Betrieb unzuverlässig.',
        ],
      },
    ],
    requirements: [
      'Das Haus und das örtlich verwendete Meldeverfahren müssen vor dem Start passend eingerichtet sein.',
      'Gastdaten, Reisedaten und erforderliche Angaben müssen vollständig vorliegen. Zimmero macht fehlende Felder sichtbar, kann sie aber nicht selbst erfinden.',
      'Mitarbeiter müssen Identitätsdokumente und Bestätigungen so prüfen, wie es für den jeweiligen Gast und das gewählte Verfahren vorgeschrieben ist.',
    ],
    limitations: [
      'Zimmero ersetzt keine rechtliche Prüfung, für welche Gäste eine Meldepflicht besteht und welche örtlichen Zusatzangaben verlangt werden.',
      'Das Gästeportal erfasst Daten vor der Anreise. Schlüsselausgabe und Vorabzahlung gehören derzeit nicht zu diesem Ablauf.',
      'Eine elektronische Meldung ist nur sinnvoll, wenn das für den Betrieb benötigte Verfahren eingerichtet und erreichbar ist.',
    ],
    faqs: [
      { q: 'Muss in Deutschland jeder Hotelgast einen Meldeschein ausfüllen?', a: 'Nein. Die bundesrechtliche besondere Meldepflicht gilt nicht pauschal für alle Gäste. Für beherbergte ausländische Personen bestehen Vorgaben nach dem Bundesmeldegesetz. Zusätzlich können örtliche Regelungen weitere Angaben vorsehen. Im Zweifel sollte der Betrieb die zuständige Stelle fragen.' },
      { q: 'Übernimmt Zimmero Daten aus der Buchung?', a: 'Ja. Der Meldeschein ist mit Buchung und Aufenthalt verbunden. Vorhandene Gastdaten und die Anschrift des Hauptgasts können übernommen werden. Fehlende Pflichtangaben werden vor der Meldung angezeigt.' },
      { q: 'Können Gäste ihre Daten vor der Anreise selbst eingeben?', a: 'Ja. Im Gästeportal können sie die Daten aller Mitreisenden erfassen. Die Nachricht wird normalerweise drei Tage vor Anreise verschickt, bei kurzfristigen Buchungen sofort.' },
      { q: 'Kann eine Meldung geändert oder storniert werden?', a: 'Ja. Zimmero unterstützt Änderungen, Stornierung und eine Statusverfolgung je Meldung. Die verfügbaren Gründe werden passend zum Ort konfiguriert.' },
      { q: 'Ersetzt Zimmero nur ein gedrucktes Formular?', a: 'Nein. Zimmero unterstützt die elektronische Übermittlung und zeigt den Meldestatus am Aufenthalt. Ein Ausdruck ist zusätzlich möglich, aber nicht der einzige Zweck der Funktion.' },
    ],
    related: ['kurtaxe-ortstaxe-software', 'online-check-in-hotel', 'hotelsoftware-bayern'],
    sources: [
      { label: 'Bundesmeldegesetz, Paragraf 29', url: 'https://www.gesetze-im-internet.de/bmg/__29.html' },
      { label: 'Bundesmeldegesetz, Paragraf 30', url: 'https://www.gesetze-im-internet.de/bmg/__30.html' },
    ],
  },
  {
    slug: 'kurtaxe-ortstaxe-software',
    title: 'Kurtaxe und Ortstaxe abrechnen | Zimmero',
    description: 'Kurtaxe nach Haus, Gästeklasse, Alter und Gültigkeitszeitraum berechnen und automatisch auf die Hotelrechnung übernehmen.',
    eyebrow: 'Kurtaxe Software für Hotels',
    heading: 'Kurtaxe berechnen, ohne jede Ausnahme von Hand nachzuschlagen.',
    intro: [
      'Kurbeitrag und Ortstaxe wirken auf den ersten Blick wie eine kleine zusätzliche Rechnungsposition. Im Alltag hängen sie aber von Gemeinde, Reisezeit, Alter und Gästeklasse ab.',
      'Zimmero bildet die Regeln je Haus ab. Der passende Betrag wird für den Aufenthalt berechnet und auf die Rechnung übernommen, ohne dass die Rezeption bei jeder Abreise neu rechnen muss.',
    ],
    benefits: [
      { title: 'Regeln je Haus', text: 'Jedes Haus verwendet die Satzung und Gästeklassen seines Standorts.' },
      { title: 'Alter berücksichtigen', text: 'Kinderaltersstufen und Gästeklassen fließen in die Berechnung ein.' },
      { title: 'Rechnung vorbereiten', text: 'Der berechnete Betrag wird automatisch auf die Rechnung übernommen.' },
    ],
    problemTitle: 'Eine kleine Abgabe erzeugt viele kleine Fehlerquellen.',
    problem: [
      'In Kurorten reicht die Frage nach der Zahl der Nächte selten aus. Kinder können je nach Alter frei oder ermäßigt sein. Für bestimmte Gästeklassen gelten andere Beträge. Eine Satzungsänderung kann mitten im Jahr wirksam werden. Bei mehreren Häusern in verschiedenen Orten kommen unterschiedliche Regeln zusammen.',
      'Wird der Betrag erst beim Check-out mit einer Tabelle oder einem Taschenrechner ermittelt, entsteht Zeitdruck. Ein falsches Geburtsdatum, eine veraltete Altersgrenze oder der falsche Gültigkeitszeitraum reichen für eine Abweichung. Bei Familien und längeren Aufenthalten fällt das besonders auf.',
      'Zimmero trennt die fachliche Vorgabe von der täglichen Anwendung. Der Betrieb hinterlegt die bestätigten Regeln. Danach greift die Rezeption auf eine Berechnung zurück, die Aufenthalt, Gästeklasse und Alter gemeinsam betrachtet.',
    ],
    steps: [
      { title: 'Regelwerk je Haus einrichten', text: 'Für jedes Haus werden die am Standort geltenden Regeln hinterlegt. Betriebe mit mehreren Standorten können dadurch unterschiedliche Gemeinden sauber trennen.' },
      { title: 'Gästeklassen festlegen', text: 'Die benötigten Klassen und Ermäßigungen werden passend zum Betrieb abgebildet. Entscheidend ist die örtliche Satzung, nicht eine allgemeine Vorlage.' },
      { title: 'Kinderaltersstufen erfassen', text: 'Altersgrenzen werden im Regelwerk hinterlegt. Bei der Berechnung verwendet Zimmero die zum Aufenthalt passenden Angaben der Gäste.' },
      { title: 'Gültigkeitszeiträume pflegen', text: 'Neue Beträge erhalten einen Gültigkeitszeitraum. Zimmero prüft, dass sich Regeln nicht unbeabsichtigt überschneiden.' },
      { title: 'Betrag auf die Rechnung übernehmen', text: 'Für den Aufenthalt berechnete Kurbeiträge oder Ortstaxen werden automatisch als Rechnungsposition berücksichtigt.' },
    ],
    image: '/assets/rechnungen.webp',
    imageAlt: 'Rechnungsansicht in Zimmero mit Positionen und Vorschau für einen Hotelaufenthalt',
    imageCaption: 'Zimmero verbindet Aufenthaltsdaten und Rechnungspositionen. Berechnete Abgaben landen dadurch am richtigen Vorgang.',
    sections: [
      {
        title: 'Stichtage sind wichtiger als eine einzige aktuelle Zahl.',
        paragraphs: [
          'Ändert eine Gemeinde den Beitrag zum Jahreswechsel oder zu einem anderen Stichtag, darf die neue Regel nicht rückwirkend auf alte Aufenthalte angewendet werden. Zimmero führt Regeln deshalb mit Gültigkeitszeiträumen. So bleibt erkennbar, welche Fassung für welchen Zeitraum gedacht ist.',
          'Eine Prüfung auf Überschneidungen verhindert, dass zwei Regelwerke versehentlich gleichzeitig gelten. Das löst keine unklare Satzung, macht aber einen typischen Konfigurationsfehler sichtbar, bevor er viele Rechnungen betrifft.',
        ],
      },
      {
        title: 'Gästeklassen brauchen verständliche Daten.',
        paragraphs: [
          'Eine Berechnung kann nur so richtig sein wie die Angaben, auf denen sie beruht. Geburtsdatum, Anreise, Abreise und die zutreffende Gästeklasse müssen daher am Aufenthalt gepflegt sein. Fehlt eine Angabe, sollte die Rezeption nicht stillschweigend irgendeinen Betrag annehmen.',
          'Das Gästeportal kann Daten der mitreisenden Personen schon vor der Anreise erfassen. Dadurch stehen Altersangaben früher bereit. Die Entscheidung über Ermäßigung oder Befreiung richtet sich trotzdem nach den bestätigten Regeln des Hauses.',
        ],
      },
      {
        title: 'Mehrere Häuser bleiben getrennt abrechenbar.',
        paragraphs: [
          'Ein Betrieb mit Häusern in zwei Gemeinden braucht zwei Regelwerke. Zimmero verwaltet mehrere Häuser in einer Organisation und ordnet Rechte sowie Stammdaten je Haus zu. Die Berechnung verwendet das Regelwerk des Hauses, in dem der Aufenthalt stattfindet.',
          'Das ist auch dann wichtig, wenn eine Rezeption mehrere Betriebe betreut. Mitarbeiter sehen einen gemeinsamen Arbeitsbereich, ohne dass die örtlichen Vorgaben zu einem unübersichtlichen Mischsystem werden.',
        ],
      },
    ],
    requirements: [
      'Die aktuell gültige Satzung und alle für die Berechnung notwendigen Gästeklassen müssen bekannt sein.',
      'Gültigkeitszeiträume, Beträge und Kinderaltersstufen müssen je Haus korrekt eingerichtet werden.',
      'Die für Ermäßigung oder Befreiung benötigten Gastangaben müssen am Aufenthalt erfasst sein.',
    ],
    limitations: [
      'Zimmero legt nicht selbst fest, wer in Ihrer Gemeinde beitragspflichtig, befreit oder ermäßigt ist.',
      'Ändert sich eine Satzung, muss das neue Regelwerk mit dem richtigen Stichtag eingerichtet werden.',
      'Eine allgemeine Zusage zur Ausgabe einer digitalen Kurkarte gehört nicht zum beschriebenen Funktionsumfang.',
    ],
    faqs: [
      { q: 'Kann Zimmero unterschiedliche Regeln je Haus verwenden?', a: 'Ja. Regelwerke werden je Haus geführt. Dadurch können Häuser in verschiedenen Gemeinden unterschiedliche Gästeklassen, Beträge und Gültigkeitszeiträume verwenden.' },
      { q: 'Werden Kinderaltersstufen berücksichtigt?', a: 'Ja. Das Regelwerk kann Kinderaltersstufen abbilden. Für die Berechnung müssen die notwendigen Altersangaben der Gäste vorhanden sein.' },
      { q: 'Was passiert bei einer Satzungsänderung?', a: 'Neue Regeln werden mit einem Gültigkeitszeitraum eingerichtet. Zimmero prüft auf unbeabsichtigte Überschneidungen, damit zum Stichtag nicht zwei Fassungen gleichzeitig greifen.' },
      { q: 'Kommt die Kurtaxe automatisch auf die Rechnung?', a: 'Ja. Der anhand des Regelwerks berechnete Betrag wird auf die Rechnung übernommen und bleibt damit beim betreffenden Aufenthalt.' },
      { q: 'Entscheidet Zimmero über Befreiungen?', a: 'Nein. Die fachlichen Regeln kommen aus der örtlichen Satzung und müssen für das Haus korrekt eingerichtet sein. Zimmero wendet die hinterlegten Regeln auf die vorhandenen Gastdaten an.' },
    ],
    related: ['meldeschein-software', 'tourismusstatistik-bayern', 'hotelsoftware-bayern'],
  },
  {
    slug: 'tourismusstatistik-bayern',
    title: 'Tourismusstatistik Bayern als CSV | Zimmero',
    description: 'Monatliche Beherbergungsstatistik in Zimmero auswerten, als Bayern CSV exportieren und anschließend in IDEV hochladen.',
    eyebrow: 'Beherbergungsstatistik für Bayern',
    heading: 'Die Monatsmeldung vorbereiten, ohne Ankünfte und Nächte einzeln zu zählen.',
    intro: [
      'Für die Tourismusstatistik werden Ankünfte, Übernachtungen und Herkunftsländer aus einem abgeschlossenen Monat benötigt. Diese Angaben liegen bereits in den Aufenthalten vor.',
      'Zimmero wertet den gewählten Zeitraum aus und erstellt eine CSV-Datei für Bayern. Sie prüfen die Zahlen und laden die Datei anschließend selbst in IDEV hoch.',
    ],
    benefits: [
      { title: 'Monat auswählen', text: 'Die Auswertung fasst den gewünschten Berichtszeitraum zusammen.' },
      { title: 'Zahlen prüfen', text: 'Ankünfte, Übernachtungen und weitere Kennzahlen sind vor dem Export sichtbar.' },
      { title: 'CSV hochladen', text: 'Zimmero erzeugt die Datei für den anschließenden Upload in IDEV.' },
    ],
    problemTitle: 'Die Monatsmeldung kommt immer dann, wenn der nächste Monat schon läuft.',
    problem: [
      'Am Monatsanfang sind die letzten Abreisen noch frisch, gleichzeitig laufen neue Anreisen, Rechnungen und Dienstpläne weiter. Für die Statistik müssen trotzdem die Daten des vergangenen Kalendermonats abgegrenzt werden. Wer dafür Buchungen einzeln durchgeht, braucht Zeit und riskiert unterschiedliche Zählweisen.',
      'Das Beherbergungsstatistikgesetz sieht eine monatliche Erhebung vor. Grundsätzlich erfasst werden Betriebe, die mindestens zehn Gäste gleichzeitig beherbergen können. Welche Auskunftspflicht für einen konkreten Betrieb besteht und ob eine Ausnahme greift, ergibt sich aus der Heranziehung und den gesetzlichen Vorgaben.',
      'Zimmero ersetzt diesen Bescheid nicht. Die Software hilft bei dem praktischen Teil: Aufenthaltsdaten eines Monats werden ausgewertet und in eine Datei gebracht, die für das bayerische Meldeverfahren vorbereitet ist.',
    ],
    steps: [
      { title: 'Berichtsmonat wählen', text: 'In der Statistik wird der Zeitraum des vergangenen Monats ausgewählt. Bei mehreren Häusern können die gewünschten Betriebe berücksichtigt werden.' },
      { title: 'Kennzahlen ansehen', text: 'Zimmero zeigt unter anderem Ankünfte, Übernachtungen, belegte Zimmernächte und Auslastung für den gewählten Zeitraum.' },
      { title: 'Gastdaten auf Lücken prüfen', text: 'Herkunftsangaben können nur ausgewertet werden, wenn die entsprechenden Gastdaten vollständig und richtig erfasst wurden.' },
      { title: 'Bayern CSV exportieren', text: 'Mit dem Export erstellt Zimmero die vorbereitete CSV-Datei aus den im System vorhandenen Daten.' },
      { title: 'Datei in IDEV hochladen', text: 'Sie melden sich mit den Zugangsdaten Ihres Betriebs bei IDEV an und laden die Datei dort hoch. Die Übermittlung erfolgt nicht automatisch im Hintergrund.' },
    ],
    image: '/assets/statistiken.webp',
    imageAlt: 'Zimmero Statistik mit Ankünften, Übernachtungen, Auslastung und Schaltfläche für den Bayern CSV Export',
    imageCaption: 'Die Monatszahlen lassen sich vor dem Export prüfen. Oben rechts wird die Bayern CSV erstellt.',
    sections: [
      {
        title: 'Die Auswertung beginnt bei sauber geführten Aufenthalten.',
        paragraphs: [
          'Ankünfte und Übernachtungen entstehen nicht erst beim Export. Sie ergeben sich aus den Aufenthalten, die während des Monats in Zimmero geführt wurden. Korrekte Anreise, Abreise und Gastzuordnung sind deshalb die Grundlage für eine belastbare Auswertung.',
          'Bei ausländischen Gästen spielt das Herkunftsland eine zusätzliche Rolle. Zimmero bietet eine Herkunftsländerauswertung. Fehlende oder falsch erfasste Länder kann der Export jedoch nicht selbst ergänzen. Eine kurze Plausibilitätsprüfung vor dem Hochladen bleibt sinnvoll.',
        ],
      },
      {
        title: 'IDEV bleibt der letzte Schritt.',
        paragraphs: [
          'Das Bayerische Landesamt für Statistik nennt IDEV und eSTATISTIK.core als elektronische Meldewege. Zimmero erzeugt eine CSV-Datei für das Hochladen in IDEV. Der Betrieb behält dadurch die Kontrolle darüber, welche Datei für welchen Zeitraum übermittelt wird.',
          'Für IDEV benötigen Sie die vom Landesamt vergebenen Zugangsdaten. Zimmero verwaltet diese Anmeldung nicht und sendet die Monatsmeldung nicht selbst ab. Diese klare Trennung verhindert, dass eine Datei unbemerkt mit einem falschen Zeitraum übertragen wird.',
        ],
      },
      {
        title: 'Kennzahlen helfen auch außerhalb der Pflichtmeldung.',
        paragraphs: [
          'In derselben Statistikansicht stehen Auslastung, Durchschnittsrate und Ertrag je verfügbarem Zimmer bereit. Diese Werte gehören nicht alle zwingend in dieselbe Behördenmeldung, helfen aber bei der betrieblichen Einordnung des Monats.',
          'Ein Hotel kann so vor dem Export sehen, ob Ankünfte und Übernachtungen zum Verlauf des Monats passen. Auffällige Werte lassen sich prüfen, bevor die CSV erstellt wird. Die Statistik dient damit nicht nur dem Dateiexport, sondern auch als Kontrollblick auf den Betrieb.',
        ],
      },
    ],
    requirements: [
      'Der Betrieb benötigt seine gültigen Zugangsdaten für das bayerische IDEV Verfahren.',
      'Aufenthalte, Gäste und Herkunftsländer müssen im Berichtsmonat vollständig und richtig erfasst sein.',
      'Vor dem Upload sollte geprüft werden, ob Zeitraum, Hausauswahl und Werte zur angeforderten Meldung passen.',
    ],
    limitations: [
      'Zimmero erzeugt die CSV, übermittelt sie aber nicht automatisch an das Landesamt.',
      'Der beschriebene Export ist für die bayerische Tourismusstatistik vorgesehen und keine allgemeine Datei für jedes Bundesland.',
      'Ob Ihr Betrieb auskunftspflichtig ist oder eine Ausnahme nutzen kann, entscheidet nicht Zimmero.',
    ],
    faqs: [
      { q: 'Sendet Zimmero die Monatsmeldung automatisch an IDEV?', a: 'Nein. Zimmero erstellt die Bayern CSV. Sie melden sich selbst bei IDEV an, prüfen den ausgewählten Berichtsmonat und laden die Datei hoch.' },
      { q: 'Welche Zahlen zeigt die Statistik vor dem Export?', a: 'Die Ansicht umfasst unter anderem Ankünfte, Übernachtungen, belegte Zimmernächte, Auslastung, durchschnittliche Aufenthaltsdauer und betriebliche Kennzahlen wie ADR und RevPAR.' },
      { q: 'Funktioniert der Export auch für andere Bundesländer?', a: 'Der bestätigte Funktionsumfang ist ein CSV Export für die bayerische Tourismusstatistik. Für andere Bundesländer wird auf dieser Seite keine Zusage gemacht.' },
      { q: 'Brauche ich weiterhin IDEV Zugangsdaten?', a: 'Ja. Die Datei wird von Ihnen in IDEV hochgeladen. Benutzerkennung und Passwort erhalten auskunftspflichtige Betriebe vom Bayerischen Landesamt für Statistik.' },
      { q: 'Was passiert bei fehlenden Herkunftsländern?', a: 'Der Export kann nur die in Zimmero vorhandenen Daten auswerten. Fehlende Angaben sollten vor dem Erstellen der CSV am Gastdatensatz geprüft und ergänzt werden.' },
    ],
    related: ['hotelsoftware-bayern', 'meldeschein-software', 'kurtaxe-ortstaxe-software'],
    sources: [
      { label: 'Bayerisches Landesamt für Statistik, Tourismus', url: 'https://www.statistik.bayern.de/service/erhebungen/wirtschaft_handel/tourismus/index.html' },
      { label: 'Beherbergungsstatistikgesetz', url: 'https://www.gesetze-im-internet.de/beherbstatg_2003/BJNR164200002.html' },
    ],
  },
  {
    slug: 'hotelsoftware-bayern',
    title: 'Hotelsoftware aus Bayern | Zimmero',
    description: 'Hotelsoftware für inhabergeführte Betriebe in Bayern mit Meldeschein, Kurtaxe, Tourismusstatistik und direktem Ansprechpartner.',
    eyebrow: 'Hotelsoftware Bayern',
    heading: 'Hotelsoftware für bayerische Betriebe, die regionale Abläufe mitdenken muss.',
    intro: [
      'Ein Hotel in Bayern braucht mehr als Zimmerplan und Rechnungen. In Kurorten kommen Kurtaxe, Meldeschein und die monatliche Tourismusstatistik zum täglichen Betrieb hinzu.',
      'Zimmero wird in Bad Gögging entwickelt und im Austausch mit inhabergeführten Hotelbetrieben eingesetzt. Sie sprechen bei Einrichtung, Fragen und Weiterentwicklung direkt mit Andreas Huber.',
    ],
    benefits: [
      { title: 'Bayerische Abläufe', text: 'Meldeschein, Kurbeitrag und Bayern CSV gehören zum bestätigten Funktionsumfang.' },
      { title: 'Direkter Kontakt', text: 'Fragen landen beim Entwickler und nicht in einem anonymen Callcenter.' },
      { title: 'Kurze Einführung', text: 'Einrichtung, Datenübernahme und Schulung führen in zwei bis drei Wochen zum Start, sofern keine Sonderintegration nötig ist.' },
    ],
    problemTitle: 'Allgemeine Hotelsoftware endet oft dort, wo regionale Arbeit beginnt.',
    problem: [
      'Zimmer verkaufen, Gäste einchecken und Rechnungen schreiben kann fast jedes Hotelprogramm. Im Alltag eines bayerischen Kurhotels oder einer Pension liegen die zeitraubenden Fragen häufig daneben. Welche Gästeklasse gilt für den Kurbeitrag? Sind alle Angaben für den Meldeschein vorhanden? Wie kommen die Monatszahlen in die Datei für das Landesamt?',
      'Wenn für diese Aufgaben zusätzliche Tabellen und Einzelprogramme nötig sind, verteilt sich ein Aufenthalt auf mehrere Arbeitsorte. Die Rezeption überträgt Daten, vergleicht Zahlen und muss bei Änderungen überlegen, welches System den aktuellen Stand enthält.',
      'Zimmero führt die betrieblichen und regionalen Abläufe am Aufenthalt zusammen. Das macht aus der Software keine Rechtsberatung. Es reduziert aber die Stellen, an denen dieselben Gäste, Daten und Beträge mehrfach gepflegt werden.',
    ],
    steps: [
      { title: 'Betrieb im Erstgespräch erfassen', text: 'Besprochen werden Häuser, Einheiten, bisheriges Programm und regionale Abläufe. Dazu gehören auch vorhandene Schnittstellen und besondere Anforderungen des Standorts.' },
      { title: 'Häuser und Regeln einrichten', text: 'Zimmertypen, Zimmer, Preise und Rechte werden angelegt. Bei Bedarf kommen ortsspezifische Meldescheinregeln sowie Kurtaxe mit Gästeklassen und Gültigkeitszeiträumen hinzu.' },
      { title: 'Bestandsdaten übernehmen', text: 'Gäste und Buchungen werden aus dem bisherigen Programm übernommen. Erprobt ist dieser Schritt mit HS3 und Pensionsprogramm. Die Übernahme ist derzeit kostenlos.' },
      { title: 'Team einen halben Tag schulen', text: 'Die Schulung konzentriert sich auf die Abläufe, die Rezeption und Betrieb tatsächlich brauchen. Im aktuellen Aktionsangebot ist sie enthalten.' },
      { title: 'Mit direkter Begleitung starten', text: 'Beim Wechsel in den laufenden Betrieb bleibt Andreas Huber Ansprechpartner. Ohne Sonderintegration dauert der Weg vom Erstgespräch bis zum Start normalerweise zwei bis drei Wochen.' },
    ],
    image: '/assets/zimmerplan.webp',
    imageAlt: 'Zimmerplan der Zimmero Hotelsoftware mit Buchungen, Aufenthalten und gesperrten Zimmern',
    imageCaption: 'Der Zimmerplan zeigt den laufenden Betrieb. Von dort führen die Wege zu Buchung, Gast, Rechnung und weiteren Aufgaben.',
    sections: [
      {
        title: 'Meldeschein und Kurbeitrag gehören zur Buchung.',
        paragraphs: [
          'Zimmero verbindet Meldescheine mit dem jeweiligen Aufenthalt. Vor der elektronischen Übermittlung zeigt das System fehlende Pflichtangaben. Status, Änderung und Stornierung bleiben nachvollziehbar. Die ortsspezifische Konfiguration berücksichtigt, dass nicht jede Gemeinde denselben Ablauf verwendet.',
          'Für Kurtaxe und Ortstaxe werden Regelwerke je Haus geführt. Gästeklassen, Kinderaltersstufen und Stichtage lassen sich abbilden. Der berechnete Betrag wird automatisch auf die Rechnung übernommen. Ändert sich die Satzung, erhält die neue Fassung einen eigenen Gültigkeitszeitraum.',
        ],
      },
      {
        title: 'Die bayerische Monatsmeldung beginnt in der Statistik.',
        paragraphs: [
          'Zimmero wertet Ankünfte, Übernachtungen und Herkunftsländer aus den vorhandenen Aufenthalten aus. Für die bayerische Tourismusstatistik wird eine CSV-Datei erstellt. Der Betrieb lädt sie anschließend selbst in IDEV hoch.',
          'Die Übermittlung geschieht bewusst nicht unbemerkt im Hintergrund. Sie wählen Zeitraum und Häuser, prüfen die Kennzahlen und erstellen dann die Datei. Für den IDEV Zugang bleiben die vom Landesamt vergebenen Zugangsdaten erforderlich.',
        ],
      },
      {
        title: 'Persönliche Betreuung ist Teil des Produkts.',
        paragraphs: [
          'Zimmero ist ein Produkt der BavarianBits GmbH und wird von Andreas Huber entwickelt. Während der Geschäftszeiten von Montag bis Freitag zwischen 8 und 17 Uhr erreichen Interessenten und Kunden den direkten Ansprechpartner. Für Bestandskunden dient dieselbe Nummer auch als Notfallnummer.',
          'Was Kunden aus dem Hotelalltag melden, kann unmittelbar in die Weiterentwicklung einfließen. Produktneuerungen werden im System veröffentlicht. Damit ist sichtbar, dass das Programm laufend weiterarbeitet und nicht nach der Einführung stehen bleibt.',
        ],
      },
      {
        title: 'Die Daten bleiben am Betriebsstandort in Bad Gögging.',
        paragraphs: [
          'Zimmero wird selbst im Betrieb in Bad Gögging gehostet. Die Übertragung zwischen Browser und Anwendung ist verschlüsselt. Gespiegelte Festplatten und nächtliche Sicherungen mit 30 Tagen Aufbewahrung schützen vor technischen Ausfällen und versehentlichem Datenverlust.',
          'Ein Auftragsverarbeitungsvertrag ist auf Anfrage erhältlich. Auch ein vollständiger CSV Export kann angefordert werden. Der Vertrag ist monatlich kündbar und endet jeweils zum 1. eines Monats.',
        ],
      },
    ],
    requirements: [
      'Zimmero läuft im Webbrowser. Für den täglichen Zugriff ist deshalb eine verlässliche Internetverbindung nötig.',
      'Örtliche Regeln für Meldeschein und Kurbeitrag müssen beim Start mit den tatsächlichen Vorgaben des Hauses abgeglichen werden.',
      'Für Sonderintegrationen muss vor der Einführung geklärt werden, welche Systeme und Daten beteiligt sind.',
    ],
    limitations: [
      'Zimmero ersetzt keine Rechtsberatung zu kommunalen Satzungen, Meldepflichten oder steuerlichen Fragen.',
      'Für große internationale Ketten mit zentral vorgeschriebenen Konzernsystemen ist die auf inhabergeführte Betriebe ausgerichtete Einführung möglicherweise nicht passend.',
      'Eine Einführung mit Sonderintegrationen kann länger dauern als die üblichen zwei bis drei Wochen.',
    ],
    faqs: [
      { q: 'Wo wird Zimmero entwickelt und betrieben?', a: 'Zimmero wird von der BavarianBits GmbH in Bad Gögging entwickelt und dort selbst gehostet. Gespiegelte Festplatten und nächtliche Sicherungen mit 30 Tagen Aufbewahrung gehören zum Betrieb.' },
      { q: 'Unterstützt Zimmero die bayerische Tourismusstatistik?', a: 'Ja. Zimmero erstellt aus den vorhandenen Aufenthaltsdaten eine Bayern CSV. Der Betrieb prüft die Datei und lädt sie anschließend selbst in IDEV hoch.' },
      { q: 'Kann Zimmero unterschiedliche Kurtaxen je Haus berechnen?', a: 'Ja. Regelwerke werden je Haus mit Gästeklassen, Kinderaltersstufen und Gültigkeitszeiträumen eingerichtet. Der berechnete Betrag kommt automatisch auf die Rechnung.' },
      { q: 'Wie lange dauert die Einführung?', a: 'Ohne Sonderintegrationen dauert es vom Erstgespräch bis zum Start normalerweise zwei bis drei Wochen. Einrichtung, halbtägige Schulung und derzeit auch die Datenübernahme sind im Aktionsangebot enthalten.' },
      { q: 'Wer hilft bei Fragen?', a: 'Sie sprechen direkt mit Andreas Huber. Die reguläre Erreichbarkeit ist Montag bis Freitag von 8 bis 17 Uhr. Für Bestandskunden ist die Telefonnummer zugleich die Notfallnummer.' },
    ],
    related: ['meldeschein-software', 'kurtaxe-ortstaxe-software', 'tourismusstatistik-bayern'],
  },
  {
    slug: 'channel-manager-booking-com',
    title: 'Channel Manager für Booking.com | Zimmero',
    description: 'Booking.com mit Zimmero verbinden und Verfügbarkeiten, Preise, Einschränkungen sowie Reservierungen automatisch abgleichen.',
    eyebrow: 'Channel Manager für kleine Hotels',
    heading: 'Booking.com anbinden, ohne den Zimmerplan doppelt zu pflegen.',
    intro: [
      'Eine Portalbuchung darf nicht erst per E-Mail gesucht und anschließend von Hand in den Zimmerplan übertragen werden. Gleichzeitig müssen neue Belegungen zurück an das Portal gelangen.',
      'Der Zimmero Channel Manager verbindet Booking.com in beide Richtungen. Mehr als 50 weitere Portale sind über ein Zusatzmodul erreichbar.',
    ],
    benefits: [
      { title: 'Bestand hinaus', text: 'Verfügbarkeiten werden aus Zimmero an das angebundene Portal übertragen.' },
      { title: 'Buchung herein', text: 'Portalreservierungen kommen automatisch als Buchung in Zimmero an.' },
      { title: 'Preis nach Nutzung', text: 'Es gibt keine monatliche Grundgebühr. Berechnet werden 1,50 Euro je Portalbuchung.' },
    ],
    problemTitle: 'Ein freies Zimmer darf nicht gleichzeitig auf zwei Wegen verkauft werden.',
    problem: [
      'Ohne laufenden Abgleich entsteht zwischen Hotelprogramm und Buchungsportal eine gefährliche Lücke. Eine telefonische Buchung blockiert ein Zimmer im Haus, das Portal kennt diese Belegung aber noch nicht. Umgekehrt landet eine Portalreservierung im E-Mail-Postfach, während die Rezeption mit einer Anreise beschäftigt ist.',
      'Manuelle Pflege funktioniert nur, solange wenig passiert und jeder Schritt sofort erledigt wird. Schon ein Schichtwechsel, eine verspätete Nachricht oder ein falsch zugeordnetes Zimmer kann zu einer Doppelbelegung führen. Dazu kommen Preise, Mindestaufenthalte, Anreisesperren und Verkaufsstopps, die nicht nur im Kalender stehen.',
      'Der Channel Manager macht Zimmero zum führenden Arbeitsort für Verfügbarkeit und Buchungen. Die Verbindung überträgt nicht wahllos alles, sondern ordnet Zimmertypen, Ratenpläne und Regeln zwischen den beteiligten Systemen zu.',
    ],
    steps: [
      { title: 'Portalverbindung einrichten', text: 'Booking.com wird mit Zimmero verbunden. Für weitere Portale steht die Anbindung über Channex als Zusatzmodul bereit.' },
      { title: 'Zimmertypen und Raten zuordnen', text: 'Zimmertypen, Ratenpläne, Steuern und Hausrichtlinien werden zwischen Zimmero und dem Portal abgeglichen. Die Zuordnung muss vor dem laufenden Verkauf stimmen.' },
      { title: 'Preise und Einschränkungen senden', text: 'Verfügbarkeit, Preise und Verkaufsbeschränkungen werden automatisch hinaus übertragen. Dazu gehören Mindestaufenthalte, Anreise- und Abreisesperren sowie Verkaufsstopps.' },
      { title: 'Reservierungen automatisch empfangen', text: 'Neue Portalbuchungen kommen über eine direkte Benachrichtigung in Zimmero an. Eine zusätzliche regelmäßige Absicherung prüft, ob Reservierungen vollständig eingegangen sind.' },
      { title: 'Übertragungen kontrollieren', text: 'Versuche werden protokolliert und bei Bedarf wiederholt. So bleibt erkennbar, wenn ein Portal eine Änderung nicht sofort angenommen hat.' },
    ],
    image: '/assets/buchungsuebersicht.webp',
    imageAlt: 'Zimmero Buchungsübersicht mit Reservierungen und Aufenthalten eines Hotels',
    imageCaption: 'Portalreservierungen landen im selben Buchungsbereich wie direkte und telefonische Buchungen.',
    sections: [
      {
        title: 'Zwei Wege bedeuten mehr als den Eingang einer E-Mail.',
        paragraphs: [
          'Eine echte Zwei-Wege-Anbindung überträgt nicht nur Reservierungen vom Portal ins Hotelprogramm. Sie meldet auch verfügbare Zimmer, Preise und Einschränkungen zurück. Erst diese Gegenrichtung verhindert, dass der Portalbestand dauerhaft neben dem tatsächlichen Zimmerplan herläuft.',
          'Zimmero verarbeitet Portalreservierungen automatisch und aktualisiert die Verfügbarkeit. Für die Rezeption bleibt die Buchung ein normaler Vorgang mit Gast, Aufenthalt, Zimmer und späterer Rechnung. Niemand muss eine zweite Art von Buchung verwalten, nur weil sie über Booking.com kam.',
        ],
      },
      {
        title: 'Verkaufsregeln müssen am richtigen Datum ankommen.',
        paragraphs: [
          'Ein Preis allein reicht im Portalverkauf nicht. Ein Hotel kann für bestimmte Tage einen Mindestaufenthalt verlangen, Anreisen sperren oder den Verkauf stoppen. Zimmero führt solche Einschränkungen bei Raten und Tagespreisen und überträgt sie über die Verbindung.',
          'Vor der Freischaltung müssen Ratenpläne und Zimmertypen sauber zugeordnet sein. Eine falsche Zuordnung lässt sich nicht durch häufigeres Synchronisieren heilen. Deshalb gehört die Prüfung der Stammdaten zur Einrichtung.',
        ],
      },
      {
        title: 'Direktbuchung und Portalbuchung bleiben zwei verschiedene Wege.',
        paragraphs: [
          'Der Channel Manager verbindet externe Buchungsportale. Die eigene Buchungsstrecke bringt Reservierungen von Ihrer Hotelwebsite direkt in Zimmero. Beide Wege verwenden denselben Bestand, haben aber ein unterschiedliches Preismodell.',
          'Für Portalbuchungen berechnet Zimmero 1,50 Euro je Buchung und keine monatliche Grundgebühr. Direktbuchungen über Ihre eigene Website kosten bei Zimmero weder Provision noch Buchungsgebühr. Gebühren des jeweiligen Portals oder anderer externer Anbieter bleiben davon unberührt.',
        ],
      },
    ],
    requirements: [
      'Zimmertypen, Ratenpläne, Steuern und Hausrichtlinien müssen in Zimmero und dem Portal eindeutig zugeordnet werden können.',
      'Das Hotel benötigt einen eigenen Vertrag und gültigen Zugang beim jeweiligen Buchungsportal.',
      'Vor der Freischaltung sollten Bestand, Preise und Einschränkungen für einen kontrollierten Zeitraum geprüft werden.',
    ],
    limitations: [
      'Booking.com ist angebunden. Für andere Portale muss vorab geprüft werden, ob sie über das Zusatzmodul erreichbar sind.',
      'Zimmero ersetzt weder den Vertrag mit dem Portal noch dessen Gebühren und Geschäftsbedingungen.',
      'Eine technische Verbindung verhindert keine falschen Preise oder Regeln, wenn die zugrunde liegenden Stammdaten falsch eingerichtet wurden.',
    ],
    faqs: [
      { q: 'Ist Booking.com direkt mit Zimmero verbunden?', a: 'Ja. Verfügbarkeiten, Preise und Einschränkungen werden übertragen. Reservierungen kommen automatisch in Zimmero an und werden dem Hotelbestand zugeordnet.' },
      { q: 'Welche weiteren Portale sind möglich?', a: 'Mehr als 50 weitere Portale sind über Channex als Zusatzmodul erreichbar. Ob ein bestimmtes Portal dazugehört, sollte vor der Einrichtung geprüft werden.' },
      { q: 'Was kostet der Channel Manager?', a: 'Zimmero berechnet 1,50 Euro je Portalbuchung. Es gibt keine zusätzliche monatliche Grundgebühr. Gebühren des Portals oder anderer externer Anbieter sind nicht enthalten.' },
      { q: 'Werden Mindestaufenthalte und Verkaufsstopps übertragen?', a: 'Ja. Zimmero unterstützt Mindestaufenthalte, Höchstaufenthalte, Anreise- und Abreisesperren sowie Verkaufsstopps und überträgt die zugeordneten Einschränkungen.' },
      { q: 'Sind Direktbuchungen ebenfalls kostenpflichtig?', a: 'Nein. Buchungen über die eigene Zimmero Buchungsstrecke kosten weder Provision noch Buchungsgebühr an Zimmero.' },
    ],
    related: ['online-buchungssystem-hotelwebsite', 'hotelsoftware-pension', 'hotelsoftware-bayern'],
  },
  {
    slug: 'eigentuemerabrechnung',
    title: 'Eigentümerabrechnung für Appartements | Zimmero',
    description: 'Einheiten Eigentümern zuordnen, Provisionen und weiterberechnete Kosten erfassen und nachvollziehbare Abrechnungen erstellen.',
    eyebrow: 'Eigentümerabrechnung für Beherbergungsbetriebe',
    heading: 'Eigentümerabrechnungen aus den verwalteten Einheiten heraus erstellen.',
    intro: [
      'Aparthotels und Vermieter von Eigentümerwohnungen verkaufen nicht nur Aufenthalte. Sie müssen Erlöse, Provisionen und weiterberechnete Kosten anschließend dem richtigen Eigentümer zuordnen.',
      'Zimmero verbindet Eigentümer und Partner mit den jeweiligen Einheiten und erstellt Abrechnungen mit einzelnen Positionen. Dadurch bleibt erkennbar, wie sich ein Betrag zusammensetzt.',
    ],
    benefits: [
      { title: 'Einheit zuordnen', text: 'Eigentümer und Partner werden an den verwalteten Einheiten hinterlegt.' },
      { title: 'Modelle abbilden', text: 'Provisionen und weiterberechnete Kosten fließen in die Abrechnung ein.' },
      { title: 'Positionen zeigen', text: 'Die Eigentümerabrechnung weist einzelne Bestandteile nachvollziehbar aus.' },
    ],
    problemTitle: 'Der Gast bucht ein Appartement, der Betrieb rechnet mit einem Eigentümer ab.',
    problem: [
      'Für den Gast sieht die Buchung wie ein normaler Hotelaufenthalt aus. Hinter den Kulissen kann die Einheit jedoch einer anderen Person gehören. Der Betreiber übernimmt Vermarktung, Gästebetreuung und Abrechnung und muss später zeigen, welche Erlöse und Kosten zur Einheit gehören.',
      'Eine einfache Gesamtsumme reicht dafür selten. Provisionen können sich unterscheiden, bestimmte Kosten werden weiterberechnet und mehrere Einheiten können demselben Eigentümer gehören. Werden diese Zusammenhänge in einer separaten Tabelle geführt, müssen Buchungsdaten und Beträge regelmäßig übertragen werden.',
      'Zimmero hält die Zuordnung im selben System, in dem Einheiten und Aufenthalte verwaltet werden. Die Eigentümerabrechnung wird damit kein nachträgliches Rätsel aus Kalender, Rechnungen und handschriftlichen Ergänzungen.',
    ],
    steps: [
      { title: 'Einheiten im Betrieb anlegen', text: 'Appartements oder andere Einheiten werden wie die übrigen vermietbaren Bereiche in Zimmero geführt und erscheinen im Zimmerplan.' },
      { title: 'Eigentümer und Partner zuordnen', text: 'Für jede Einheit wird hinterlegt, welcher Eigentümer oder Partner dazugehört. Mehrere Einheiten können entsprechend organisiert werden.' },
      { title: 'Provisionen festlegen', text: 'Das für die Zusammenarbeit vereinbarte Provisionsmodell wird für die Abrechnung berücksichtigt.' },
      { title: 'Kosten weiterberechnen', text: 'Kosten, die laut Vereinbarung den Eigentümer betreffen, können als eigene Positionen in die Abrechnung aufgenommen werden.' },
      { title: 'Abrechnung mit Einzelpositionen erstellen', text: 'Zimmero erstellt eine Abrechnung, auf der die Bestandteile getrennt erscheinen. Der Eigentümer kann dadurch sehen, wie sich das Ergebnis zusammensetzt.' },
    ],
    image: '/assets/zimmerplan.webp',
    imageAlt: 'Zimmero Zimmerplan mit belegten und freien Einheiten für einen Beherbergungsbetrieb',
    imageCaption: 'Die Belegung der einzelnen Einheiten ist der betriebliche Ausgangspunkt für die spätere Eigentümerabrechnung.',
    sections: [
      {
        title: 'Die Zuordnung beginnt bei der Einheit.',
        paragraphs: [
          'Eine Eigentümerabrechnung wird nur dann verlässlich, wenn klar ist, welche Einheit zu welcher Person gehört. Zimmero führt Eigentümer und Partner deshalb an den Einheiten. Die Zuordnung muss nicht bei jeder Abrechnung erneut aus einer Liste gesucht werden.',
          'Das hilft besonders bei Häusern mit vielen Appartements oder bei einem Eigentümer mit mehreren Einheiten. Der Betrieb arbeitet weiter mit seinem gemeinsamen Zimmerplan, behält im Hintergrund aber die notwendige Trennung für die Abrechnung.',
        ],
      },
      {
        title: 'Provision und Kosten brauchen einzelne Positionen.',
        paragraphs: [
          'Eine reine Auszahlungssumme beantwortet keine Rückfrage. Eigentümer möchten nachvollziehen, welche Provision angesetzt wurde und welche Kosten weiterberechnet wurden. Zimmero führt diese Bestandteile als Einzelpositionen in der Abrechnung.',
          'Die vertragliche Grundlage entsteht nicht in der Software. Der Betrieb muss festlegen, welche Provisionen und Kosten vereinbart sind. Zimmero bildet diese Angaben für die Abrechnung ab und sorgt für eine wiederholbare Darstellung.',
        ],
      },
      {
        title: 'Hotelbetrieb und Eigentümermodell bleiben in einem Arbeitsablauf.',
        paragraphs: [
          'Gäste erwarten unabhängig vom Eigentumsmodell einen normalen Ablauf mit Buchung, Aufenthalt, Leistungen und Rechnung. Das Team an der Rezeption sollte deshalb nicht zwischen einer Hotelsoftware und einer getrennten Appartementverwaltung wechseln müssen.',
          'Zimmero verbindet mehrere Häuser, Einheiten, Buchungen und Eigentümerabrechnung in einer Organisation. Rechte können je Haus vergeben werden. So sieht jeder Mitarbeiter nur die Bereiche, die für seine Aufgabe notwendig sind.',
        ],
      },
    ],
    requirements: [
      'Einheiten, Eigentümer und Partner müssen vollständig und eindeutig zugeordnet sein.',
      'Provisionsmodelle und weiterberechnete Kosten müssen den tatsächlich vereinbarten Bedingungen entsprechen.',
      'Vor dem Versand sollte die Abrechnung auf Zeitraum, Einheiten und Einzelpositionen geprüft werden.',
    ],
    limitations: [
      'Zimmero ersetzt keine rechtliche oder steuerliche Prüfung der Vereinbarungen mit Eigentümern.',
      'Die Funktion ist eine Eigentümerabrechnung für vermietete Einheiten und keine vollständige Verwaltung nach dem Wohnungseigentumsrecht.',
      'Bankauszahlungen oder Zahlungsfreigaben werden auf dieser Seite nicht als Bestandteil zugesagt.',
    ],
    faqs: [
      { q: 'Kann ein Eigentümer mehrere Einheiten haben?', a: 'Zimmero verwaltet Eigentümer und Partner je Einheit. Dadurch lassen sich mehrere Einheiten demselben Eigentümer zuordnen und in der Organisation gemeinsam führen.' },
      { q: 'Werden Provisionen berücksichtigt?', a: 'Ja. Provisionsmodelle gehören zum bestätigten Funktionsumfang der Eigentümerabrechnung.' },
      { q: 'Kann ich Kosten an Eigentümer weiterberechnen?', a: 'Ja. Weiterberechnete Kosten können als Bestandteil der Abrechnung erfasst und als einzelne Position ausgewiesen werden.' },
      { q: 'Ersetzt Zimmero eine WEG Verwaltung?', a: 'Nein. Zimmero ist auf Beherbergungsbetriebe und die Abrechnung vermieteter Einheiten ausgerichtet. Eine vollständige Verwaltung nach dem Wohnungseigentumsrecht wird nicht zugesagt.' },
      { q: 'Für welche Betriebe ist die Funktion gedacht?', a: 'Sie passt besonders zu Aparthotels, Appartementhäusern, Chaletbetrieben und Vermarktern von Eigentümerwohnungen, die Aufenthalte und Eigentümerabrechnung zusammenführen möchten.' },
    ],
    related: ['aparthotel-software', 'hotelsoftware-bayern', 'datev-export-hotel'],
  },
  {
    slug: 'online-buchungssystem-hotelwebsite',
    title: 'Buchungssystem für Ihre Hotelwebsite | Zimmero',
    description: 'Zimmero Buchungsstrecke in die Hotelwebsite einbinden, im Hausdesign gestalten und Direktbuchungen ohne Provision empfangen.',
    eyebrow: 'Online Buchungssystem für Hotelwebsites',
    heading: 'Direktbuchungen von Ihrer Website ohne Provision an Zimmero.',
    intro: [
      'Gäste sollen auf Ihrer Hotelwebsite nicht nur eine Telefonnummer und ein Anfrageformular finden. Sie wollen Reisedaten eingeben, verfügbare Zimmertypen vergleichen und direkt buchen.',
      'Die Zimmero Buchungsstrecke lässt sich in WordPress, Jimdo und Squarespace einbetten. Die Buchung landet direkt im Backoffice und kostet bei Zimmero weder Provision noch Buchungsgebühr.',
    ],
    benefits: [
      { title: 'Im Hausdesign', text: 'Logo, Primärfarbe, Name und Beschreibung passen sich an Ihren Betrieb an.' },
      { title: 'Für ein oder mehrere Häuser', text: 'Die Suche kann einzelne Häuser oder eine gemeinsame Auswahl abbilden.' },
      { title: 'Ohne Zimmero Gebühr', text: 'Direktbuchungen bleiben ohne Provision und ohne Buchungsgebühr an Zimmero.' },
    ],
    problemTitle: 'Eine schöne Hotelwebsite endet zu oft bei der unverbindlichen Anfrage.',
    problem: [
      'Ein Gast hat Reisedatum und Zimmerwunsch bereits gewählt. Wenn die Website an diesem Punkt nur eine E-Mail-Adresse zeigt, muss der Betrieb Verfügbarkeit und Preis manuell beantworten. Bis die Antwort ankommt, hat der Gast vielleicht schon auf einem Portal gebucht.',
      'Ein provisionsbasiertes Buchungssystem löst den Medienbruch, beteiligt den Anbieter aber an jeder Direktbuchung. Das kann dazu führen, dass der eigentlich günstigste Verkaufskanal dauerhaft variable Kosten verursacht.',
      'Zimmero verbindet die eigene Hotelwebsite direkt mit den in der Betriebssoftware gepflegten Zimmertypen, Preisen und Verfügbarkeiten. Der Gast bucht selbst, und die Rezeption findet den Vorgang dort, wo auch telefonische und Portalbuchungen bearbeitet werden.',
    ],
    steps: [
      { title: 'Häuser und Zimmertypen vorbereiten', text: 'Die in Zimmero gepflegten Häuser, Zimmertypen, Belegungsvarianten und Preise bilden die Grundlage der öffentlichen Suche.' },
      { title: 'Gestaltung an das Haus anpassen', text: 'Logo, Primärfarbe, Name und Beschreibung werden passend zum Betrieb hinterlegt. Die Buchungsstrecke bleibt dadurch als Teil Ihres Angebots erkennbar.' },
      { title: 'Buchungsstrecke einbinden', text: 'Die Einbindung ist für WordPress, Jimdo und Squarespace vorgesehen. Sie kann für ein einzelnes Haus oder eine gemeinsame Suche über mehrere Häuser verwendet werden.' },
      { title: 'Gast wählt und bucht', text: 'Der Gast gibt Reisezeit und Personenzahl ein, sieht verfügbare Zimmertypen und führt die Buchung selbst durch.' },
      { title: 'Buchung im Backoffice bearbeiten', text: 'Nach der Bestätigung landet die Reservierung direkt in Zimmero. Sie wird im selben Arbeitsbereich wie andere Buchungen weiterbearbeitet.' },
    ],
    image: '/assets/online-direktbuchung.webp',
    imageAlt: 'Zimmero Buchungsstrecke auf einer Hotelwebsite mit Reisedaten, Zimmerauswahl und Preisen',
    imageCaption: 'Der Gast sieht verfügbare Zimmertypen und Preise auf der Website des Hauses. Die Reservierung landet direkt in Zimmero.',
    sections: [
      {
        title: 'Der Zimmerbestand bleibt an einer Stelle.',
        paragraphs: [
          'Die Buchungsstrecke arbeitet mit den Häusern, Zimmertypen und Preisen aus Zimmero. Damit muss die Website keinen zweiten Kalender führen. Neue Direktbuchungen landen im Backoffice und belegen den entsprechenden Bestand.',
          'Wenn zusätzlich Booking.com oder andere Portale angebunden sind, verwendet der Channel Manager denselben betrieblichen Ausgangspunkt. Die eigene Website und externe Portale sind unterschiedliche Verkaufskanäle, aber die Rezeption arbeitet mit einem gemeinsamen Zimmerplan.',
        ],
      },
      {
        title: 'Mehrere Zimmerwünsche passen zu Familien und Gruppen.',
        paragraphs: [
          'Die Buchungsstrecke kann mehrere Zimmerwünsche in einer Suche berücksichtigen. Das hilft Familien und kleinen Gruppen, die nicht alle Personen in einem einzigen Zimmer unterbringen möchten.',
          'Belegungsvarianten und Kinderaltersstufen können bei der Preisfindung eine Rolle spielen. Welche Kombinationen buchbar sind, hängt von den in Zimmero eingerichteten Zimmertypen, Preisen und Verfügbarkeiten ab.',
        ],
      },
      {
        title: 'Individuelle Websites können die öffentliche Schnittstelle nutzen.',
        paragraphs: [
          'Nicht jede Hotelwebsite entsteht in einem Baukastensystem. Für individuell entwickelte Seiten stellt Zimmero eine öffentliche Schnittstelle für Zimmertypen bereit. Ein Webentwickler kann damit eigene Darstellungen an die vorhandenen Daten anbinden.',
          'Die Schnittstelle ist kein fertiges Websiteprojekt. Gestaltung, Bedienung und technische Einbindung einer individuellen Lösung bleiben Aufgabe des umsetzenden Webentwicklers. Für WordPress, Jimdo und Squarespace ist die vorhandene Einbettung der kürzere Weg.',
        ],
      },
      {
        title: 'Null Provision bedeutet nicht null Verantwortung.',
        paragraphs: [
          'Zimmero verlangt für Direktbuchungen über die eigene Buchungsstrecke keine Provision und keine Buchungsgebühr. Der monatliche Zimmero Tarif fällt weiterhin an. Auch Kosten für Ihre Website, Zahlungsanbieter oder andere externe Dienste sind davon nicht automatisch umfasst.',
          'Preise, Bilder, Beschreibungen und Hausrichtlinien müssen im Betrieb gepflegt werden. Eine Buchungsstrecke kann nur das überzeugend anbieten, was in den zugrunde liegenden Daten vollständig und verständlich vorbereitet ist.',
        ],
      },
    ],
    requirements: [
      'Ihr Haus benötigt eine eigene Website, auf der die Buchungsstrecke eingebunden oder verlinkt werden kann.',
      'Zimmertypen, Preise, Belegungsvarianten und Verfügbarkeiten müssen in Zimmero vollständig eingerichtet sein.',
      'Für eine individuell entwickelte Einbindung der Schnittstelle wird ein Webentwickler benötigt.',
    ],
    limitations: [
      'Zimmero erstellt keine vollständige Hotelwebsite und übernimmt nicht deren laufende inhaltliche Pflege.',
      'Die Buchungsstrecke garantiert keine bestimmte Zahl zusätzlicher Direktbuchungen. Sichtbarkeit und Qualität Ihrer Website bleiben entscheidend.',
      'Vorabzahlung und digitale Schlüsselausgabe werden auf dieser Seite nicht als Bestandteil des Buchungsablaufs zugesagt.',
    ],
    faqs: [
      { q: 'Was kostet eine Direktbuchung über Zimmero?', a: 'Zimmero berechnet dafür weder Provision noch Buchungsgebühr. Der gebuchte Monatstarif und mögliche Kosten externer Dienste bleiben davon unberührt.' },
      { q: 'In welche Websites lässt sich die Buchungsstrecke einbinden?', a: 'Die Einbindung ist für WordPress, Jimdo und Squarespace vorgesehen. Für individuell entwickelte Websites steht außerdem eine öffentliche Schnittstelle für Zimmertypen bereit.' },
      { q: 'Kann die Buchungsstrecke mehrere Häuser anzeigen?', a: 'Ja. Sie kann für ein einzelnes Haus oder für mehrere Häuser gemeinsam eingerichtet werden.' },
      { q: 'Lässt sich die Gestaltung anpassen?', a: 'Ja. Logo, Primärfarbe, Name und Beschreibungstext können an das Haus angepasst werden.' },
      { q: 'Wo erscheint die neue Buchung?', a: 'Die Buchung landet direkt im Zimmero Backoffice und wird dort zusammen mit den übrigen Reservierungen bearbeitet.' },
    ],
    related: ['channel-manager-booking-com', 'hotelsoftware-pension', 'aparthotel-software'],
  },
  {
    slug: 'hotelsoftware-pension',
    title: 'Hotelsoftware für Pensionen | Zimmero',
    description: 'Zimmerplan, Buchungen, Rechnungen, Meldeschein und Direktbuchungen für inhabergeführte Pensionen mit persönlicher Betreuung.',
    eyebrow: 'Hotelsoftware für Pensionen',
    heading: 'Ein Hotelprogramm, das den Alltag einer Pension übersichtlich hält.',
    intro: [
      'In einer Pension übernimmt oft dieselbe Person Telefon, Frühstück, Anreise und Rechnung. Die Software muss deshalb schnell verständlich sein und darf keine zusätzliche Verwaltungsstelle erzeugen.',
      'Zimmero verbindet Zimmerplan, Buchungen, Preise, Gäste, Rechnungen und regionale Pflichten. Der Tarif Starter ist für ein Haus mit bis zu 20 Zimmern oder Einheiten vorgesehen.',
    ],
    benefits: [
      { title: 'Alles am Aufenthalt', text: 'Gast, Zimmer, Leistungen, Meldeschein und Rechnung bleiben miteinander verbunden.' },
      { title: 'Direkt buchbar', text: 'Die eigene Website kann Buchungen ohne Provision an Zimmero annehmen.' },
      { title: 'Persönlich betreut', text: 'Bei Fragen sprechen Sie direkt mit Andreas Huber als Entwickler.' },
    ],
    problemTitle: 'Kleine Betriebe haben weniger Personal, aber nicht weniger Aufgaben.',
    problem: [
      'Eine Pension mit zwölf oder zwanzig Zimmern braucht keine Software, die nur mit einer eigenen Verwaltungsabteilung verständlich bleibt. Gleichzeitig fallen fast dieselben Arbeiten wie in einem größeren Hotel an. Anfragen werden beantwortet, Zimmer vergeben, Gäste gemeldet, Rechnungen geschrieben und Portale aktuell gehalten.',
      'Papierkalender und einzelne Tabellen wirken zunächst einfacher. Schwierig wird es, sobald eine Buchung mehrere Zimmer umfasst, ein Gast umzieht, ein Zimmer wegen Wartung gesperrt ist oder Booking.com gleichzeitig neue Verfügbarkeit erwartet.',
      'Zimmero ist für inhabergeführte Betriebe mit ungefähr zehn bis 100 Zimmern ausgerichtet. Eine Pension kann klein starten, ohne für jeden zusätzlichen Arbeitsbereich ein eigenes Programm einzuführen.',
    ],
    steps: [
      { title: 'Anfrage und Preis prüfen', text: 'Bei einem Anruf zeigt der Preischeck passende Zimmer und Preise. Eine unverbindliche Anfrage kann bearbeitet werden, bevor daraus eine feste Buchung entsteht.' },
      { title: 'Zimmer im Plan belegen', text: 'Aufenthalte erscheinen als Blöcke aus Zimmer und Zeitraum. Konflikte werden serverseitig geprüft, Zimmerwünsche können vorgemerkt und später fixiert werden.' },
      { title: 'Anreise vorbereiten', text: 'Drei Tage vor Ankunft erhalten Gäste automatisch den Zugang zum Gästeportal. Dort können sie die Daten der Mitreisenden erfassen.' },
      { title: 'Aufenthalt bearbeiten', text: 'Check-in, Zimmerwechsel, zusätzliche Leistungen und Informationen zur späten Anreise bleiben direkt an Buchung und Aufenthalt.' },
      { title: 'Rechnung und Abreise abschließen', text: 'Rechnungspositionen, Zahlungen und Empfänger werden in Zimmero geführt. Die Rechnung kann als PDF erstellt und per E-Mail versendet werden.' },
    ],
    image: '/assets/zimmerplan.webp',
    imageAlt: 'Zimmero Zimmerplan für eine Pension mit Buchungen und gesperrten Zimmern',
    imageCaption: 'Der Zimmerplan zeigt auf einen Blick, welche Zimmer belegt, frei oder gesperrt sind.',
    sections: [
      {
        title: 'Telefonische Anfragen brauchen schnell einen verlässlichen Preis.',
        paragraphs: [
          'Während eines Telefongesprächs bleibt wenig Zeit, Saisons, Personenzahl und Mindestaufenthalt aus mehreren Listen zusammenzusuchen. Zimmero führt Ratenpläne, Saisons, Belegungsvarianten und Tagespreise in einer Preislogik zusammen.',
          'Der Preischeck hilft bei der konkreten Anfrage. Die Rezeption kann passende Optionen nennen, ohne parallel im Zimmerplan, in einer Tabelle und im Portal nachzusehen. Das ist gerade dann hilfreich, wenn der Inhaber selbst ans Telefon geht und nebenbei andere Aufgaben erledigt.',
        ],
      },
      {
        title: 'Direktbuchungen entlasten das Telefon, ohne es abzuschaffen.',
        paragraphs: [
          'Viele Stammgäste rufen weiterhin gern an. Andere möchten abends auf der Website buchen. Die Zimmero Buchungsstrecke ergänzt den persönlichen Kontakt und übernimmt Reservierungen direkt in das Backoffice.',
          'Für Direktbuchungen berechnet Zimmero weder Provision noch Buchungsgebühr. Booking.com kann über den Channel Manager in beide Richtungen angebunden werden. Portalbuchungen kosten 1,50 Euro je Buchung, ohne zusätzliche monatliche Grundgebühr.',
        ],
      },
      {
        title: 'Regionale Pflichten gehören auch in kleinen Häusern dazu.',
        paragraphs: [
          'Ein kleiner Betrieb muss Meldescheine und Kurbeiträge genauso sorgfältig bearbeiten. Zimmero prüft erforderliche Angaben für den Meldeschein, unterstützt die elektronische Übermittlung und verfolgt den Status. Kurtaxe wird nach den je Haus eingerichteten Regeln berechnet.',
          'Für bayerische Betriebe erzeugt Zimmero außerdem eine CSV für die Tourismusstatistik. Die Datei wird vom Betrieb selbst in IDEV hochgeladen. So bleibt die Meldung kontrollierbar, ohne Ankünfte und Übernachtungen von Hand zu zählen.',
        ],
      },
      {
        title: 'Der Wechsel muss neben dem laufenden Betrieb möglich sein.',
        paragraphs: [
          'Vom Erstgespräch bis zum Start dauert die Einführung normalerweise zwei bis drei Wochen, wenn keine Sonderintegration erforderlich ist. Häuser, Zimmertypen, Zimmer und Preise werden eingerichtet. Eine halbtägige Schulung führt durch die wichtigsten Abläufe.',
          'Gäste und Buchungen aus HS3 und Pensionsprogramm wurden bereits übernommen. Die Datenübernahme ist derzeit kostenlos. Im Aktionsangebot sind außerdem die einmalige Einrichtung und die Schulung enthalten.',
        ],
      },
    ],
    requirements: [
      'Der Betrieb benötigt für die browserbasierte Anwendung eine verlässliche Internetverbindung.',
      'Zimmer, Preise und bisherige Buchungen müssen für Einrichtung und Datenübernahme vollständig bereitgestellt werden.',
      'Örtliche Regeln für Meldeschein oder Kurbeitrag müssen vor dem Start bekannt sein.',
    ],
    limitations: [
      'Zimmero ist keine einfache Ferienwohnungsanzeige für einen einzelnen privaten Vermieter, sondern Betriebssoftware für Beherbergungsbetriebe.',
      'Eine Restaurantkasse wird nicht vollständig ersetzt. Gastronomieleistungen können jedoch per Tablet aufs Zimmer gebucht und um eine TSE Anbindung ergänzt werden.',
      'Schlüsselausgabe und Vorabzahlung sind im derzeitigen Online Check-in noch nicht enthalten.',
    ],
    faqs: [
      { q: 'Welcher Tarif passt zu einer kleinen Pension?', a: 'Starter kostet im Aktionsangebot 79 Euro netto pro Monat und gilt für ein Haus mit bis zu 20 Zimmern oder Einheiten. Mitarbeiterkonten sind unbegrenzt.' },
      { q: 'Kann Zimmero Booking.com anbinden?', a: 'Ja. Verfügbarkeiten, Preise und Einschränkungen werden übertragen, Reservierungen kommen automatisch herein. Die Kosten betragen 1,50 Euro je Portalbuchung.' },
      { q: 'Gibt es eine Buchungsstrecke für die eigene Website?', a: 'Ja. Sie lässt sich in WordPress, Jimdo und Squarespace einbinden. Direktbuchungen kosten keine Provision und keine Buchungsgebühr an Zimmero.' },
      { q: 'Hilft Zimmero bei Meldeschein und Kurtaxe?', a: 'Ja. Meldescheine können elektronisch übermittelt und im Status verfolgt werden. Kurtaxe wird nach den je Haus eingerichteten Gästeklassen, Altersstufen und Gültigkeitszeiträumen berechnet.' },
      { q: 'Kann eine bestehende Pension Daten übernehmen?', a: 'Ja. Die Übernahme von Gästen und Buchungen aus HS3 und Pensionsprogramm ist erprobt und derzeit kostenlos.' },
    ],
    related: ['online-buchungssystem-hotelwebsite', 'meldeschein-software', 'hotelsoftware-bayern'],
  },
  {
    slug: 'aparthotel-software',
    title: 'Software für Aparthotels | Zimmero',
    description: 'Aparthotel Software für mehrere Häuser, Einheiten, längere Aufenthalte, Housekeeping und Eigentümerabrechnung.',
    eyebrow: 'Aparthotel Software',
    heading: 'Einheiten, Aufenthalte und Eigentümer in einem Betrieb zusammenführen.',
    intro: [
      'Aparthotels verbinden Hotelabläufe mit der Verwaltung einzelner Einheiten. Aufenthalte können länger dauern, mehrere Häuser betreffen und nach der Abreise eine Eigentümerabrechnung auslösen.',
      'Zimmero verwaltet Häuser, Zimmer oder Appartements, Gäste, Leistungen, Rechnungen und Eigentümer in einer Organisation. Rechte und operative Pläne lassen sich je Haus steuern.',
    ],
    benefits: [
      { title: 'Mehrere Häuser', text: 'Einheiten verschiedener Standorte liegen in einer gemeinsamen Organisation.' },
      { title: 'Längere Aufenthalte', text: 'Firmenblöcke, Zimmerwechsel und Leistungen bleiben am Aufenthalt nachvollziehbar.' },
      { title: 'Eigentümer abrechnen', text: 'Provisionen und weiterberechnete Kosten erscheinen als einzelne Positionen.' },
    ],
    problemTitle: 'Ein Appartement ist zugleich Unterkunft, Einheit und Abrechnungsgrundlage.',
    problem: [
      'Für den Gast zählt ein reibungsloser Aufenthalt. Für den Betrieb zählt zusätzlich, welche Einheit belegt war, wer ihr Eigentümer ist und welche Kosten später abgerechnet werden. Werden diese Sichtweisen in getrennten Programmen geführt, muss jede Änderung mehrfach nachvollzogen werden.',
      'Aparthotels haben außerdem häufig längere Aufenthalte, Firmenkunden und mehrere Personen je Buchung. Ein Gast kann während des Aufenthalts die Einheit wechseln. Housekeeping arbeitet vielleicht standortübergreifend, während Mitarbeiter an der Rezeption nur bestimmte Häuser sehen sollen.',
      'Zimmero führt diese Abläufe in einer gemeinsamen Organisation zusammen. Der Zimmerplan bleibt der tägliche Ausgangspunkt, während Eigentümer, Rechte und Abrechnungen im Hintergrund an den richtigen Einheiten hängen.',
    ],
    steps: [
      { title: 'Häuser und Einheiten strukturieren', text: 'Mehrere Häuser werden in einer Organisation angelegt. Zimmertypen und einzelne Appartements bilden die vermietbaren Einheiten im Zimmerplan.' },
      { title: 'Rechte je Haus vergeben', text: 'Mitarbeiter werden eingeladen und erhalten die Berechtigungen für die Häuser, die sie tatsächlich bearbeiten sollen.' },
      { title: 'Buchungen und Aufenthalte führen', text: 'Eine Buchung kann mehrere Zimmer und Gäste umfassen. Zimmerwünsche, Umzüge und Zimmerwechsel lassen sich während des Aufenthalts bearbeiten.' },
      { title: 'Housekeeping gemeinsam planen', text: 'Putzpläne und Zimmerstatus können häuserübergreifend organisiert werden, wenn eine Kolonne mehrere Standorte betreut.' },
      { title: 'Eigentümerabrechnung erstellen', text: 'Eigentümer und Partner werden Einheiten zugeordnet. Provisionen, weiterberechnete Kosten und Einzelpositionen fließen in die Abrechnung ein.' },
    ],
    image: '/assets/putzplan.webp',
    imageAlt: 'Zimmero Putzplan mit Zimmerstatus und Aufgaben für mehrere Einheiten',
    imageCaption: 'Housekeeping sieht die anstehenden Einheiten und ihren Status in einem gemeinsamen Arbeitsplan.',
    sections: [
      {
        title: 'Mehrere Häuser brauchen gemeinsame Arbeit und klare Grenzen.',
        paragraphs: [
          'Eine zentrale Organisation bedeutet nicht, dass jeder alles sehen darf. Zimmero vergibt Rechte je Haus. So kann eine Leitung mehrere Standorte überblicken, während Mitarbeiter nur in ihrem Zuständigkeitsbereich arbeiten.',
          'Housekeeping und Gastronomie können dagegen bewusst häuserübergreifend organisiert werden. Eine Reinigungskolonne sieht die benötigten Zimmer in einem Plan, auch wenn sie an diesem Tag mehrere Betriebe bedient.',
        ],
      },
      {
        title: 'Längere Aufenthalte bleiben veränderbar.',
        paragraphs: [
          'Bei längeren Aufenthalten ändern sich Pläne. Ein Zimmer muss gewartet werden, ein Gast verlängert oder wechselt die Einheit. Zimmero unterstützt Umzüge und Zimmerwechsel innerhalb eines Aufenthalts und prüft Belegungskonflikte serverseitig.',
          'Für Firmenkunden können langfristige Zimmerblöcke und individuelle Preisvereinbarungen geführt werden. Rechnungsadresse und Umsatzsteuer Identifikationsnummer liegen am Firmenkunden, statt bei jeder Buchung neu eingegeben zu werden.',
        ],
      },
      {
        title: 'Leistungen und Rechnungen gehören zum Aufenthalt.',
        paragraphs: [
          'Zusatzleistungen werden am Aufenthalt erfasst und später abgerechnet. Bei Bedarf lassen sich Rechnungspositionen auf verschiedene Empfänger oder Abrechnungskonten verteilen. Eingefrorene Adress- und Steuerdaten halten fest, welche Angaben bei der Rechnung galten.',
          'Für Frühstück, Bar oder weitere Leistungen kann das Team eine Tablet Ansicht verwenden und Positionen direkt auf das Zimmer buchen. Zimmero ersetzt damit keine umfangreiche Restaurantkasse, hält typische Hotelleistungen aber am richtigen Gast.',
        ],
      },
      {
        title: 'Eigentümer sehen eine nachvollziehbare Abrechnung.',
        paragraphs: [
          'Eigentümer und Partner werden je Einheit geführt. Vereinbarte Provisionen und weiterberechnete Kosten können in die Abrechnung einfließen. Einzelpositionen zeigen, wie sich der Betrag zusammensetzt.',
          'Die Software schafft damit eine Verbindung zwischen Vermietung und Eigentümerabrechnung. Rechtliche und steuerliche Vorgaben des jeweiligen Vertragsmodells müssen weiterhin vom Betrieb und seinen Beratern geprüft werden.',
        ],
      },
    ],
    requirements: [
      'Häuser, Einheiten, Eigentümer und Mitarbeiterrechte müssen vor dem laufenden Betrieb sauber eingerichtet sein.',
      'Für Eigentümerabrechnungen müssen die vereinbarten Provisionen und weiterberechneten Kosten feststehen.',
      'Firmenpreise, Leistungen und Abrechnungskonten müssen zu den tatsächlichen Verträgen des Betriebs passen.',
    ],
    limitations: [
      'Zimmero ist keine vollständige Verwaltung nach dem Wohnungseigentumsrecht und ersetzt keine Steuerberatung.',
      'Eine vollwertige Restaurantkasse gehört nicht zum Kern. Gastronomieleistungen und eine TSE Anbindung sind als Zusatzmodule verfügbar.',
      'Individuelle Sonderintegrationen müssen vor der Einführung geprüft werden und können die übliche Einführungszeit verlängern.',
    ],
    faqs: [
      { q: 'Kann Zimmero mehrere Aparthotels gemeinsam verwalten?', a: 'Ja. Mehrere Häuser liegen in einer Organisation. Mitarbeiterrechte werden je Haus vergeben, während Housekeeping und Gastronomie bei Bedarf häuserübergreifend arbeiten.' },
      { q: 'Sind Zimmerwechsel während eines Aufenthalts möglich?', a: 'Ja. Zimmero unterstützt Umzüge und Zimmerwechsel. Belegungskonflikte werden serverseitig geprüft.' },
      { q: 'Gibt es eine Eigentümerabrechnung?', a: 'Ja. Eigentümer und Partner werden Einheiten zugeordnet. Provisionen, weiterberechnete Kosten und Abrechnungen mit Einzelpositionen gehören zum Funktionsumfang.' },
      { q: 'Unterstützt Zimmero Firmenkunden und Langzeitaufenthalte?', a: 'Ja. Firmen können eigene Rechnungsadressen und Preisvereinbarungen erhalten. Langfristige Zimmerblöcke eignen sich für Monteurzimmer und Dauerkontingente.' },
      { q: 'Welcher Tarif passt für mehrere Häuser?', a: 'Professional umfasst bis zu zwei Häuser und insgesamt 50 Einheiten. Multi Property umfasst bis zu fünf Häuser und insgesamt 100 Einheiten. Darüber gibt es ein individuelles Angebot.' },
    ],
    related: ['eigentuemerabrechnung', 'hotelsoftware-bayern', 'online-buchungssystem-hotelwebsite'],
  },
  {
    slug: 'datev-export-hotel',
    title: 'DATEV Export für Hotels | Zimmero',
    description: 'Hotelrechnungen und Zahlungen in Zimmero führen und Buchungsdaten im DATEV EXTF Format für die weitere Buchhaltung exportieren.',
    eyebrow: 'DATEV Export Hotelsoftware',
    heading: 'Hotelrechnungen für die weitere Buchhaltung geordnet exportieren.',
    intro: [
      'Die Buchhaltung braucht verlässliche Rechnungsdaten. An der Rezeption entstehen diese Angaben während des Aufenthalts, bei Leistungen, Zahlungen und der finalen Rechnung.',
      'Zimmero führt die Vorgänge zusammen und bietet einen DATEV EXTF Export. Die Datei kann anschließend in der weiteren Buchhaltung verarbeitet und geprüft werden.',
    ],
    benefits: [
      { title: 'Rechnung festhalten', text: 'Adresse und Steuerdaten werden je Rechnung eingefroren und bleiben nachvollziehbar.' },
      { title: 'Zahlungen zuordnen', text: 'Zahlungen und Abrechnungskonten liegen beim betreffenden Vorgang.' },
      { title: 'EXTF exportieren', text: 'Die Daten werden im DATEV EXTF Format für die Weiterverarbeitung bereitgestellt.' },
    ],
    problemTitle: 'Die Buchhaltung kann nur übernehmen, was an der Rezeption sauber abgeschlossen wurde.',
    problem: [
      'Hotelrechnungen bestehen oft aus mehr als einer Übernachtung. Frühstück, Kurtaxe, Gastronomie oder andere Leistungen können unterschiedliche Steuersätze haben. Firmen verlangen eine abweichende Rechnungsadresse, und einzelne Positionen sollen vielleicht getrennt abgerechnet werden.',
      'Wer diese Informationen erst am Monatsende für die Buchhaltung zusammensucht, muss fertige Rechnungen, Zahlungseingänge und handschriftliche Korrekturen abgleichen. Dabei ist schwer zu erkennen, welche Adresse und Steuerangabe zum Zeitpunkt der Rechnung tatsächlich galt.',
      'Zimmero behandelt Rechnung und Zahlung als Teil des Aufenthalts. Der DATEV EXTF Export ist der Übergabepunkt zur weiteren Buchhaltung. Er ersetzt nicht die fachliche Prüfung, reduziert aber die manuelle Übertragung von bereits erfassten Daten.',
    ],
    steps: [
      { title: 'Leistungen am Aufenthalt erfassen', text: 'Übernachtung, Pauschalen und weitere Leistungen werden mit Preis und Steuer am betreffenden Aufenthalt geführt.' },
      { title: 'Empfänger und Aufteilung festlegen', text: 'Rechnungsempfänger und Abrechnungskonten werden gewählt. Split Billing ermöglicht es, Positionen auf unterschiedliche Rechnungen zu verteilen.' },
      { title: 'Rechnung finalisieren', text: 'Bei der Rechnung werden Adress- und Steuerdaten eingefroren. Spätere Änderungen am Gaststamm verändern dadurch nicht unbemerkt eine bereits erstellte Rechnung.' },
      { title: 'Zahlungen zuordnen', text: 'Erfasste Zahlungen bleiben mit dem Rechnungsvorgang verbunden und können für die weitere Bearbeitung berücksichtigt werden.' },
      { title: 'DATEV EXTF Datei übergeben', text: 'Zimmero stellt die Buchungsdaten im DATEV EXTF Format bereit. Die Datei wird anschließend in der Buchhaltung oder durch den Steuerberater geprüft und weiterverarbeitet.' },
    ],
    image: '/assets/rechnungen.webp',
    imageAlt: 'Zimmero Rechnungsansicht mit Empfänger, Steuerdaten, Positionen und PDF Vorschau',
    imageCaption: 'Rechnungsempfänger, eingefrorene Adressdaten und Positionen sind vor dem Export nachvollziehbar.',
    sections: [
      {
        title: 'Eingefrorene Daten schützen die fertige Rechnung.',
        paragraphs: [
          'Ein Gast kann später umziehen oder eine Firma ihre Rechnungsanschrift ändern. Eine bereits finalisierte Rechnung darf sich dadurch nicht still im Hintergrund verändern. Zimmero speichert deshalb einen eigenen Stand von Adresse und Steuerdaten je Rechnung.',
          'Diese Trennung ist auch für den Export wichtig. Die Buchhaltung erhält die Angaben des konkreten Belegs und nicht automatisch den neuesten Stand aus dem allgemeinen Gästestamm.',
        ],
      },
      {
        title: 'Split Billing bildet typische Hotelabsprachen ab.',
        paragraphs: [
          'Bei Geschäftsreisen bezahlt die Firma vielleicht nur Übernachtung und Frühstück, während der Gast private Leistungen selbst übernimmt. Mit Split Billing können Positionen unterschiedlichen Empfängern und Abrechnungskonten zugeordnet werden.',
          'Die Aufteilung muss vor dem Abschluss geprüft werden. Die Software kann nicht entscheiden, welche Kosten eine Firma laut Reisevereinbarung übernimmt. Sie stellt aber die Werkzeuge bereit, um die bestätigte Aufteilung sauber abzubilden.',
        ],
      },
      {
        title: 'PDF Archiv und Export erfüllen verschiedene Aufgaben.',
        paragraphs: [
          'Zimmero archiviert erzeugte Rechnungs PDF Dateien über zehn Jahre. Dieses Archiv hält den Beleg für die spätere Ansicht bereit. Der DATEV EXTF Export dient dagegen der strukturierten Übergabe von Buchungsdaten an die weitere Buchhaltung.',
          'Beides ersetzt keine Aufbewahrungs- oder Prüfungspflichten des Unternehmens. Der Betrieb muss mit Steuerberatung und Buchhaltung klären, wie Dateien importiert, Konten zugeordnet und Belege revisionsgerecht verarbeitet werden.',
        ],
      },
      {
        title: 'Der Export bleibt ein kontrollierter Übergabepunkt.',
        paragraphs: [
          'Eine direkte vollautomatische Verbuchung wird auf dieser Seite nicht versprochen. Der EXTF Export schafft eine Datei, die sich in den vereinbarten Buchhaltungsprozess einfügt. Vor dem Import können Zeitraum und Belege kontrolliert werden.',
          'Das ist besonders bei neuen Kontenplänen oder geänderten steuerlichen Vorgaben wichtig. Ein technisches Dateiformat kann fachlich falsche Ausgangsdaten nicht erkennen. Die abschließende Prüfung bleibt bei den dafür verantwortlichen Personen.',
        ],
      },
    ],
    requirements: [
      'Rechnungen, Steuern, Zahlungen und Abrechnungskonten müssen in Zimmero korrekt gepflegt sein.',
      'Der verwendete Konten- und Buchhaltungsprozess sollte vor dem ersten Export mit der Buchhaltung abgestimmt werden.',
      'Die exportierte Datei muss vor der endgültigen Verarbeitung fachlich geprüft werden.',
    ],
    limitations: [
      'Zimmero ersetzt weder DATEV selbst noch die Arbeit von Buchhaltung oder Steuerberatung.',
      'Der Export erkennt keine fachlich falschen Steuersätze, Kontenzuordnungen oder unvollständigen Belege.',
      'Eine automatische Übergabe ohne Datei und ohne abschließende Kontrolle wird nicht zugesagt.',
    ],
    faqs: [
      { q: 'Welches DATEV Format exportiert Zimmero?', a: 'Zimmero bietet einen DATEV EXTF Export für die Übergabe der Buchungsdaten an die weitere Buchhaltung.' },
      { q: 'Werden Rechnungsadressen später überschrieben?', a: 'Nein. Adresse und Steuerdaten werden je Rechnung eingefroren. Eine spätere Änderung am Gast oder an der Firma verändert den gespeicherten Rechnungsstand nicht automatisch.' },
      { q: 'Kann eine Rechnung auf mehrere Empfänger aufgeteilt werden?', a: 'Ja. Zimmero unterstützt Split Billing sowie Rechnungsempfänger und Abrechnungskonten.' },
      { q: 'Wie lange bleiben Rechnungs PDF Dateien archiviert?', a: 'Erzeugte PDF Dateien werden in Zimmero über zehn Jahre archiviert.' },
      { q: 'Ersetzt der Export meinen Steuerberater?', a: 'Nein. Der Export stellt Daten im EXTF Format bereit. Fachliche Prüfung, Kontierung und weitere Verarbeitung bleiben Aufgabe der Buchhaltung oder Steuerberatung.' },
    ],
    related: ['hotelsoftware-bayern', 'eigentuemerabrechnung', 'hotelsoftware-pension'],
  },
  {
    slug: 'online-check-in-hotel',
    title: 'Online Check-in für Hotels | Zimmero',
    description: 'Gästedaten vor der Anreise im Gästeportal erfassen und an der Rezeption vorbereitet weiterbearbeiten. Ohne Registrierung für den Gast.',
    eyebrow: 'Online Check-in Hotel',
    heading: 'Gästedaten vor der Anreise erfassen, statt sie am Empfang abzuschreiben.',
    intro: [
      'Kurz vor der Anreise kennt der Gast seine Adresse und die Daten der Mitreisenden. An der Rezeption fehlt dagegen oft die Zeit, alles in Ruhe einzutragen.',
      'Zimmero sendet vor der Anreise einen Zugang zum Gästeportal. Dort erfasst der Gast die Daten aller mitreisenden Personen. Die Angaben stehen anschließend im Backoffice bereit.',
    ],
    benefits: [
      { title: 'Automatisch erinnern', text: 'Die Nachricht geht drei Tage vor Anreise hinaus, bei kurzfristigen Buchungen sofort.' },
      { title: 'Einfach anmelden', text: 'Der Gast verwendet Buchungsnummer und Nachname statt eines neuen Benutzerkontos.' },
      { title: 'Mitreisende erfassen', text: 'Die Daten aller Personen können schon vor der Ankunft eingetragen werden.' },
    ],
    problemTitle: 'Die Anreise ist der schlechteste Zeitpunkt für lange Dateneingaben.',
    problem: [
      'Der Gast möchte das Zimmer beziehen, die Rezeption möchte Identität und Aufenthalt prüfen, und vielleicht wartet im Hintergrund schon das Telefon. Werden jetzt noch Adressen und Mitreisende von Papier übertragen, verlängert sich der Check-in für beide Seiten.',
      'Vor der Anreise ist dieselbe Aufgabe ruhiger. Der Gast kann die Angaben am eigenen Gerät eintragen und bei Familien alle Personen gemeinsam erfassen. Die Rezeption erhält die Daten, bevor der Schlüssel übergeben und der Aufenthalt eingecheckt wird.',
      'Zimmero bezeichnet diesen Stand bewusst als Online Check-in Stufe 1. Er bereitet Daten vor und zeigt den Aufenthalt im Gästeportal. Er ersetzt noch nicht jeden Schritt an der Rezeption.',
    ],
    steps: [
      { title: 'Anreise Nachricht versenden', text: 'Drei Tage vor dem geplanten Termin verschickt Zimmero automatisch eine E-Mail. Wird eine kurzfristige Buchung bestätigt, geht die Nachricht sofort hinaus.' },
      { title: 'Gast meldet sich an', text: 'Für den Zugang genügen Buchungsnummer und Nachname. Ein dauerhaftes Benutzerkonto oder eine gesonderte Registrierung ist nicht nötig.' },
      { title: 'Aufenthalt ansehen', text: 'Das Gästeportal zeigt den gebuchten Aufenthalt in der Gestaltung des Hauses mit Logo, Primärfarbe, Namen und Beschreibung.' },
      { title: 'Mitreisende erfassen', text: 'Der Gast gibt die Daten der mitreisenden Personen selbst ein. Dadurch stehen sie vor der Ankunft in Zimmero zur Verfügung.' },
      { title: 'Angaben an der Rezeption prüfen', text: 'Das Team sieht die vorbereiteten Daten im Backoffice und erledigt die verbleibenden Schritte des tatsächlichen Check-in im Betrieb.' },
    ],
    image: '/assets/buchungsuebersicht.webp',
    imageAlt: 'Zimmero Buchungsübersicht als Ausgangspunkt für Aufenthalt, Gästedaten und Anreise',
    imageCaption: 'Die vorab erfassten Gästedaten gehören zur Buchung und stehen der Rezeption für die Anreise bereit.',
    sections: [
      {
        title: 'Der Versand richtet sich nach der tatsächlichen Buchung.',
        paragraphs: [
          'Bei früh gebuchten Aufenthalten sendet Zimmero die Nachricht drei Tage vor Anreise. Dieser Abstand ist nah genug am Termin und gibt dem Gast trotzdem Zeit, die Angaben vorab zu erfassen.',
          'Kurzfristige Buchungen brauchen eine andere Behandlung. Wird ein Aufenthalt erst innerhalb dieses Zeitfensters bestätigt, verschickt Zimmero den Zugang sofort. Die Rezeption muss nicht daran denken, eine gesonderte Nachricht manuell auszulösen.',
        ],
      },
      {
        title: 'Das Gästeportal bleibt erkennbar Teil des Hauses.',
        paragraphs: [
          'Logo, Primärfarbe, Name und Beschreibung des Hauses werden im Gästeportal verwendet. Das ist besonders wichtig, weil Gäste vor der Anreise vorsichtig mit Links und Dateneingaben umgehen. Eine zum Betrieb passende Gestaltung schafft einen klaren Zusammenhang zur Buchung.',
          'Der Zugang mit Buchungsnummer und Nachname ist bewusst einfach. Der Gast muss kein Passwort vergeben und kein dauerhaftes Konto verwalten. Die Daten gehören zum konkreten Aufenthalt.',
        ],
      },
      {
        title: 'Mitreisende müssen nicht einzeln an der Rezeption warten.',
        paragraphs: [
          'Familien und Gruppen bringen mehrere Personenangaben mit. Im Gästeportal können die Daten aller Mitreisenden gemeinsam erfasst werden. So muss nicht jede Person während der Anreise ein eigenes Formular ausfüllen.',
          'Die Angaben können anschließend für weitere Abläufe bereitstehen, etwa für den Meldeschein oder ortsabhängige Berechnungen. Welche Daten tatsächlich erforderlich sind, richtet sich nach dem jeweiligen Vorgang und den örtlichen Regeln.',
        ],
      },
      {
        title: 'Stufe 1 verspricht nur, was heute verfügbar ist.',
        paragraphs: [
          'Der Online Check-in erfasst Gästedaten und zeigt den Aufenthalt. Eine digitale Schlüsselausgabe ist derzeit nicht enthalten. Auch eine Vorabzahlung gehört noch nicht zu diesem Schritt.',
          'Der Gast ist durch das Absenden der Daten nicht automatisch physisch eingecheckt. Die Rezeption prüft die Angaben und führt die im Haus notwendigen Schritte durch. Diese klare Grenze verhindert falsche Erwartungen bei Betrieb und Gast.',
        ],
      },
    ],
    requirements: [
      'Die Buchung muss eine erreichbare E-Mail-Adresse sowie korrekte Anreiseangaben enthalten.',
      'Logo, Farbe, Name und Beschreibung des Hauses sollten für das Gästeportal eingerichtet sein.',
      'Die Rezeption muss festlegen, welche Angaben sie vor Ort weiterhin prüft und welche Schritte bei der Anreise verbleiben.',
    ],
    limitations: [
      'Digitale Schlüsselausgabe und Vorabzahlung sind in der derzeit verfügbaren Stufe 1 nicht enthalten.',
      'Die Datenerfassung ersetzt nicht automatisch die Prüfung von Identitätsdokumenten oder andere gesetzlich erforderliche Bestätigungen.',
      'Ohne eine gültige E-Mail-Adresse kann der automatische Zugang nicht an den Gast zugestellt werden.',
    ],
    faqs: [
      { q: 'Wann erhält der Gast den Zugang?', a: 'Normalerweise drei Tage vor der Anreise. Wird eine kurzfristige Buchung bestätigt, versendet Zimmero die Nachricht sofort.' },
      { q: 'Braucht der Gast ein Benutzerkonto?', a: 'Nein. Die Anmeldung erfolgt mit Buchungsnummer und Nachname.' },
      { q: 'Können Daten von Mitreisenden erfasst werden?', a: 'Ja. Der Gast kann im Portal die Daten aller mitreisenden Personen eingeben.' },
      { q: 'Öffnet Zimmero automatisch die Zimmertür?', a: 'Nein. Eine digitale Schlüsselausgabe gehört derzeit nicht zum Online Check-in Stufe 1.' },
      { q: 'Kann der Gast vorab bezahlen?', a: 'Nein. Vorabzahlung ist in der derzeit verfügbaren Stufe noch nicht enthalten.' },
    ],
    related: ['meldeschein-software', 'online-buchungssystem-hotelwebsite', 'hotelsoftware-pension'],
  },
];
