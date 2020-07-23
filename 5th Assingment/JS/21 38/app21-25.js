// ch 21 to 25 
// task 1
/*var firstName = prompt("Please enter your First Name ");
var lastName = prompt("Please enter your Last Name ");
var fullName = firstName + " " + lastName;
alert("Hello "+fullName); */

//Task 2
/*var phone = prompt("What's your favorite mobile phone model?");
var n = phone.length;
document.write("<br>My favorite phone is: "+phone);
document.write("<br>Legnth of string: "+n); */

// Task 3 
/*var str = "Pakistani";
var n = str.indexOf("n");
document.write("<br> String: "+str);
document.write("<br>Index of n: "+n); */

//Task 4
/* var str = "Hello World";
var n = str.lastIndexOf("l");
document.write("<br> String: "+str);
document.write("<br>Index of n: "+n); */

// Task 5
/* var str = "Pakistani";
var n = str.charAt(3);
document.write("<br> String: "+str);
document.write("<br> 3rd index of the string: "+n); */ 

// Task 6
/* var firstName = prompt("Please enter your First Name ");
var lastName = prompt("Please enter your Last Name ");
var fullName = firstName.concat(" ", lastName);
document.write("<br> Hello "+fullName); */


//Task 7
/* var str = "Hyderabad";
var n = str.replace("Hyder", "Islam");
document.write("<br> City: "+str);
document.write("<br> After Replacement: "+n); */

//Task 8
/* var message = "Ali and Sami are best friends. They play cricket and football together";
var n = message.replace(/and/g, "&");
document.write("<br>"+message+"<br> After replacement: "+n); */
 
// Taks 9
/* var str = "472";
var n = 472;
document.write("<br> Value: " + str + "<br> Type: " + typeof str + "<br> Value: " + n + "<br> Type: " + typeof n); */

//Task 10
/* var a = prompt("Enter a word");
var b = a.toUpperCase();
document.write("<br> "+b); */

//Task 11
/* var a = prompt("Enter a word");
var b = a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
document.write("<br> "+b); */

//Task 12
/* var num = 25.36;
var a = num.toString().replace(".", "");
document.write("<br> Number: "+ num + "<br> Result: " + a + "<br> Type of result: " + typeof a);  */

//Task 13
/* var a = prompt("Enter your username");
var string;
var res = string.fromCharCode(33, 44, 46, 64);
var c = a.includes(res);
if (c  == true ) {
	alert("Please enter a valid username");
}
else {
	document.write("<br> Your username is: "+ a);
} */

//Task 14
/* var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABCD Bakery, What would you want to eat?");
var a = search.toLowerCase();
var find = items.indexOf(a, 0);
if (find != -1) {
document.write(a + " is avaialable at index " + find + " in our table");
} 
else {
	document.write("Your  item is not available at our Bakery");
} */

//Task 15
/*var password = prompt("Enter a pasword ");
function checkpassword (str,  i, n) {
	if (str == null) {
		return false;
	}
for (i = 0; i<=str.length(); i++) {
	n = str.charAt(i);
	if (n >= 'A' && n <= 'Z') 
		&&(n >= 'a' && n <= 'z') 
	&&(n >= 1 && n <= 9 ) {
		return true;
	}
return false;
}

var n = password.checkpassword();
if (n  == true) {
document.write("Your password is valid");
}
else if (n == false) {
	document.write("Please enter a valid password");
} unfinished*/

//Task 16


/* function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)

  document.write('The original string is: ', stringToSplit)
  console.log(arrayOfStrings.join(' \n '))
}



var z = "University of Karachi";
var a = z.split().join(' \n ') ; 
document.write(a); unfinished*/


//Task 17
/* var a = prompt("enter a word");
var b = a.length;
var c = a.charAt(b-1);
document.write("User input: "+a+"<br> last character: "+c); */


//Task 18
/* var str = "The quick brown fox jumps over the lazy dog";
var z = str.toLowerCase();
var a = z.match(/the/g);
var b = a.length;
document.write("The string is: " + str + " <br> There are "+b+" occurences of word 'the' in the string"); */




// done almost ASCII remaining












