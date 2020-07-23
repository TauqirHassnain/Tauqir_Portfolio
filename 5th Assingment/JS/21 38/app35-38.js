//Task 1
/*
function displayDate() {
 date = new Date();
 document.write(date);
}

var a = displayDate();
*/

//Task 2
/*
function greet () {
var firstName = prompt("Please enter your First Name");
var lastName = prompt("Please enter your Last Name");
alert("Hello "+firstName+" "+lastName);
}

var a = greet();
*/

//Task 3
/*
var num=prompt("Enter two numbers you want to add and seperate them by a comma","60,170"),
     num1=num.split(",")[0],
     num2=num.split(",")[1];
var sum = num1 + num2;
alert("The sum is "+sum);
*/
/*
function sum () {
	var m = prompt("Enter a number ");
	var n = prompt("Enter the number you want to add ");
	var num1 = parseInt(m), num2 = parseInt(n);
	var a = num1 + num2
	alert(a);
}
var b = sum();
*/

//Task 4
/*
function calculate () {

}
*/


//Task 5 
/*
function square() {
	var a = prompt("Enter the number you want the square of");
	var n = parseInt(a);
	var b = n * n;
	alert("The square of "+n+" is "+b);
}

var z = square();
*/

//Task 6
/*
function factorial(n) {
	//base case
	if ( n == 0 || n == 1){
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}
var a = prompt("enter a number");
let n = parseInt(a);
var ans = factorial(n);
alert("the factorial of "+n+ " is "+ans);
*/


//Task 7
/*
function counter(a, b) {
		for (i = q; i <= y; i++) {
			document.write(i);
		}
var w = prompt("enter a start number");
var x = prompt("enter an end number");
let a = parseInt(w);
let b = parseInt(x);
var z = counter(a, b);
}
*/

//Task 8
/*
function hypotenuse(a, b) {

function sqr(x) {
	return x*x;
}
return Math.sqrt(sqr(a) + sqr(b));
}
var s = prompt("enter the base value");
var d = prompt("enter the perpendicular value");
var q = parseFloat(s), w = parseFloat(d);

var z = hypotenuse(q, w);
alert(z);
*/


// Task 9
/*
function area(w, h) {
	//parseFloat(w);
	//parseFloat(h);
	return w*h;

}
var a = prompt("Enter the width ");
var b = prompt("Enter the height ");
var z = area(a, b);
alert("The area of the given triangle is "+z);
*/

//Task 10
/*
function check_palindrome(string) {
	var b = string.toLowerCase();
var a = b.split("");
// document.write("The string has been split "+a);
var r = a.reverse();
//document.write("The string has been reversed "+r);
if (a == r) {
	alert("the string '" + string + "' is a palindrome");
}
else {
	alert("This string " + string + " is not a palindrome");
}
}

var a = "Madam";
var z = check_palindrome(a);
alert(z);
*/


//Task 11
function titleCase(string) {
	let a = string.split(" ");
	function shift(a) {
		var c = a.toString();
		
	var d =	c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
	return d;
	}
	let b =  a.forEach(shift);
return b;
}

var a = "the quick brown fox jumps over the lazy dog";
var b = titleCase(a);
alert(b);




