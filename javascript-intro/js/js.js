/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!');
console.log("hello world");

//her er en kommentar
/*her er også en kommentar*/


/*variabler*/
let a = "hej med dig";
console.log(a);

let b = "23";
let c= 23;

console.log(b+b);
console.log(c+c);

/*booleans: true / false*/
let julemandeneksistere = true;
console.log("findes julemanden?" + julemandeneksistere);

let aftensmad = false;
let vaerlse_23_booked = false;

/** kontrolstrukture */
if (new date().gethours() < 18) {
    document.getElementById("demo").innerHTML = "good day";
}


/**konkatenering: "klistre sammen" med + */
let header = "<h1>" + a + "</h1>";
console.log(header);

document.getElementById("hej").innerHTML = header;
document.getElementById("hej").style.color = blue;


