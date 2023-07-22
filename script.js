// arrays

let mixedArray = [1, "apple", [1, 2, 3], true];
console.log(mixedArray);

// object

const user = {
	name: "chelly",
	age: 16,
	"favourite food": "fried rice",
	"shoe size": 38,
	"skin tone": "chocolate",
};

console.log(user);

// operators
// math operator(+ - / * % **)

let addition = 2 + 2;
let multiplication = 2 * 2;

// assignment operator (=)
//comparison operator (> < == != >=)

console.log(2 == 2);
console.log(10 != 2);
console.log(!true);
console.log("1" == 1);

// conditional statement
const age = 16;
if (age == 18) {
	console.log(adult);
} else {
	console.log("under age");
}

// ternery operator
isMarried = false;

isMarried == true ? console.log("I am married") : console.log("single");

// string concatination

let firstName = "Hope";
let lastName = "Chelly";

let fullName = firstName + " " + lastName;

console.log(fullName);

// function
// function declaration
function sum(num1, num2) {
	return num1 + num2;
}

sum(2, 3);

let add = sum(2, 8);
console.log(add);

// strings and string method

let userName = "mitchell";
console.log(userName.length);

console.log(typeof userName);

console.log(userName.toUpperCase());

console.log(userName[2]);

console.log(userName.indexOf("e"));

// slice
console.log(userName.slice(0, 5));

let str = "i love javascript";

str.lastIndexOf("javascript").toUpperCase;

console.log(str);

// dom
let emptyPara = document.getElementById("para");

emptyPara.textContent = "i love javascript";

emptyPara.style =
	"color: blue; font-size: 3rem; text-align: center; text-transform: capitalize;";

let myBtn = document.getElementById("btn");

let btnWrapper = document.querySelector(".button-div");

btnWrapper.style = "margin-inline: auto display: flex; flex-direction: column";

myBtn.textContent = "add 2";
myBtn.style = "border: none; padding: 1rem; color: darkgreen";

let divContainer = document.querySelector(".div");
divContainer.innerHTML = '<p id="div-p">0</p>';
let pTag = document.querySelector("#div-p");

function addtwo() {
	pTag.textContent = Number(pTag.textContent) + 2;
}

myBtn.addEventListener("click", addtwo);

let imgDiv = document.querySelector(".img-div");
imgDiv.style =
	"width: 35%; aspect-ratio: 1; margin-inline: auto; display: flex; flex-direction:column;";

let closeFace = document.querySelector("#close-face");
let openFace = document.querySelector("#open-face");
let toggleBtn = document.querySelector("#toggle-btn");

closeFace.style.display = "none";
let close = false;

function toggleImg() {
	if (close == false) {
		closeFace.style.display = "inline-block";
		openFace.style.display = "none";
		close = true;
	} else {
		closeFace.style.display = "none";
		openFace.style.display = "inline-block";
		close = false;
	}
}

toggleBtn.addEventListener("click", toggleImg);
