import assert from 'node:assert/strict';
import { eventForPage, eventsForLink } from '../src/scripts/analytics.js';

assert.deepEqual(eventsForLink('https://dashboard.zimmero.app/demo'), [{ name: 'Demo geoeffnet' }]);
assert.deepEqual(eventsForLink('tel:+4915117815136'), [{ name: 'Telefon geklickt' }]);
assert.deepEqual(eventsForLink('mailto:info@zimmero.app'), [{ name: 'E-Mail geklickt' }]);
assert.deepEqual(eventsForLink('mailto:info@zimmero.app', 'Zimmero Bell'), [
  { name: 'E-Mail geklickt' },
  { name: 'Modul angefragt', props: { modul: 'Zimmero Bell' } },
]);
assert.deepEqual(eventForPage('/preise/'), { name: 'Preisseite besucht' });
assert.equal(eventForPage('/kontakt/'), null);

console.log('Analytics Zuordnung geprüft.');
