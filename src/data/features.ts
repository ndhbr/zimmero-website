export const featureGroups = [
  {
    title: 'Reservierungen und Zimmerplan',
    icon: 'M8 2v4m8-4v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Zm2 9h4m2 3h4',
    summary: ['Digitaler Zimmerplan mit Anreisen, Abreisen und Sperrzeiten', 'Reservierungen mit mehreren Zimmern und Gästen', 'Dashboard mit Belegung und offenen Aufgaben'],
    details: ['Zimmerwechsel, Wartungssperren und Belegungsprüfung', 'Änderungsprotokoll für Buchungen, Preise und Stammdaten', 'Hinweise zur späten Anreise direkt am Aufenthalt'],
  },
  {
    title: 'Preise und Vertrieb',
    icon: 'M20 13 13 20a2 2 0 0 1-3 0l-7-7V4h9l8 6a2 2 0 0 1 0 3ZM7 8h.01',
    summary: ['Preischeck für Anfragen an der Rezeption', 'Ratenpläne, Saisonpreise und Pauschalangebote', 'Kostenlose Buchungsstrecke für Ihre Hotelwebsite'],
    details: ['Preise nach Belegung, Tagespreise und Verkaufsregeln', 'Angebote, Arrangements und buchbare Zusatzleistungen', 'Zimmertypen mit Fotos und öffentlicher Schnittstelle für die Hotelwebsite'],
    link: { label: 'Direktbuchungsstrecke ansehen', href: '/online-buchungssystem-hotelwebsite/' },
  },
  {
    title: 'Gäste und Kommunikation',
    icon: 'M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m19 0v-2a4 4 0 0 0-3-4m-3-12a4 4 0 0 1 0 8M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
    summary: ['Gästeverwaltung und Firmenkunden mit eigenen Konditionen', 'Gästeportal mit Online Check-in', 'E-Mails und Push-Benachrichtigungen'],
    details: ['Firmenpreise und Zimmerkontingente', 'Automatische Einladungen zum Online Check-in', 'Adressvervollständigung, Geburtstagsetiketten und E-Mail-Protokoll'],
    link: { label: 'Online Check-in im Detail', href: '/online-check-in-hotel/' },
  },
  {
    title: 'Rechnungen und Buchhaltung',
    icon: 'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6m-6 4h3',
    summary: ['Folios, geteilte Rechnungen und ZUGFeRD nach EN 16931', 'DATEV-Export für Erlöse und Anzahlungen', 'Cloud-TSE und DSFinV-K-Export'],
    details: ['Aufteilung nach Empfänger oder Abrechnungskonto', 'Stotax-Buchhaltungsexport und PDF-Archivierung für zehn Jahre', 'Elf Jahre manipulationsgeschützte Archivierung der TSE-Daten'],
    link: { label: 'DATEV-Export im Detail', href: '/datev-export-hotel/' },
  },
  {
    title: 'Housekeeping und Hotelbetrieb',
    icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M8 10h2m4 0h2m-8 3h2m4 0h2',
    summary: ['Mobile Putzpläne und Facility Management', 'Hotel-Tagespost und Eigentümerabrechnung', 'Mehrhausverwaltung und unbegrenzte Mitarbeiterkonten'],
    details: ['Reinigungsstatus, technische Aufgaben und Mängel je Zimmer', 'Tagespost mit Wetter und Veranstaltungen für Druck und Gästeportal', 'Rollen je Haus, individuelle Gestaltung und Oberfläche auf Deutsch oder Englisch'],
    link: { label: 'Hotel-Tagespost ansehen', href: '/hotel-tagespost/' },
  },
  {
    title: 'Meldewesen und Auswertungen',
    icon: 'M4 3v17h17M8 15v-3m4 3V9m4 6V6m4 9v-5',
    summary: ['Digitale Meldescheine und Kurtaxe', 'IDEV-Export für die bayerische Tourismusstatistik', 'Auswertungen zu Auslastung, ADR und RevPAR'],
    details: ['Meldescheine mit Unterschrift, Storno, Status und Archiv', 'Elektronische Übermittlung über eingerichtete lokale Meldeverfahren', 'Kurtaxe auf der Rechnung nach den Regeln des jeweiligen Orts'],
    link: { label: 'Digitale Meldescheine im Detail', href: '/meldeschein-software/' },
  },
];
