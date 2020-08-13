/* Add any JavaScript you need to this file. */

var user = {
  username: '',
  password: ''
};

/*Function for home page: menu and button*/
function showMenu() {
  document.getElementsByClassName('menu')[0].classList.toggle('show');
  document.getElementById('1').classList.toggle('rotate45');
  document.getElementById('2').classList.toggle('hide');
  document.getElementById('3').classList.toggle('rotate-45');
}

function showSignIn() {
  document.querySelector('#popUp').style.visibility = 'visible';
  document.getElementsByClassName('loginForm')[0].classList.add('show');
}

function closeForm() {
  document.querySelector('#popUp').style.visibility = 'hidden';
  document.getElementsByClassName('loginForm')[0].classList.remove('show');
}

function logIn() {
  var input = document.querySelector('#User');
  //remove the whitespace if user types it intentionally
  var username = input.value.trim();
  var loc = document.querySelector('#welcome');
  if (username != '' && document.getElementsByClassName('logOut')[0].style.display != 'block') {
    var text = document.createTextNode('Hello, ' + username + '!');
    loc.appendChild(text);
    document.getElementsByClassName('signIn')[0].style.display = 'none';
    document.getElementsByClassName('logOut')[0].style.display = 'block';
    closeForm();
  }
  return false;
}

function showLogOut() {
  var log = document.querySelector('#welcome');
  log.innerHTML = '';
  document.getElementsByClassName('signIn')[0].style.display = 'block';
  document.getElementsByClassName('logOut')[0].style.display = 'none';
}
