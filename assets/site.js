// Committee notes toggle. Add ?notes=1 to a page link to open it with notes showing.
(function () {
  var KEY = 'mbc-show-notes';
  var body = document.body;
  var btn = document.querySelector('.notes-toggle');

  function read() {
    if (/[?&]notes=1\b/.test(location.search)) return true;
    try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
  }

  function apply(on) {
    body.classList.toggle('notes-off', !on);
    if (btn) {
      btn.textContent = on ? 'Hide committee notes' : 'Show committee notes';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  var on = read();
  apply(on);

  if (btn) {
    btn.addEventListener('click', function () {
      on = !on;
      apply(on);
      try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    });
  }

  // Anonymous question form (prototype only: nothing is sent anywhere)
  var form = document.querySelector('.anon-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ask = form.querySelector('.form-ask');
      var thanks = form.querySelector('.form-thanks');
      if (ask) ask.style.display = 'none';
      if (thanks) thanks.hidden = false;
    });
  }
})();
