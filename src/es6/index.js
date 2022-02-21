// Parametros opcionales

function newFnc(name, age, contry) {
    var name = name || 'Oscar';
    var age = age || 32;
    var contry = contry || 'España';
    console.log(name, age, contry);

}

function newFnc2(name = 'Toni', age = 26, contry = 'Andorra') {
    console.log(name, age, contry);
}

// newFnc();
// newFnc('Ricardi', 23, 'Colombia');

// newFnc2();
// newFnc2('Antonio', 100, 'Esparta');

let hellow = 'Hellow';
let word = 'World';
let epicPhrase = 'Epic 1: ' + hellow + ' ' + word;

// console.log(epicPhrase)

const epicPhrase2 = `Epic 2: ${hellow} ${word}`;

// console.log(epicPhrase2);

// multilinea

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nPellentesque id mollis nulla, vel lobortis mi.' + 'Pellentesque tincidunt vel augue sed feugiat.';

// es6

let lorem2 = `Otra frase epic que necesitamos
y esto es otra linea magicamente`;

// console.log(lorem);
// console.log(lorem2)

// Destructuración

let person = {
    name: 'Oscar',
    age: '23',
    contry: 'ESP'
}

// console.log(person.name, person.age)

let {
    name,
    age,
    contry
} = person;
// console.log(name, age, contry);

// Spread operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team2, ...team1];

//console.log(education);

// Scope let

{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global Let';
    // console.log(globalLet);
}

// console.log(globalVar);

// rules const

// const a = 'b';
// a = 'a';
// console.log(a)



let nombre = 'Toni';
let edad = 26;
// es5
obj = {
    nombre: nombre,
    edad: edad
};
// es6
obj2 = {
    nombre,
    edad
}
console.log(obj2);

// Arrow functions

const names = [{
        name: 'Toni',
        age: 26
    },
    {
        name: 'Antonio',
        age: 30
    }
];

let listOfNames = names.map( function(item){
    //console.log(item.name);
})  

let listOfNames2 = names.map(item => console.log('ES6: ', item.name))

// Promises

const hellowPromise = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            resolve('Promesa: todo correcto')
        }else{
            reject('Promesa: Errorrrr');
        }
    })
}

hellowPromise()
.then( (resp) => {
    console.log(resp)
}).catch( err => {
    console.error(err);
});