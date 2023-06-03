const enableLinksCheckbox = document.getElementById('enableLinksCheckbox');
const nsdlButton = document.getElementById('open-nps-nsdl');
const kfintechButton = document.getElementById('open-nps-kfintech');
const camsButton = document.getElementById('open-nps-cams');

enableLinksCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  nsdlButton.disabled = !isChecked;
  kfintechButton.disabled = !isChecked;
  camsButton.disabled = !isChecked;

  if (isChecked) {
    nsdlButton.classList.add('enabled');
    kfintechButton.classList.add('enabled');
    camsButton.classList.add('enabled');
  } else {
    nsdlButton.classList.remove('enabled');
    kfintechButton.classList.remove('enabled');
    camsButton.classList.remove('enabled');
  }
});
