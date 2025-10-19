// строгий режим
'use strict'


// ----------------
console.log('Дуля');

let message1 = 'Ku'
console.log(message1);

message1 = 'Ku-ku'
console.log(message1);

// ------------------

const year = 2014;

if (year === 2025) {
	console.log('Ура! Вчимо  JavaScript!');
}else if (year === 3000){
console.log('Its too late');
}else{
console.log('Який це рік? Зміни параметр...');
} 


// type string
const mes='Hello';
const name = 'Krus';
const how = 'How are you?'

let message = `${mes}, ${name}, ${how}`;
console.log(message);
message ='Bye'
console.log(message);


const me = 'Dulya';
const admin = me;
console.log(admin);
 
const posX = 50
const posY = -30
const posZ = 1.45
const point = (posX + posY + posZ) * 2 / posX

console.log(point);
console.log('Word' / 50);
console.log(50 / 0);
console.log(-50 / 0);

const ageYear = 38;
const isChild = ageYear < 18;
console.log(`isChild-${isChild}`);

let grit
console.log(grit);

// type Bigint
// -9007199254740991 < number < 9007199254740991 
console.log(99000000000000000091n + 1n);
console.log(99000000000000000091n + 4n);

// type object
const user = {
	login: '123',
	password: 'qwerty'
}

console.log(typeof 100); //number
console.log(typeof 'lol'); //string
console.log(typeof 100n); //bigint
console.log(typeof null); //object

// Завжди false
console.log (Boolean(0));
console.log (Boolean(NaN));
console.log (Boolean(''));
console.log (Boolean(null));
console.log (Boolean(undefined));
// Всі остальні значення  true;
console.log (Boolean(' '));

// Exercise
const num = 111
const str = '222'
const rez = num + str

console.log(rez); //111222
console.log(typeof(rez)); //string
// ----


console.log('16' / '8');//2
console.log(typeof('20' / '4'));//number
//----
const isAdult = false
console.log(isAdult);//false
console.log(String(isAdult));//false(string)
//----
console.log(typeof Number('123'));
// or
console.log(typeof +'123');

// /-----
const result = 1 + -2 - 3 * +'4' / 5 ** 2
console.log(result);
//1 + -2 - 3 * 4 / 5 ** 2
//1 + -2 - 3 * 4 / 25
//1 + -2 - 12 / 25
//1 + -2 - 0.48
//-1 - 0.48
//-1.48

//----Інкримент

let count = 1
count += 2
console.log(count);//3

//----Дикримент. постфіксна форма
let countt = 10
countt--
countt--
console.log(countt);//8
countt++
countt++
countt++
console.log(countt);//11
// /----Дикримент. префіксна форма
let newCount = ++countt
console.log(countt);//12
console.log(newCount);//12