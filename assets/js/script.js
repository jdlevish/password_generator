// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clearField");
var copyTextbtn = document.querySelector("#copyText");
//assignment of multi-dimensional array containing characters for password generation
var charArray = [
	[
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	],
	[
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	],
	["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
	[
		"~",
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"_",
		"-",
		"+",
		"=",
		",",
		"<",
		">",
		".",
		"?",
		"/",
		"{",
		"[",
		"}",
		"]",
		"|",
		"`",
	],
];
// empty array for selected characters
var selectArray = [];
//empty array for random generated password characters
var passArray = [];
//function containing password generation logic
function generatePassword(lc, uc, num, spc, pl, ca) {
	//checks that user chose at least one character set
	if (!lc && !uc && !num && !spc) {
		alert(" you must pick atleast one character type");
	} else if (isNaN(pl)) {
		alert("you must select a number ");
	} else if (pl < 8 || pl > 128) {
		alert("you must select a number between 8 and 128");
	} else {
		//creates second array of selected characters
		if (lc) {
			selectArray.push(...ca[0]);
		}
		if (uc) {
			selectArray.push(...ca[1]);
		}
		if (num) {
			selectArray.push(...ca[2]);
		}
		if (spc) {
			selectArray.push(...ca[3]);
			// console.log(selectArray);
		}
		//loop to creat password for random selection from array of selected numbers
		for (i = 0; i < pl; i++) {
			passArray.push(
				selectArray[Math.floor(Math.random() * selectArray.length)]
			);
		}
		//returns passArray as a string
		return passArray.join("");
	}
}
// Write password to the #password input
function writePassword() {
	//prompts user to make character set selections
	//declares variables for user selections
	var lowerCase = confirm(
		"would you like to include lowercase characters? click ok for yes or cancel for no:"
	);
	var upperCase = confirm(
		"would you like to include uppercase characters? click ok for yes or cancel for no:"
	);
	var numChars = confirm(
		"would you like to include numerical characters? click ok for yes or cancel for no:"
	);
	var specCars = confirm(
		"would you like to include special characters? click ok for yes or cancel for no:"
	);
	var passLength = parseInt(
		prompt(
			"how long would you like your password to be? (select a number between 8 and 128)"
		),
		10
	);

	var password = generatePassword(
		lowerCase,
		upperCase,
		numChars,
		specCars,
		passLength,
		charArray
	);
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}
//function that clears the password field when button is clicked
function clearField() {
	var passwordText = document.querySelector("#password");
	passwordText.value = "";
}
//function that copies password to clipboard thanks to Johnathan and melinda for making me feel lazy!
function copyText() {
	var copyText = document.querySelector("#password");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button and clear field button
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", clearField);
copyTextbtn.addEventListener("click", copyText);
