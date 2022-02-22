


const data = {
    front: 'Toni',
    back: 'Antonio',
    design: 'Alex'
}

const entries = Object.entries(data);
// console.log(entries);
// // para saber cuantos items tiene un object
// console.log(entries.length)

const values = Object.values(data);
// console.log(values)

const string = 'Hellow';
// console.log(string.padStart(7, 'hi'));
// console.log(string.padEnd(12, '----'))

// asycn await

const hellowWorld = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('Holaaaa')
            }, 3000);
        }else{
            new Error('error')
        }
    })
}

const helloAsync = async () => {
    // con await, espera a que se resuelva y no deja seguir el código hasta que este completada

    const hello = await hellowWorld();

    // con una promesa, ejecuta proceso terminado y cuando se resuelve devuelve el valor de la promesa
    // const hello = hellowWorld();
    // hello.then( data => console.log(data));
    console.log(hello);
    console.log('proceso terminado')
}

helloAsync();

const anotherFnc = async () => {
    try {
        const hellow = await hellowWorld();
        console.log(hellow + z);
    } catch (error) {
        console.error(error);
    }
} 
anotherFnc();