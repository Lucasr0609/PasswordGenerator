  // Assignment code here
  var passwordLength = 8;
  var passwordArr = [];
  var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var symbolsArr = ["!","#","$","%","&","*","+","-",".",":",";","<","=",">","?","@","^","_","{","|","}","~"];
  var numbersArr = ["0","1","2","3","4","5","6","7","8","9"];

 function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randonIndex = Math.floor(Math.random() * passwordArr.length)
    password = password + passwordArr[randonIndex];
  }
  return password;
}
  // store the window object into variable
  // if the user confirms uppercase letters, push it to the passwords array. 
  function getPrompts(){
    passwordArr = [];
    window.alert('Please choose password criteria.')
    passwordLength = parseInt(window.prompt('Please choose a length no less than 8 and no more than 128 characters long'));
    if(passwordLength < 8 || passwordLength > 128 || passwordLength === null || passwordLength === "") {
      window.alert('Please enter a valid password length.')
      return ''
    };
    if (confirm('Would you like to add upper case letters to your randomize password, if so please press ok if not press cancel')){
      passwordArr = passwordArr.concat(upperCaseArr);
    }
    if (confirm('Would you like to add lower case letters to your randomize password, if so please press ok if not press cancel')){
      passwordArr = passwordArr.concat(lowerCaseArr);
    }
    if (confirm('Would you like to add symbol characters like ! # $ and others to your randomize password, if so please press ok if not press cancel')){
      passwordArr = passwordArr.concat(symbolsArr);
    }
    if (confirm('Would you like to add numbers to your randomize password, if so please press ok if not press cance')){
      passwordArr = passwordArr.concat(numbersArr);
    }
    return true;
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var rightPrompts = getPrompts();
  if(rightPrompts){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);