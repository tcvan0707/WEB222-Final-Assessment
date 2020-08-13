// const { doc } = require('prettier');

var check = 0;

/*Function for clear all button*/
function clearAll() {
  document.querySelector('#errors').innerHTML = ' ';
  check = 0;
}

/*Function to check if user makes any typing error*/
function checkError(announcement) {
  check++;
  if (check < 9) {
    image('#errors', 'noicon.png');
    document.getElementById('errors').innerHTML += announcement;
  }
}

/*This is the function to check if users has satisfied the register rule*/
function validation() {
  var valid = false;
  clearAll();

  valid = usernameValidation();
  valid = passwordValidation() && valid;
  valid = passwordConfirmation() && valid;
  valid = streetValidation() && valid;
  valid = unValidName('#firstname') && valid;
  valid = unValidName('#lastname') && valid;
  valid = unValidName('#city') && valid;
  if (valid == false) {
    document.getElementById('errorColumn').style.display = 'inline-block';
    document.querySelector('.content1').style.width = '940px';
    document.getElementsByClassName('column')[0].style.width = '51%';
    document.getElementsByClassName('column')[1].style.width = '51%';
    return valid;
  }
}

/*Function to validate user name from user*/
function usernameValidation() {
  var loc = document.querySelector('#username');
  var input = loc.value.trim();
  var valid = true;
  input = input.toUpperCase();
  var length = input.length;
  if (length == 0) {
    checkError('<span>Empty username is not available</span><br>');
    valid = false;
  } else if (length < 8) {
    checkError('<span>Username must have at least 8 characters</span><br>');
    valid = false;
  }
  if (input[0] < 'A' || input[0] > 'Z') {
    checkError('<span>Username must start with a letter</span><br>');
    valid = false;
  }
  return valid;
}

/*Function to validate password from user*/
function passwordValidation() {
  var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var password = document.querySelector('#password');
  var input = password.value.trim();
  var valid = true;
  var noDigit = false;
  var length = input.length;
  if (length < 8 || length == 0) {
    checkError('<span>Password must be at least 8 characters long ^_^</span><br>');
    valid = false;
  }
  for (let i = 0; i < length; i++) {
    if (string.indexOf(input.substr(i, 1)) >= 0) {
      valid = true;
      break;
    }
  }
  if (valid == false) {
    checkError('<span>Password must contain at least 1 capital ^_^</span><br>');
  }
  input = input.toUpperCase();
  if (input[0] < 'A' || input[0] > 'Z') {
    checkError('<span>Starting by letter is recommended ^_^</span><br>');
    valid = false;
  }
  for (let i = 0; i < length; i++) {
    if (parseInt(input[i]) >= 0) {
      noDigit = true;
      break;
    }
  }
  if (noDigit == false) {
    checkError('<span>Password must contain at least 1 number ^_^</span><br>');
  }
  return noDigit && valid;
}

/*Function to confirm the password*/
function passwordConfirmation() {
  var confirmation = false;
  var value1 = document.querySelector('#password').value.trim();
  var value2 = document.querySelector('#confirm').value.trim();
  if (value1 === value2) {
    confirmation = true;
  }
  if (confirmation == false) {
    checkError('<span>Passwords do not match</span><br>');
  }
  return confirmation;
}

/*Function to validate street name from user*/
function streetValidation() {
  var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ .';
  var valid = true;
  var loc = document.querySelector('#streetname');
  var input = loc.value.trim(); //remove white space
  input = input.toUpperCase();
  var length = input.length;
  if (length == 0) {
    checkError('<span>Street name must have at least 1 character</span><br>');
    valid = false;
  }
  for (let i = 0; i < length; i++) {
    if (string.indexOf(input.substr(i, 1)) < 0) {
      checkError('<span>Letters only. Number is not available</span><br>');
      valid = false;
      break;
    }
  }
  return valid;
}

/*Function to validate first name, last name, city from user*/
function unValidName(id) {
  var valid = true;
  var ID = document.querySelector(id);
  var input = ID.value.trim();
  input = input.toUpperCase();
  var box;
  switch (id) {
    case '#firstname':
      box = 'First name';
      break;
    case '#lastname':
      box = 'Last name';
      break;
    case '#city':
      box = 'City';
      break;
  }
  var length = input.length;
  if (length == 0) {
    checkError('<span>' + box + ' REQUIRED</span><br>');
    valid = false;
  }
  for (let i = 0; i < length; i++) {
    var position = input.charAt(i);
    if (position < 'A' || position > 'Z') {
      checkError('<span>' + box + ' contains only LETTERS</span><br>');
      valid = false;
      break;
    }
  }
  return valid;
}

/*Function to create an image for announcement*/
function image(loc, src) {
  var loc = document.querySelector(loc);
  var img = document.createElement('img');
  img.src = './images/' + src;
  img.className = 'noicon';
  loc.appendChild(img);
}

const radio = document.querySelector('.radio');
const boxNum = document.querySelector('#box-num');
radio.addEventListener('click', event => {
  if (
    (event.target.id === 'question' || event.target.id === 'comment') &&
    !boxNum.classList.contains('hide')
  ) {
    boxNum.classList.add('hide');
  } else if (event.target.id === 'orderproblem') {
    boxNum.classList.remove('hide');
  }
});
