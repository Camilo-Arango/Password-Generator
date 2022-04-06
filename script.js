// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", ",", ".", "/", "`", "~", ":", ";", "?", "<", ">", "[", "]", "|", "-", "+"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
space = [];
var choices = [];

//had to google how to do this
var toUpper = function(x) {
  return x.toUpperCase();
}
upperCase = lowerCase.map(toUpper);


//separate each task into different functions to make code easier to read/understand and debug

//asks the user for the required password length, make sure to use parseInt so that you always return an integer
function passwordLength() {
  enter = parseInt(prompt("How many characters would you like your password to be? Must be between 8 and 128."));
  if (!enter){
    alert("You must enter a number.");
    //will restart the function so they can enter a number.
    passwordLength();
  } else if (enter < 8 || enter > 128) {
    //confirms user input and starts prompts
    alert("You must enter a value between 8 and 128.");
    passwordLength();
  }
}


//asks the user for the password criteria
function passwordCriteria () {
  confirmUppercase = confirm("Do you want your password to contain uppercase letters?");
  confirmLowercase = confirm("Do you want your password to contain lowercase letters?");
  confirmNumber = confirm("Do you want your password to have numbers?");
  confirmSpecial = confirm("Do you want your password to contain special characters?");
  while (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecial) {
    choices = alert("You need to make a selection.");
    passwordCriteria ();
  } 
}



//randomly generates a password based on chosen criteria
function generatePassword() {


//all 4 cases selected


  if (confirmUppercase && confirmLowercase && confirmNumber && confirmSpecial) {
    choices = special.concat(number, lowerCase, upperCase);
  }


//only 3 cases selected


  else if (confirmLowercase && confirmNumber && confirmSpecial) {
    choices = special.concat(number, lowerCase);
  }
  else if (confirmUppercase &&  confirmNumber && confirmSpecial) {
    choices = special.concat(number, upperCase);
  }
  else if (confirmUppercase && confirmLowercase && confirmSpecial) {
    choices = special.concat(lowerCase, upperCase);
  }
  else if (confirmUppercase && confirmLowercase && confirmNumber) {
    choices = number.concat(lowerCase, upperCase);
  }


//only 2 cases selected


  else if (confirmUppercase && confirmLowercase) {
    choices = lowerCase.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = number.concat(lowerCase);
  }
  else if (confirmNumber && confirmSpecial) {
    choices = number.concat(special);
  }
  else if (confirmUppercase && confirmNumber) {
    choices = number.concat(upperCase);
  }
  else if (confirmLowercase && confirmSpecial) {
    choices = special.concat(lowerCase);
  }
  else if (confirmUppercase && confirmSpecial) {
    choices = special.concat(upperCase);
  }


//only 1 case selected
//need to use space variable to fill the uppercase conversion


  else if (confirmUppercase) {
    choices = space.concat(upperCase);
  }
  else if (confirmLowercase) {
    choices = lowerCase;
  }
  else if (confirmSpecial) {
    choices = special;
  }
  else if (confirmNumber) {
    choices = number;
  }
  

//array placeholder based on the length that the user inputted
  var password = [];


//for loop to randomly select the desired amount of characters in a random order
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  };
//use .join to arrange return as a string
  var generatedPassword = password.join("");
  return generatedPassword;
};



// Write password to the #password input
function writePassword() {
  passwordLength();
  passwordCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//maybe use generateBtn.onclick = function(writePassword()){}
//
