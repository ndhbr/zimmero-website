export const SITE = {
  name: 'Zimmero',
  url: 'https://zimmero.app',
  description: 'Moderne Betriebssoftware für inhabergeführte Hotels inkl. Channel Manager',
};

export const DEMO_URL = 'https://dashboard.zimmero.app/demo';
export const DASHBOARD_URL = 'https://dashboard.zimmero.app';
export const CONTACT_EMAIL = 'info@zimmero.app';
export const CONTACT_PHONE_DISPLAY = '+49 1511 7815136';
export const CONTACT_PHONE_HREF = '+4915117815136';
export const CONTACT_HOURS = 'Montag bis Freitag, 8 bis 17 Uhr';

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
  description: 'Hotelsoftware für inhabergeführte Hotels: Zimmerplan, Buchungen, Channel Manager, Rechnungen, Housekeeping, digitaler Meldeschein, Kurtaxe und Eigentümerabrechnung in einem System.',
  featureList: [
    'Zimmerplan mit Aufenthalten und Sperrzeiten',
    'Buchungen mit mehreren Zimmern und Gästen',
    'Channel Manager mit Booking.com Anbindung',
    'Eigene Online Buchungsstrecke ohne Provision',
    'Rechnungen mit Split Billing und PDF Archiv',
    'DATEV EXTF Export',
    'Digitaler Meldeschein mit elektronischer Übermittlung',
    'Kurtaxen und Ortstaxenabrechnung',
    'Housekeeping und Facility Management',
    'Eigentümerabrechnung',
    'Online Check-in und Gästeportal',
    'Bayerische Tourismusstatistik als IDEV Export',
  ],
  offers: {
    '@type': 'Offer',
    price: '79.00',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '79.00',
      priceCurrency: 'EUR',
      unitText: 'MONTH',
      billingIncrement: 1,
    },
    availability: 'https://schema.org/InStock',
    url: 'https://zimmero.app/preise/',
  },
};
