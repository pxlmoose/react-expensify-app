
// //child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//subsribed to expenses
// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//         description: 'expense 1',
//         note: 'note 1',
//         amount: 123,
//         createdAt: 5233
//     });

// database.ref('expenses').push({
//         description: 'expense 2',
//         note: 'note 2',
//         amount: 11423,
//         createdAt: 121453
//     });

// database.ref('expenses').push({
//         description: 'expense 3',
//         note: 'note 3',
//         amount: 12141413,
//         createdAt: 5212333
//     });
// database.ref('notes/-LFTV7NUiDfPsjcZGZC7').remove();


// database.ref('notes').push({
//     title: 'new title',
//     body: 'some changed text'
// });

// const firebaseNotes = {
//     notes: {
//         thisisid1: {
//             title: 'first note',
//             body: 'this is body of my note'
//         },
//         thisisid2: {
//             title: 'another note',
//             body: 'this is body of next note'
//         }
//     }
// };
// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'this is my note'
// }, {
//     id: '12345',
//     title: 'nth note',
//     body: 'this is my next note'
// }];

// database.ref('notes').set(notes);

//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('error fetching data ', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(19);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(21);
//   }, 10500);

//   database.ref()
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) => {
//       console.log('error fetching data', e);
//   });


    // database.ref().set({
    //     name: 'Jane Babe',
    //     age: 18,
    //     stressLevel: 6,
    //     isSingle: false,
    //     job: {
    //         title: 'Thick ass',
    //         company: 'double ds'
    //     },
    //     location: {
    //         city: 'Babe City',
    //         country: 'Babeland'
    //     }
    // }).then(() => {
    //     console.log('data is saved');
    // }).catch((error) => {
    //     console.log('this failed: ', error);
    // });



    // database.ref().update({
    //     stressLevel: 9,
    //     'job/company': 'dicksucker co',
    //     'location/city': 'pussylicious'
    // });


  //calls are async, so they might not complete before next line executes

//   database.ref('isSingle').set(null);

// const janeData = firebase.database().ref('isSingle');

// janeData.remove().then(() => {
//     console.log('data removed');
// }).catch((e) => {
//     console.log('error:', e);
// });

  