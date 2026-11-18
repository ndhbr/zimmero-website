import { plans } from './data/pricing';

export const SITE = {
  name: 'Zimmero',
  url: 'https://zimmero.app',
  description: 'Hotelsoftware für inhabergeführte Hotels, Pensionen, Gasthöfe und kleine Hotelgruppen mit kostenloser Direktbuchungsstrecke und optionalem Channel Manager.',
};

export const DEMO_URL = 'https://dashboard.zimmero.app/demo';
export const DASHBOARD_URL = 'https://dashboard.zimmero.app';
export const CONTACT_EMAIL = 'info@zimmero.app';
export const CONTACT_PHONE_DISPLAY = '+49 1511 7815136';
export const CONTACT_PHONE_HREF = '+4915117815136';
export const CONTACT_HOURS = 'Montag bis Freitag, 8 bis 17 Uhr, außer an gesetzlichen Feiertagen';

export const SOLUTION_LINKS = [
  { label: 'Digitales Kassenbuch mit KI', href: '/digitales-kassenbuch-hotel/' },
  { label: 'E-Rechnungen mit ZUGFeRD', href: '/wissen/e-rechnung-hotel/' },
  { label: 'Meldeschein', href: '/meldeschein-software/' },
  { label: 'Kurtaxe und Ortstaxe', href: '/kurtaxe-ortstaxe-software/' },
  { label: 'Channel Manager', href: '/channel-manager-booking-com/' },
  { label: 'Eigentümerabrechnung', href: '/eigentuemerabrechnung/' },
  { label: 'Online Buchung', href: '/online-buchungssystem-hotelwebsite/' },
  { label: 'Tagespost', href: '/hotel-tagespost/' },
  { label: 'Tourismusstatistik', href: '/tourismusstatistik-bayern/' },
] as const;

export const SOFTWARE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://zimmero.app/#software',
  name: 'Zimmero',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Hotel Property Management System',
  operatingSystem: 'Webbrowser',
  url: 'https://zimmero.app',
  publisher: { '@id': 'https://zimmero.app/#organization' },
  description: 'Hotelsoftware für kleine Hotels und Pensionen: Zimmerplan, Buchungen, Channel Manager, Rechnungen, Housekeeping, digitaler Meldeschein und Kurtaxe in einem System.',
  audience: [
    { '@type': 'Audience', audienceType: 'Pensionen' },
    { '@type': 'Audience', audienceType: 'Inhabergeführte Hotels, Gasthöfe und kleine Hotelgruppen' },
  ],
  featureList: [
    'Zimmerplan mit Aufenthalten und Sperrzeiten',
    'Buchungen mit mehreren Zimmern und Gästen',
    'Optionaler Zimmero Channel Manager für Booking.com und weitere Portale',
    'Eigene Online Buchungsstrecke ohne Provision',
    'Rechnungen mit Split Billing und PDF Archiv',
    'E-Rechnungen mit ZUGFeRD EN 16931 in jedem Paket',
    'DATEV-Export für Erlöse und Anzahlungen',
    'Digitaler Meldeschein mit elektronischer Übermittlung',
    'Kurtaxen und Ortstaxenabrechnung',
    'Housekeeping und Facility Management',
    'Eigentümerabrechnung',
    'Online Check-in und Gästeportal',
    'Hotel-Tagespost mit Wetter, Veranstaltungen und PDF-Ausgabe',
    'Bayerische Tourismusstatistik als IDEV-Export',
    'Cloud-TSE mit elf Jahren Archivierung und DSFinV-K-Export',
  ],
  offers: plans.map(plan => ({
    '@type': 'Offer',
    name: plan.name,
    price: plan.price,
    priceCurrency: 'EUR',
    description: `${plan.capacity}. Monatlich kündbar. Einrichtung, Datenmigration und halbtägige Teams-Schulung kostenlos.`,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: plan.price,
      priceCurrency: 'EUR',
      unitCode: 'MON',
      valueAddedTaxIncluded: false,
    },
    url: 'https://zimmero.app/preise/',
  })),
};
