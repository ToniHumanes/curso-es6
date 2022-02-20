

function newFnc(name, age, contry) {
    var name = name || 'Oscar';
    var age = age || 32;
    var contry = contry || 'España';
    console.log(name, age, contry);
    
}

function newFnc2(name = 'Toni', age = 26, contry = 'Andorra') {
    console.log(name, age, contry);
}

newFnc();
newFnc('Ricardi', 23, 'Colombia');

newFnc2();
newFnc2('Antonio', 100, 'Esparta');


let hellow = 'Hellow';
let word = 'World';
let epicPhrase = 'Epic 1: ' + hellow + ' ' + word;

console.log(epicPhrase)

const epicPhrase2 = `Epic 2: ${hellow} ${word}`;

console.log(epicPhrase2);
