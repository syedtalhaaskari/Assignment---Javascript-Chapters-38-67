// // Assignment of Chapter 38-42
// // Task 1
// function pow(a, b) {
//     return Math.pow(a, b);
// }
// document.write(pow(2, 3));

// // Task 2
// function leapYear(year) {
//     var leap = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
//     if (leap === true) {
//         document.write("Given year is a leap year<br>");
//     }
//     else {
//         document.write("Given year is not a leap year<br>");
//     }
// }
// var year = prompt("Enter year: ");
// leapYear(year);

// // Task 3
// function S(a, b, c) {
//     return (a + b + c) / 2;
// }
// function area(a, b, c) {
//     S = S(a, b, c);
//     return S * (S - a) * (S - b) * (S - c);
// }
// var a = +prompt("Enter a: ");
// var b = +prompt("Enter b: ");
// var c = +prompt("Enter c: ");
// var area = area(a, b, c);
// document.write("Area of Triangle whose sides are " + a + ", " + b + ", " + c + " is " + area + "<br>");

// // Task 4
// function average(marks) {
//     var avg = marks.reduce(function(a, b){
//         return a + b;
//     }, 0) / marks.length;
//     return Math.round(avg);
// }
// function percentage(marks) {
//     var total = 300;
//     var perc = marks.reduce(function(a, b) {
//         return a + b;
//     }, 0) * 100 / total;
//     return Math.round(perc);
// }
// function mainFunction(marks) {
//     var avg = average(marks);
//     var perc = percentage(marks);
//     document.write("Average marks of student is " + avg + "<br>");
//     document.write("Percentage of student is " + perc + "%<br>");
// }
// var marks = []
// while (true) {
//     var a = prompt("Enter Marks ('q' to quit): ");
//     if (a.toLowerCase() === 'q') {
//         break;
//     }
//     else {
//         marks.push(+a);
//     }
// }
// mainFunction(marks);

// // Task 5
// function findIndex(chr, msg) {
//     var index = -1;
//     for (i = 0; i < msg.length; i++) {
//         if (chr === msg[i].toLowerCase()){
//             index = i;
//             break;
//         }
//     }
//     return index;
// }
// var msg = prompt("Enter a phrase: ");
// var chr = prompt("Enter character to find: ");
// var index = findIndex(chr, msg);
// if (index === -1) {
//     document.write("\"" + chr + "\" in string \"" + msg + "\" not found<br>");
// }
// else {
//     document.write("\"" + chr + "\" in string \"" + msg + "\" is found at \"" + index + "\" index<br>");
// }

// // Task 6
// function deleteVowels(sentence) {
//     sentence = sentence.replace(/[aeiou]/ig, "");
//     return sentence;
// }
// var string = prompt("Enter String: ");
// var vString = deleteVowels(string);
// document.write("With vowels:<br>");
// document.write(string + "<br><br>");
// document.write("Without vowels:<br>");
// document.write(vString + "<br><br>");

// // Task 7
// function find2Vowels(string) {
//     var occurences = [];
//     occurences.push(string.match(/[aeiou]{2}/gi));
//     return occurences;
// }
// var string = "Pleases read this application and give me gratuity";
// var occurences = find2Vowels(string);
// document.write("Such occurrences are " + occurences + "<br>");

