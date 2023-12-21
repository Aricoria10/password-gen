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
  var result = [];
  var length = window.prompt("How long would you like your password? Enter a number 8-128.")
  length = parseInt(length, 10)
  if (length >= 8 && length <= 128) {
  } else if (length > 8 || length < 128) {
    window.alert("incorrect value, must be between 8-128.")
  }else {
    window.alert("try again later.")
    return "";
  }
  var special = "Do you want to include special characters?";
  if (confirm(special) === true) {
    specialCharacters.concat(result);
  } else {}
  var number = "Do you want to include numeric characters?";
  if (confirm(number) === true) {
    numericCharacters.concat(result);
  } else {}
  var lower= "Do you want to include lower case characters?";
  if (confirm(lower) === true) {
    lowerCasedCharacters.concat(result);
  } else {}
  var upper = "Do you want to include uppper case characters?";
  if (confirm(upper) === true) {
    upperCasedCharacters.concat(result);
  } else {}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);