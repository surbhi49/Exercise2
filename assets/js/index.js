//  Change all the string characters to capital letters using toUpperCase() metho

let string = 'Surbhi sahu' 
console.log(string.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method 

let name = 'INDIA'
console.log(string.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method 

let value = 'vivekanandji' 
console.log(value.substr(5,7)) 
console.log(value.substring(0,5))

//Slice out the phrase good teacher from Murtaza is good teacher. 

let quality = 'Murtuza is a good teacher'
console.log(quality.slice(0))
console.log(quality.slice(12))

//Check if the string contains a word Script using includes() method 
let fullname = 'Surbhi Sahu'
console.log(fullname.includes('surbhi','sahu'))
console.log(fullname.includes('Surbhi','Sahu'))

// Split the string into an array using split() method 
let myname='Surbhi sahu'
console.log(myname.split['surbhi','sahu'])
console.log(myname.split(""))

let country='india,America,Rusia,'
console.log(country.split['india','America','Rusia,'])
console.log(country.split(','))

// Split the string Murtaza is awesome in programming at the space using split() method 
let good=' Murtaza is awesome in programming '
console.log(good.split('murtuza,is,awesome,in,programming'))
console.log(good.split(' '))

/*'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it 
to an array.*/
let countries='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon,'
console.log(countries.split['Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'])
console.log(countries.split(','))

//Change you will learn JavaScript to you will learn Python using replace() method. 
 
let sub='javascript'
console.log(sub.replace('javascript','python'))

//What is character at index 5 in ' JavaScript' string? Use charAt() method. 
let strng="javascript"
console.log(strng.charAt(5))

// What is the character code of J in JavaScript' string using charCodeAt() 
let Subject='javascript'
console.log(strng.charCodeAt('j'))

//Use indexOf to determine the position of the first occurrence of a in JavaScripyt
//Use lastIndexOf to determine the position of the last occurrence of a in JavaScript.
let word='javascript'
console.log(word.indexOf('java'))
console.log(word.lastIndexOf('script'))

/* Use indexOf to find the position of the first occurrence of the word because in the following 
sentence:'You cannot end a sentence with because because because is a conjunction */

/* Use lastIndexOf to find the position of the last occurrence of the word because in the following 
sentence:'You cannot end a sentence with because because because is a conjunction*/

/*  Use search to find the position of the first occurrence of the word because in the following 
sentence:'You cannot end a sentence with because because because is a conjunction' */

let sen='You cannot end a sentence with because because because is a conjunction'
console.log(sen.indexOf('you cant end a sentence with because because because is a conjucton'))
console.log(sen.lastIndexOf('you cant end a sentence with because because because is a conjucton'))
console.log(sen.search('because'))

/* Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' JavaScript '.*/
  
let trm='javascript'
console.log(trm.trim('        javascript     '))

//Use startsWith() method with the string JavaScript is awesome and make the result true
//Use endsWith() method with the string JavaScript is awesome and make the result true
let sentence='javascript is awesome'
console.log(sentence.startsWith('javascript is awesome'))
console.log(sentence.endsWith('javascript is awesome'))

//Use concat() and merge ' JavaScript is' and 'awesome' to a single string, 'JavaScript is awesome
 let aws='JavaScript is awesome'
 console.log(aws.concat('javascript is','awesome')) 
 
// Use repeat() method to print 30 Days Of JavaScript 2 times 
let repet='30 Days of Javascript'
console.log(repet.repeat('2'))

// Check if 'on' is found in both python and jargon 

let find='python and jargon'
console.log(find.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence. 

let sent='I hope this course is not full of jargon'
console.log(sent.includes('jargon'))

//Access the 'JavaScript' string characters using a random number. 

/*/ Use console.log() and escape characters to print the following pattern. 
 1 1 1 1 1 
2 1 2 4 8 
3 1 3 9 27 
4 1 4 16 64 
5 1 5 25 125 */

let esc='o 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125\n '
console.log(esc)

/*Use substr to slice out the phrase because because because from the following sentence: 'You cannot 
end a sentence with because because because is a conjunction */

let senten='You cannot end a sentence with because because because is a conjunction'
console.log(senten.substr(30,25))




