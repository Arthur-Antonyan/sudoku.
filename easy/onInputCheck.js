let wrapper = document.querySelector('.board');
let check = document.querySelector('.check');
function checkNum(event) {
  const onlyNumbers = /^[1-9]$/;

  if (!event.target.innerHTML.match(onlyNumbers) && event.target.innerHTML) {
    event.target.style.backgroundColor = '#e65022';
    check.setAttribute('disabled', 'disabled');
  } else {
    event.target.style.backgroundColor = '#176158';
    check.removeAttribute('disabled', 'disabled');
  }
}

wrapper.addEventListener('input', checkNum);
