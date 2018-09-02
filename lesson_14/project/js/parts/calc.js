function calc() {
  //calc
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

    ; //символы

    persons.onkeyup = function (e) {
      var key = String.fromCharCode(e.which);

      if (errS.indexOf(key) >= 0) {
        console.log('invalid key pressed');
        return false;
      }

      return true;
    };
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = parseInt(total);
    }
  });
  place.addEventListener('change', function () {
    if (persons.value == "" || restDays.value == "") {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  }); // замена символов restDays

  restDays.onkeyup = function () {
    return this.value = this.value.replace(/[\D{3}]/g, '');
  }; // замена символов  persons


  persons.onkeyup = function () {
    return this.value = this.value.replace(/[\D{3}]/g, '');
  };
}

module.exports = calc;