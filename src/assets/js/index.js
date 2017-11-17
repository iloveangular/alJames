var stripe = Stripe('pk_test_ZzseJ5AKayP7TCPFgmeabT0v');
var elements = stripe.elements();

$(function() {
    $('.pay_result').hide();
    $('.cssload-box-loading').hide();
});
var card = elements.create('card', {
  hidePostalCode: true,
  style: {
    base: {
      iconColor: '#F99A52',
      color: '#32315E',
      lineHeight: '48px',
      fontWeight: 400,
      fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
      fontSize: '15px',

      '::placeholder': {
        color: '#CFD7DF',
      }
    },
  }
});
if(document.getElementById("card-element")) {
  card.mount('#card-element');
}

card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

var amount = $('#amount').val();
var owner = $('#owner').val();
var info = {
  type: 'bitcoin',
  amount: Number(amount + '00'),
  currency: 'usd',
  owner: {
    email: owner,
  },
};

function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);



  // Submit the form
  form.submit();
}

function stripeSourceHandler(source) {
  // Insert the token ID into the form so it gets submitted to the server
  function createInput(formName, name, val) {
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', name);
    hiddenInput.setAttribute('value', val);
    formName.appendChild(hiddenInput);
  }

  var form = document.getElementById('bitcoin-payment-switch');
  createInput(form, 'sourceId', source.id);

  // Submit the form
  form.submit();
}

var form = document.getElementById('payment-form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var successElement = document.querySelector('.success');
    var errorElement = document.querySelector('.error');
    successElement.classList.remove('visible');
    errorElement.classList.remove('visible');
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Inform the user if there was an error
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        successElement.querySelector('.token').textContent = result.token.id;
        successElement.classList.add('visible');
        stripeTokenHandler(result.token);
      }
    });
  });
};

var bitcoinSwitch = document.getElementById('bitcoin-payment-switch');
if (bitcoinSwitch) {
  bitcoinSwitch.addEventListener('submit', function(event) {
    event.preventDefault();
    stripe.createSource(info).then(function(result) {
      if (result.error) {
      } else {
        //successElement.querySelector('.token').textContent = result.token.id;
        //successElement.classList.add('visible');
        stripeSourceHandler(result.source);
      }
    });
  });
}
