// //Object destructuring

// const person = {
//     name: 'Jane',
//     age: 18,
//     location: {
//         city: 'Babe City',
//         temp: 69
//     }
// };

// const {name: firstName = 'anonymus', age, } = person;      // name = '' will give default value in case there is no name
// const { city, temp: temperature } = person.location; // temp: temperature -> will rename temp 

// console.log(`${firstName} is ${age}.`);
// console.log(`It's ${temperature} in ${city}`);


// const book = {
//     title: 'BOooook',
//     author: 'Dude',
//     publisher: {
//        // name: 'Butt'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);  

//Array destructuring

const address = ['1369 B street ', 'Babe City', 'DickVania', '69696'];

const [, city, state = 'NY '] = address; //skips not written in items, but will notice that they are there (I skip street so I open with ,)

console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (iced)', '$2', '$3.5', '$2.75'];

const [baverage, , medium ] = item

console.log(`A medium ${baverage} cost ${medium}`);






