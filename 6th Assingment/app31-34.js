// Task 1
/*
var a = new Date();
document.write("Today is "+a);
*/

// Task 2
/*
var d = new Date();
var a = d.getMonth();
if (a == 0) {
	document.write("Current month is January");
}
if (a == 1) {
	document.write("Current month is February");
}
if (a == 2) {
	document.write("Current month is March");
}
if (a == 3) {
	document.write("Current month is April");
}
if (a == 4) {
	document.write("Current month is May");
}
if (a == 5) {
	document.write("Current month is June");
}
if (a == 6) {
	document.write("Current month is July");
}
if (a == 7) {
	document.write("Current month is August");
}
if (a == 8) {
	document.write("Current month is September");
}
if (a == 9) {
	document.write("Current month is October");
}
if (a == 10) {
	document.write("Current month is November");
}
if (a == 11) {
	document.write("Current month is December");
}
else {
	document.write("The calender just got off");
}
*/

//Task 3
/*
var d = new Date();
var a = d.getDay();
if (a == 0) {
	document.write("Today is Sunday");
}
if (a == 1) {
	document.write("Today is Monday");
}
if (a == 2) {
	document.write("Today is Tuesday");
}
if (a == 3) {
	document.write("Today is Wednesday");
}
if (a == 4) {
	document.write("Today is Thursday");
}
if (a == 5) {
	document.write("Today is Friday");
}
if (a == 6) {
	document.write("Today is Saturday");
}
else {
	document.write("The calender just got off");
}
*/

// Task 4
/*
var d = new Date();
var a = d.getDay();
if (a == 6) {
	alert("Today is Funday!");
}
if (a == 0) {
	alert("Today is Funday!");
}
*/

// Task 5
/*
var a = new Date();
var d = a.getDate();
if (d <= 15) {
	document.write("It is first fifteen days of the month");
}
else {
	document.write("Last Days boys");
}
*/

//Task 6
/*
var a = new Date();
var b = a.getTime();
var c = b / 1000, d = c * 60;
document.write("Minutes lapsed since January 1, 1970 are "+d);
 unfinished */

//Task 7
/*
var a = new Date();
var b = a.getHours();
if (b <= 12 ) {
	alert("It's AM");
}
else {
	alert("It's PM");
}
*/

//Task 8
var a = new Date();
var b =  a.setFullYear(2020), c = a.setMonth(11), d = a.setDate(31), e = a.setHours("00:00:00");
var laterDate = e + b + c + d; 
document.write(laterDate);









