document.querySelector('#cardnumber').addEventListener('input', function(e) {
    var foo = this.value.split("-").join("");
    if (foo.length > 0) {
      foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    this.value = foo;
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
}


document.getElementById("submit").onclick = function() {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let cardnumber = document.getElementById("cardnumber").value;
  let cvv = document.getElementById("cvv").value;
  let pin = document.getElementById("pin").value;
  let expmonth = document.getElementById("expmonth").value;
  let expyear = document.getElementById("expyear").value;
}

  