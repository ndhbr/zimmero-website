export const plans = [
  {
    name: 'Starter',
    price: 99,
    capacity: '1 Haus · bis zu 20 Zimmer oder Einheiten',
    extensions: 'Erweiterungen einzeln zubuchbar',
    support: [
      'E-Mail für Nutzungsfragen und technische Probleme, Bearbeitung zu den Servicezeiten',
      '1 Notfalltelefonat pro Monat bis 30 Minuten zu den Servicezeiten',
      'Weitere Telefonate 70 €/Std., akute Einsätze außerhalb 120 €/Std. nach Verfügbarkeit',
    ],
  },
  {
    name: 'Professional',
    price: 199,
    capacity: 'Bis zu 2 Häuser · insgesamt bis zu 50 Zimmer oder Einheiten',
    extensions: '3 reguläre Erweiterungen nach Wahl inklusive',
    support: [
      'E-Mail- und WhatsApp-Support',
      '3 Telefonate pro Monat bis je 30 Minuten zu den Servicezeiten, bei Notfällen auch außerhalb nach Verfügbarkeit',
      'Danach 70 €/Std. zu den Servicezeiten oder 120 €/Std. für akute Einsätze außerhalb nach Verfügbarkeit',
    ],
  },
  {
    name: 'Multi Property',
    price: 299,
    capacity: 'Bis zu 5 Häuser · insgesamt bis zu 100 Zimmer oder Einheiten',
    extensions: 'Alle regulären Erweiterungen inklusive',
    support: [
      'E-Mail- und WhatsApp-Support',
      'Telefonischer Support zu den Servicezeiten inklusive',
      'Telefonischer Notfallsupport außerhalb inklusive nach Verfügbarkeit, ohne garantierte Rufbereitschaft',
    ],
  },
] as const;

export const addOns = [
  {
    name: 'Digitales Kassenbuch mit KI',
    price: '10 €',
    unit: 'pro Monat',
    description: 'Bargeldbewegungen erfassen, Belege per Smartphone fotografieren, Daten von der KI auslesen lassen und samt Belegen nach DATEV exportieren.',
    href: '/digitales-kassenbuch-hotel/',
  },
  {
    name: 'Zimmero Channel Manager',
    price: '1,50 €',
    unit: 'pro bestätigter Portalbuchung',
    description: 'Preise, Verfügbarkeiten und Reservierungen mit Buchungsportalen abgleichen. Maximal 59 € pro Monat. Keine zusätzliche Grundgebühr.',
    href: '/channel-manager-booking-com/',
  },
  {
    name: 'TOMAS / Holidu Smart Destination',
    price: '59 €',
    unit: 'pro Monat',
    description: 'Sonderintegration für Destinationen und Tourismusorganisationen. Der vollständige Zimmero Channel Manager ist im Modulpreis enthalten.',
    href: '/schnittstellen/#tourismus',
  },
  {
    name: 'myOBS',
    price: '5 €',
    unit: 'pro Monat',
    description: 'Zimmer zuordnen, Reservierungen übernehmen und Verfügbarkeiten mit dem OnlineBuchungService abgleichen.',
    href: '/schnittstellen/#tourismus',
  },
  {
    name: 'Gastronomie-Tablet',
    price: '10 €',
    unit: 'pro Monat',
    description: 'Frühstück, Speisen und Getränke per Tablet direkt aufs Zimmer buchen. Eine separate Restaurantkasse ist dafür nicht nötig.',
  },
  {
    name: 'Externe Kassensysteme',
    price: '10 €',
    unit: 'pro Monat',
    description: 'Ein kompatibles Kassensystem über die dokumentierte Schnittstelle mit Zimmero verbinden.',
    href: '/schnittstellen/#buchhaltung',
  },
  {
    name: 'Zimmero Bell',
    price: '10 €',
    unit: 'pro Monat',
    description: 'Der KI-Assistent findet Informationen im Backoffice, passende Zimmeroptionen und unterstützt bei Buchungsanfragen.',
  },
  {
    name: 'SumUp Solo',
    price: '5 €',
    unit: 'pro Monat',
    description: 'Rechnungsbeträge direkt ans Terminal senden und den Zahlungsstatus automatisch in Zimmero übernehmen.',
  },
];

export const channelPricing = '1,50 € netto pro bestätigter Portalbuchung, maximal 59 € netto pro Monat. Es gibt keine zusätzliche Grundgebühr. Im TOMAS-Modul ist der vollständige Channel Manager inklusive.';
