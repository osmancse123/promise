// async function add(a, b) {
//     if (a < 10) return Promise.reject('a is smaller value then 10')
//     return Promise.resolve(a + b)
// }
// add(4, 5)
// .then(data => console.log('Data is =>', data))
// .catch(err => console.log('Error is:', err))


async function just() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('yes I am')
        }, 3000)
    }) 
}
// console.log(just());
// just()
// .then(data => console.log(data))
// .catch(err => console.log(err)) 

// async function init() {
//     let data = await just()
//     console.log(data);
// }
// init();

(async function init() {
    try {
        let data = await just()
        console.log(data);
    } catch (err) {
        console.log(err);
    }
})()