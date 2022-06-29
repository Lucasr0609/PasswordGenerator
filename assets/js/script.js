let generatePassword = function  () {
  // Assignment code here
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!#$%&*+-.:;<=>?@^_{|}~";
  var numbers = "123456789";
  var passwords = [];
  //alert the user of criteria
  window.alert('Please choose password criteria.')

  //set criteria for password 
  var passwordLength = parseInt(window.prompt('Please choose a length no less than 8 and no more than 128 characters long'));
  if(passwordLength < 8 || passwordLength > 128 || passwordLength === null || passwordLength === "") {
    window.alert('Please enter a valid password length.')
    return ''
  }

  
  // store the window object into variable
  var upperCaseConfirm = window.confirm('promt here')
 // if the user confirms uppercase letters, push it to the passwords array. 
 if(upperCaseConfirm) {
  passwords += upperCase
 } else {
    return ''
 }


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// hello world!