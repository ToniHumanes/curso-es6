
// Generate dynamics imports

// const button = document.getElementById('btn');
// button.addEventListener('click', async () => {
//     const module = await import('./file.js');
//     module.hello();
// });

// utility for work with big numbers

const bigNumber = 900943540694000000n;
const anotherBigNumber = BigInt(900943540694000000);
// console.log(bigNumber)
// console.log(anotherBigNumber)

// diferencia con promise all:
// Promise all devolverá un error cuando cualquiera de las promesas sea rechazada.
// Promise allSettled devolverá las promesas que han sido satisfactorias.

// const promiseOne = new Promise((resolve, reject) => reject('reject'));
// const promiseTwo = new Promise((resolve, reject) => resolve('resolve'));
// const promiseThree = new Promise((resolve, reject) => resolve('resolve 2'));

// Promise.allSettled(promiseOne, promiseTwo, promiseThree)
// .then( data => console.log(data))
// .catch( err => console.error(err));


// Global this
// console.log('GlobalThis', globalThis)

// ?? operator, check if the value is null, if it is true, set value for default
const foo = null ?? 'default String';
const foo2 = 'string' ?? 'default String';
console.log(foo)
console.log(foo2)

// optional chaining

const user = {};
//console.log(user?.profile?.email // undefined
if( user?.profile?.email){
    console.log('email')
}else{
    console.log('fail')
}