// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d')

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

console.log('a');

console.log('b');

function func1() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {console.log('c'); res()}, 3000)
})
    return promise;
}

function func2() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {console.log('d'); res()}, 0)
    })
    return promise;
}

async function callFunc1() {
    const response = await func1();
    const response2 = await func2();
    console.log('e');
}

callFunc1();

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const sequence = async () => {
//   console.log('a');
//   console.log('b');
//   await delay(3000);
//   console.log('c');

//   await delay(0);
//   console.log('d');


//   console.log('e');
// };

// sequence();
