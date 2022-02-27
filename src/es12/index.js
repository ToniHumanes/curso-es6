
const string = "Js es maravilloso, con Js puedo crear el futuro de la web";

// only replace the first coincidence 
// const replaceString = string.replace('Js', 'Phyton')
// replace all the coincidences 
const replaceString = string.replaceAll('Js', 'Python')
console.log(replaceString);

// private methods 
// add # in the method
class Message{
    #show(value){
        console.log(value)
    }
}

// const message = new Message();
// message.show('Helloooooooo')


// Promise any
// Only return the first promise that is resolved

const promise1 = new Promise( (resolve, reject) => {
    reject('1')
});
const promise2 = new Promise( (resolve, reject) => {
    resolve('2')
});
const promise3 = new Promise( (resolve, reject) => {
    resolve('3')
});

Promise.any([promise1, promise2, promise3])
.then( (dataArray) => {
    console.log(dataArray)
});


// añade una referencia debil a un obj, y así no pasa por el garabe colector de js, liberamos memoria

class AnyClass{
    constructor(){
        this.ref = new WeakRef({ref: 'ref'})
    }
}

// const ref = new AnyClass();
// console.log(ref)

// news operators

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse)
console.log(isTrue ||= isFalse)
console.log(isTrue ??= isFalse)