// // Task 8
// function converterToMeter(distance) {
//     var meter = 0;
//     if (distance < 0) {
//         document.write("Distance can never be less than zero<br>");
//     }
//     else {
//         meter = distance * 1000;
//         document.write(distance + "km = " + meter + "m<br>");
//     }
// }
// function converterToFeet(distance) {
//     var feet = 0;
//     if (distance < 0) {
//         document.write("Distance can never be less than zero<br>");
//     }
//     else {
//         feet = distance * 3280.84;
//         document.write(distance + "km = " + feet + "ft<br>");
//     }
// }
// function converterToInches(distance) {
//     var inch = 0;
//     if (distance < 0) {
//         document.write("Distance can never be less than zero<br>");
//     }
//     else {
//         inch = distance * 39370.08;
//         document.write(distance + "km = " + inch + "inch<br>");
//     }
// }
// function converterToCentimeter(distance) {
//     var centimeter = 0;
//     if (distance < 0) {
//         document.write("Distance can never be less than zero<br>");
//     }
//     else {
//         centimeter = distance * 1000000.032;
//         document.write(distance + "km = " + centimeter + "cm<br>");
//     }
// }
// var km = +prompt("Enter distance in kilometers: ");
// alert("Enter 1 to convert in meters\nEnter 2 to convert in feet\nEnter 3 to convert in inches\nEnter 4 to convert in centimeter\n")
// var op = +prompt("Enter operation number:");
// switch(op) {
//     case 1:
//         converterToMeter(km);
//         break;
//     case 2:
//         converterToFeet(km);
//         break;
//     case 3:
//         converterToInches(km);
//         break;
//     case 4:
//         converterToCentimeter(km);
//         break;
//     default:
//         document.write("Invalid input<br>");
// }

// // Task 9
// function overPay(hour) {
//     var overPayRate = 12;
//     var weekHour = 40;
//     var over = hour - weekHour;
//     var overPay = 0;
//     if (over > 0) {
//         overPay = over * overPayRate;
//     }
//     return overPay;
// }
// var hour = Math.round(+prompt("Enter your weekly working hour: "));
// var overPay = overPay(hour);
// document.write("Your over pay is " + overPay);

// // Task 10
// function currencyChange(amount) {
//     var currency10 = 10;
//     var currency50 = 50;
//     var currency100 = 100;
//     var remain = 0;
//     var hundred = Math.floor(amount / currency100);
//     remain = amount % currency100;
//     var fifty = Math.floor(remain / currency50);
//     remain = amount % currency50;
//     var ten = Math.floor(remain / currency10);
//     document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes & " + ten + " ten notes<br>");
// }
// var amount = +prompt("Enter amount to withdraw");
// currencyChange(amount);

// // Assignment of Chapter 43-48
// // Task 1
// function alertBox() {
//     alert("Kesa Diya");
// }

// // Task 2
// function purchased() {
//     alert("Thanks for purchasing a phone from us");
// }

// // Task 3
// function SomeDeleteRowFunction(o) {
//     var p = o.parentNode.parentNode;
//     p.parentNode.removeChild(p);
//     var x = document.getElementsByTagName("tr");
//     var i;
//     for (i = 1; i <= x.length; i++) {
//         x[i].firstChild.innerHTML = i;
//     }
// }
// var x = document.getElementsByTagName("tr");
// var i;
// for (i = 1; i < x.length; i++) {
//     x[i].firstChild.innerHTML = i;
// }

// // Task 4
// // Available in index.html

// // Task 5
// var counter = 0;
// var counterHeading = document.getElementById("counter");
// var interval;
// var button1 = document.getElementById("increase");
// var button2 = document.getElementById("decrease");
// button2.disabled = true;
// function increaseCounter() {
//     clearInterval(interval);
//     button1.disabled = true;
//     button2.disabled = false;
//     function timer() {
//         counter++;
//         counterHeading.innerHTML = counter;
//     }
//     interval = setInterval(timer, 1000);
// }
// function decreaseCounter() {
//     clearInterval(interval);
//     button1.disabled = false;
//     button2.disabled = true;
//     function timer() {
//         counter--;
//         if (counter <= 0) {
//             clearInterval(interval);
//         }
//         counterHeading.innerHTML = counter;
//     }
//     interval = setInterval(timer, 1000);
// }

// // Assignment of Chapter 49-52
// // Task 1
// function done(){
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     var contact = document.getElementById("contact");
//     document.write("<br>Username: " + name.value + "<br>");
//     document.write("Email Address: " + email.value + "<br>");
//     document.write("Contact No.: " + contact.value + "<br>");
// }

// // Task 2
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } 
//     else {
//         dots.style.display = "none";
//         moreText.style.display = "inline";
//     }
// }

