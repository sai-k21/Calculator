var a = [0, 1, 15, 3, 17, 64, 153, 1634, 92727];

var b = []; var  c= []; var  d= []; var e = []; var f= []; var l = [];


 armStrong(a);
 primeNumber(a);
 evenOrOdd(a);

//Armstrong Number

function armStrong(a) {
    for(var i = 0; i < a.length; i++) {

    var numberOfDigits = `${a[i]}`.length;
    let temp = a[i];
    let sum = 0;

    while (temp > 0) {

        let remainder = temp % 10;

        sum += remainder ** numberOfDigits;
        
        temp = parseInt(temp / 10); 
    }

    if (sum == a[i]) {
        b.push(a[i]);
    }
    else {
        c.push(a[i]);
    }
  }
  console.log("List of Armstrong numbers =>", b);
  console.log("list of non Armstrong numbers =>", c);
}



// prime number 
function primeNumber(a) {
 
  for( var j = 0; j < a.length; j++){
    let number = parseInt(`${a[j]}`);
    let isPrime = true;


    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    else if (number > 1) {        
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            d.push(number);
            //console.log(`${number} is a prime number`);
        } else {
          e.push(number);          
        }
    }
    else {
        console.log("The number is not a prime number.");
    }
  }
  console.log("List of prime numbers", d);
  console.log("list of non prime numbers", e);
}

// Even and odd number 
function evenOrOdd(a) {
  for(k = 0; k < a.length; k++){
    if(a[k] % 2 == 0){
      f.push(a[k]);
    }
    else{
      l.push(a[k]);
    }
  }
  console.log("list of even numbers", f);
  console.log("list of odd numbers", l);

}




























































/* let sum =0;
while (true) {

    let value = +prompt("Enter a number", '');
  
    if (!value) break; // (*)
  
    sum += value;
  
}
alert( 'Sum: ' + sum ); */


/* outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
alert('Done!'); */


















































































/* let admin, name;
name = "john";
admin = name;

alert(admin); */
/* 
let planet = "earth";

var userName = "wick"; */
/* 
let n = 123;
n =2023.4;

alert(Infinity); */

/* let name = 'john';

alert(`hello ${name}!`);

alert("the result is ${1 + 2}"); */

/* 
let name = "sai kumar";
alert(`name is ${1}`);
alert(`name is ${"name"}`);
alert(`name is ${name}`); */

// result = prompt(title, [default]);

/* result = prompt("My ancestor age is ", 100);

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old`); */

/* let test = prompt("what is your name", '');

alert(test) */;

























/* alert('I am JavaScript!!')
alert("very fast");
alert(3 +
1
+ 2);
[1,2].forEach(alert); */

/* let message = "hello world!";
let hello;
hello = message;


alert(message);
alert(hello); */
/* 
const myBirthday = '18-08-1999';

myBirthday = '23-10-1990';

alert(myBirthday); */

/* 
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;

alert(color); */