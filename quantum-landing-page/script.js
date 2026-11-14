/* Quantum Solutions & Services: contact form -> the visitor's own email app (mailto).
   No backend, no third-party service. Also the phone menu toggle (a button, so keyboard and screen readers get its state). */
(function () {
  'use strict';

  var TO = 'info@quantumsolutionsandservices.com';

  /* ---- phone menu ---- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    var setOpen = function (open) {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.firstElementChild.textContent = open ? 'Close' : 'Menu';
    };
    toggle.addEventListener('click', function () { setOpen(!menu.classList.contains('is-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---- contact form ---- */
  var form = document.getElementById('contact-form');
  if (!form) return;
  var note = document.getElementById('form-note');

  function val(id) { return (document.getElementById(id).value || '').trim(); }

  function flag(id, errId, bad) {
    var el = document.getElementById(id);
    var err = document.getElementById(errId);
    if (bad) { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', errId); err.hidden = false; }
    else { el.removeAttribute('aria-invalid'); el.removeAttribute('aria-describedby'); err.hidden = true; }
    return bad;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = val('f-name'), email = val('f-email'), company = val('f-company'), staff = val('f-staff'), need = val('f-need');
    var emailBad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    var bad = [flag('f-name', 'e-name', !name), flag('f-email', 'e-email', emailBad), flag('f-need', 'e-need', !need)];
    if (bad.indexOf(true) !== -1) {
      var first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }

    var subject = 'Enquiry from the website' + (company ? ' - ' + company : '');
    var body = [
      'Name: ' + name,
      'Business email: ' + email,
      'Company: ' + (company || '-'),
      'Number of staff: ' + (staff || '-'),
      '',
      'What do you need help with?',
      need
    ].join('\r\n');

    var href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    note.textContent = 'Your email app should now open with your message filled in. If it does not, write to ' + TO + ' and we will reply within one business day.';
    window.location.href = href;
  });

  /* clear a field's error as soon as it is fixed */
  ['f-name', 'f-email', 'f-need'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
      if (this.getAttribute('aria-invalid') === 'true') {
        this.removeAttribute('aria-invalid'); this.removeAttribute('aria-describedby');
        var err = document.getElementById('e-' + id.slice(2)); if (err) err.hidden = true;
      }
    });
  });
})();
