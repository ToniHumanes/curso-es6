
// Flat Aplanar arrays

let array = [1,2,3,4, [5,6,7]];
console.log(array.flat(2));

// Aplana array modificando el return

let arrayMap = [1,2,4,5,6];
console.log(arrayMap.flatMap( value => [value, value * 2]));


// remove spaces of string in the init and end
let stringSpace = '           hellow world          ';
console.log(stringSpace);
console.log('trim: ', stringSpace.trimStart(), stringSpace.trimEnd());

// optionals catch binding

try {
    
} catch {
 // catch without param error   
}

// convert arrays in objetc
let entries = [['name', 'Oscar'], ['page', 23]];
console.log(Object.fromEntries(entries));

// access description of symbol
let mysmb = `My symbol`;
let symb = Symbol(mysmb);
console.log(symb.description)