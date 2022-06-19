// Counter in the card product and cart logic
const items = document.querySelectorAll('.good-item');
const amountField = document.getElementById('number');
const goodField = document.getElementById('good');

for (let item of items) {
  const plusButton = item.querySelector('.plus-button');
  const minusButton = item.querySelector('.minus-button');
  const amount = item.querySelector('.good-amount');

  plusButton.addEventListener('click', () => {
    amount.innerHTML++;
  });

  minusButton.addEventListener('click', () => {
    let countMinus = amount.innerHTML;
    if (countMinus > 0) {
      amount.innerHTML--;
    }
  });

  function getData(e){
    const arr = [];
    arr.push(e.currentTarget.childNodes[3].textContent);
    arr.push(amount.innerHTML);
    goodField.value = arr[0];
    amountField.value = arr[1];
  }

  item.addEventListener('click', getData, false);
}


// Open / close modal form
const cartButton = document.querySelector('.order-button');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal-close-button');

const isEscapeKey = (evt) => evt.key === 'Escape';

function closeModal () {
  modal.classList.add('modal-container-close');
}

cartButton.addEventListener('click', () => {
  if (modal.classList.contains('modal-container-close')) {
    modal.classList.remove('modal-container-close');

    closeButton.addEventListener('click', () => {
      closeModal();
    })

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeModal();
      }
    })
  }
})


// Form validation and sending
const form = document.querySelector('.order-form');

const pristine = new Pristine(form, {
  classTo: 'form-label',
  errorTextParent: 'form-label',
  errorTextClass: 'form-label_error-text',
}, false);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  ym(89242469,'reachGoal','goal');

  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);

    fetch(
      '',
      {
        method: 'POST',
        body: formData,
      },
    );

    closeModal();

    Email.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }
});

