// Assignment Code
var generateBtn = document.querySelector("#generate");
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
var passLength = prompt(
	"how long would you like your password to be? (select a number between 8 and 128)"
);

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
function generatePassword(lc, uc, num, spc, pl, ca) {
	if (!lc && !uc && !num && !spc) {
		alert(" you must pick atleast one character type");
	}
	if (!lc) {
	}
}

// Write password to the #password input
function writePassword() {
	// you can create a function named generatePassword that creates the password

	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generatePassword(
	lowerCase,
	upperCase,
	numChars,
	specCars,
	passLength,
	charArray
);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