// // Task 3
// function SomeDeleteRowFunction(o) {
//     var p = o.parentNode.parentNode;
//     p.parentNode.removeChild(p);
//     var x = document.getElementsByTagName("tr");
//     var i;
//     for (i = 1; i <= x.length; i++) {
//         x[i].firstChild.innerHTML = i;
//     }
// }
// function SomeEditRowFunction(o) {
//     var name = o.parentNode.parentNode.childNodes[1];
//     var student_class = o.parentNode.parentNode.childNodes[2];
    
//     name.innerHTML = prompt("Enter Student Name", name.innerHTML);
//     student_class.innerHTML = prompt("Enter Student Class", student_class.innerHTML);
// }
// var x = document.getElementsByTagName("tr");
// var i;
// for (i = 1; i < x.length; i++) {
//     x[i].firstChild.innerHTML = i;
// }

// // Assignment of Chapter 53-58
// // Task 1
// function largeImage(e) {
//     var image = document.getElementById("modalImage");
//     image.src = e.src;
//     console.log(image.src);
// }

// // Task 2
// function zoomIn() {
//     var txt = document.getElementById('text');
//     var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     var currentSize = parseFloat(style);
//     if (currentSize >= 200) {
//         alert("Maximum Font Size Limit Reached");
//     }
//     else {
//         txt.style.fontSize = (currentSize + 10) + 'px';
//     }
//     txt.style.fontSize = (currentSize + 10) + 'px';
// }
// function zoomOut() {
//     var txt = document.getElementById('text');
//     var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     var currentSize = parseFloat(style);
//     if (currentSize <= 10) {
//         alert("Minimum Font Size Limit Reached");
//     }
//     else {
//         txt.style.fontSize = (currentSize - 10) + 'px';
//     }
// }

// // Assignment of Chapter 58-67
// // Task 1
// var main_content = document.getElementById("main-content");
// document.write(main_content.children + "<br><br>");
// var render = document.getElementsByClassName("render");
// for (var i = 0; i < render.length; i++) {
//     document.write(render[i].innerHTML + "<br>");
// }
// var first_name = document.getElementById("first-name");
// var text = "Me Nhi Bataunga";
// first_name.setAttribute("value", text);
// var last_name = document.getElementById("last-name");
// text = "Ye Tw Hoga";
// last_name.setAttribute("value", text);
// var email = document.getElementById("email");
// text = "MeNhiBataungaYeTwHoga@gmail.com";
// email.setAttribute("value", text);

// // Task 2
// document.write("<br>What is node type of element having id “form-content”<br>");
// var form_content = document.getElementById("form-content");
// document.write(form_content.nodeType + "<br>");
// document.write("<br>Show node type of element having id “lastName” and its child node<br>");
// var lastName = document.getElementById("lastName");
// document.write(lastName.nodeType + "<br>");
// document.write(lastName.childNodes[0].nodeType + "<br>");
// document.write("<br>Update child node of element having id “lastName”<br>");
// lastName.childNodes[0].innerHTML = "Haye Allah";
// document.write(lastName.childNodes[0].innerHTML + "<br>");
// var main_content = document.getElementById("main-content");
// document.write("<br>Get First and last child of id “main-content”<br>");
// var first_child = main_content.firstChild;
// var last_child = main_content.lastChild;
// document.write(first_child.innerHTML + "<br>");
// document.write(last_child.innerHTML + "<br>");
// document.write("<br>Get next and previous siblings of id “lastName”<br>");
// var next_sibling = lastName.nextSibling;
// var previous_sibling = lastName.previousSibling;
// document.write(next_sibling.innerHTML + "<br>");
// document.write(previous_sibling.innerHTML + "<br>");
// document.write("<br>Get parent node and node type of element having id “email”<br>");
// var email = document.getElementById("email");
// var parent_email = email.parentNode;
// var email_type = email.nodeType;
// document.write(parent_email + "<br>");
// document.write(email_type + "<br>");