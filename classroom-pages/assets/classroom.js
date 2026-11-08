(function () {
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  // Committee notes toggle. Add ?notes=1 to a link to open with notes showing.
  var NOTES = 'mbc-show-notes';
  var btn = document.querySelector('.notes-toggle');
  var notesOn = /[?&]notes=1\b/.test(location.search) || store(NOTES) === '1';
  function applyNotes() {
    document.body.classList.toggle('notes-off', !notesOn);
    if (btn) {
      btn.textContent = notesOn ? 'Hide committee notes' : 'Show committee notes';
      btn.setAttribute('aria-pressed', notesOn ? 'true' : 'false');
    }
  }
  applyNotes();
  if (btn) btn.addEventListener('click', function () {
    notesOn = !notesOn;
    applyNotes();
    store(NOTES, notesOn ? '1' : '0');
  });

  // "Mark as done" progress, saved on this device only.
  var DONE = 'mbc-done';
  var done = {};
  try { done = JSON.parse(store(DONE) || '{}') || {}; } catch (e) { done = {}; }

  function refreshProgress() {
    document.querySelectorAll('[data-progress]').forEach(function (el) {
      var list = document.querySelector('[data-topic="' + el.getAttribute('data-progress') + '"]');
      if (!list) return;
      var boxes = list.querySelectorAll('input[data-done]');
      if (!boxes.length) { el.textContent = ''; return; }
      var n = 0;
      boxes.forEach(function (b) { if (b.checked) n++; });
      el.textContent = n + ' of ' + boxes.length + ' done';
    });
  }

  document.querySelectorAll('input[data-done]').forEach(function (box) {
    var id = box.getAttribute('data-done');
    var row = box.closest('.item');
    box.checked = !!done[id];
    if (row) row.classList.toggle('is-done', box.checked);
    box.addEventListener('change', function () {
      done[id] = box.checked;
      if (row) row.classList.toggle('is-done', box.checked);
      store(DONE, JSON.stringify(done));
      refreshProgress();
    });
  });
  refreshProgress();

  // Anonymous question form (prototype only: nothing is sent anywhere)
  var form = document.querySelector('.anon-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-ask').hidden = true;
    form.querySelector('.form-thanks').hidden = false;
  });
  // Discussion: category filter
  var chips = document.querySelectorAll('.chip[data-filter]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      document.querySelectorAll('.thread').forEach(function (t) {
        t.hidden = !(f === 'all' || t.getAttribute('data-cat') === f);
      });
    });
  });

  // Discussion: new topic form (prototype only: nothing is posted)
  var tform = document.querySelector('.topic-form');
  if (tform) tform.addEventListener('submit', function (e) {
    e.preventDefault();
    tform.querySelector('.topic-ask').hidden = true;
    tform.querySelector('.topic-thanks').hidden = false;
  });

  // Discussion: flag button (prototype only)
  document.querySelectorAll('.flag-btn').forEach(function (b) {
    b.addEventListener('click', function () { b.textContent = 'Flagged. A moderator will review it.'; b.disabled = true; });
  });
})();
