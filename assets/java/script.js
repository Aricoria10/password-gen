console.log(this);
/// this variable inputs the password once generated
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

//this is the function being called on below to generate the password
function generatePassword() {
  var characters = [];
  var result = [];
// this is a do/while loop, meant to repeat the first prompt until the user enters the right input, if they do not it will loop back to the prompt
  do {
    characters = window.prompt("How long would you like your password? Enter a number 8-128.") 
    characters = parseInt(characters, 10);
  } while (isNaN(characters) || characters < 8 || characters > 129)
  // once the user enters the correct number of characters they move on, if they hit cancel will will show them the alert
  if (characters >= 8 && characters <= 128) { 
  }else {
    window.alert("try again later.");
    return "";
  }
  // first confirm to ask if the user wants to use special characters for their password. if they choose yes, then it will concat the special characters array into the results array.
  // this will continue on for each array
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
  // a quick if statement to check to see if the user did not choose for any arrays to be included in the password, since this would leave the results array empty this if statement checks for falses with all previous if statements and will stop and urge the user to try again
  if (special == false && number == false && lower == false && upper == false) {
    window.alert("Invalid input, please choose at least on set of characters to generate password.") 
    return ""
  } 
  // this is the for lop to generate the password, it will generate the password by merge the empty password variable with the result array, the resulty array running a loop to select a number of random strings from the results array a number of times the user input in the first prompt
  var password = "";
  for (var i = 0; i < characters; i++) {
    password = password.concat(result[Math.floor(Math.random()*result.length)]);
  }
  return password
}

// the function to generate the password into the webpage
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// the listener that triggers the write password function, which triggers the generate password function
generateBtn.addEventListener("click", writePassword);