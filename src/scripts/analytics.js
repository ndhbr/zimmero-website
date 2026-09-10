const DEMO_URL = 'https://dashboard.zimmero.app/demo';

export function eventsForLink(href, moduleName, eventName) {
  const events = [];

  if (href === DEMO_URL) events.push({ name: 'Demo geoeffnet' });
  if (href.startsWith('tel:')) events.push({ name: 'Telefon geklickt' });
  if (href.startsWith('mailto:')) events.push({ name: 'E-Mail geklickt' });
  if (moduleName) events.push({ name: 'Modul angefragt', props: { modul: moduleName } });
  if (eventName) events.push({ name: eventName });

  return events;
}

export function eventForPage(pathname) {
  return pathname.replace(/\/+$/, '') === '/preise' ? { name: 'Preisseite besucht' } : null;
}

export function installAnalytics() {
  const track = ({ name, props = {} }) => {
    window.plausible(name, {
      props: { quellseite: window.location.pathname, ...props },
    });
  };

  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a') : null;
    if (!link) return;

    const href = link.getAttribute('href') || '';
    eventsForLink(href, link.dataset.module, link.dataset.event).forEach(track);
  });

  const pageEvent = eventForPage(window.location.pathname);
  if (pageEvent) track(pageEvent);
}
