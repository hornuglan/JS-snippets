var test = prompt('How`s there?', '');

if (test == 'Admin') {
  var pass = prompt('Password?', '');
  if (pass == 'qwerty') {
    alert('Welcome!');
  } else if (pass == null) {
    alert('Access denied');
  } else {
    alert('Incorrect password');
  }
} else if (test == null) {
  alert('Access denied');
} else {
  alert('Who R U?')
}
