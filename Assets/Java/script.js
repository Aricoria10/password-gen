console.log(this);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

function generatePassword() {
  var characters = [];
  var result = [];

  do {
    characters = window.prompt("How long would you like your password? Enter a number 8-128.") 
    characters = parseInt(characters, 10);
  } while (isNaN(characters) || characters < 8 || characters > 129)
  if (characters >= 8 && characters <= 128) { 
  }else {
    window.alert("try again later.");
    return "";
  }
  var special = window.confirm("Do you want to include special characters?");
  if (special === true) {
      result = specialCharacters.concat(result);
  } 
  var number = window.confirm("Do you want to include numeric characters?");
  if (number === true) {
      result = numericCharacters.concat(result);
  } 
  var lower = window.confirm("Do you want to include lower case characters?");
  if (lower === true) {
      result = lowerCasedCharacters.concat(result);
  }
  var upper = window.confirm("Do you want to include uppper case characters?");
  if (upper === true) {
      result = upperCasedCharacters.concat(result);
  }
  if (special == false && number == false && lower == false && upper == false) {
    window.alert("Invalid input, please choose at least on set of characters to generate password.") 
  } 
  var password = "";
  for (var i = 0; i < characters; i++) {
    password = password.concat(result[Math.floor(Math.random()*result.length)]);
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);