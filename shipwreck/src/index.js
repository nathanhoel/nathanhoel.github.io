// import Shipwreck from './shipwreck.js';

// notifications
const flash = {
  box: document.getElementById('flash'),
  clear: () => flash.box.innerHTML = '',
  add: (msg, type) => flash.box.appendChild(_html(`<div class="banner ${type}">${msg}</div>`)),
}

// handles to form inputs
const shipHref = document.getElementById('ship-href');
const shipToken = document.getElementById('ship-token');
const shipOutput = document.getElementById('ship-output');

// create shipwreck instance
const ship = new Shipwreck(shipOutput);

ship.on('fetch', data => {
  flash.clear();
});

ship.on('error', data => {
  flash.add(data.message, 'critical');
});

ship.on('success', data => {
  //flash.add(data.message, 'success');
});

shipToken.value = ship.token;

// clear auth token
const _clearStorage = async () => {
  flash.clear();
  shipToken.value = '';
  ship.token = '';
  flash.add('Session storage has been cleared.', 'success');
}

// submit API reqest
let active = false;
const _submit = async () => {
  // one request at a time
  if (active) return;
  active = true;
  try {
    location.hash = shipHref.value;
    ship.token = shipToken.value;
    await ship.fetch({ href: shipHref.value });
  }
  catch(err) {
    console.error(err);
  }
  active = false;
}

// sync the location hash with the api href input field
const _checkHash = () => {
  shipHref.value = location.hash.slice(1);
  _submit();
}

window.onhashchange = _checkHash;
window.onload = _checkHash;
