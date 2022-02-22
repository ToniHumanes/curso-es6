
const obj = {
    name: 'Toni',
    age: 26,
    country: 'ES'
}

let {name, ...all} = obj
//console.log(name, all);


const obj2 = {
    name: 'Toni',
    surname: 'Humanes'
}

const obj3 = {
    ...obj2,
    country: 'ES'
}

console.log('OBJ3', obj3);


const promiseHello = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            setTimeout(() => resolve('Hello'), 3000);
        }else{
            reject(new Error('Error'))
        }
    });
}

promiseHello()
.then( data => console.log(data))
.catch( err => console.log(err))
.finally( () => console.log('Finalizoo!!'))

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day)


