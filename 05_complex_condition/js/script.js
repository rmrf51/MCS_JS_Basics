console.log('You are at '+window.location);

let night = false;
let tired = false;
//let sw = prompt('15s или 16?');
let sw = 16;

if(night || tired) {
	console.log('relax');
} else {
	console.log('code a little bit');
}

night ? console.log("night") : console.log("not night"); 

switch (sw) {
	case "15":
	console.log('15');
	break;
	case 16:
	console.log('AAAAAAA');
	break;
	default:
	console.log("DDDDD");
	break;
}

function sayHi(name) {
	//pr = prompt("Шо?");
	pr = 'kek';
	console.log(name+' '+pr);
	return pr;
}

console.log(sayHi("N"));

//анонимная функция

let myFunc = function(element, color) {
	element.style.backgroundColor = color;
}

const heading = document.querySelector('h1');
const par = document.querySelector('p');


myFunc(heading, 'black');
myFunc(par, '#0f0')


//стрелочные функции

let myText = function(element, text){
	element.innerHTML = text;
}

let myText1 = (element, text) =>{
	element.innerHTML = text;
}

myText(document.body,'kk');
myText1(document.body, 'kuk');

// Области видимости

var a = 'hi';

function func1() {
	a = 'hello';
	return a;
}

console.log(a);

function func2(){
	var b = 3;
	console.log(b);
}

func2();

if(true) {
	var c = 5;
	let l = 7;
}

console.log(c); // видно
console.log(l) // не видно (ошибка)

