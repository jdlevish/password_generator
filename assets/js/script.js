// Assignment Code
var generateBtn = document.querySelector("#generate");
// declare variables and setup user prompts, confirms and alerts
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

// multi dimensional array containing all characters

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
var passArray = [];
//function containing password generation logic
function generatePassword(lc, uc, num, spc, pl, ca) {
	//checks that user chose atleast one character set

	if (isNaN(pl)) {
		alert("you must select a number ");
	}
	if (!lc && !uc && !num && !spc) {
		alert(" you must pick atleast one character type");
	}

	if (pl < 8 || pl > 128) {
		alert("you must select a number between 8 and 128");
	}

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
		passArray.push(selectArray[Math.floor(Math.random() * selectArray.length)]);
	}
	//returns passArray as a string
	return passArray.join("");
}
// Write password to the #password input
function writePassword() {
	// you can create a function named generatePassword that creates the password

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
