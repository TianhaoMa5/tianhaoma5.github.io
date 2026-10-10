document.querySelectorAll('.paper-summary-toggle').forEach(function (button) {
  var summary = document.getElementById(button.getAttribute('aria-controls'));
  if (!summary) return;

  button.addEventListener('click', function () {
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    summary.hidden = expanded;
  });
});
