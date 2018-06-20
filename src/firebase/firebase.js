import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD0ZmAP49-M7P4Gz_fZgSfVDEhHMUc7JrI",
    authDomain: "expensify-123abc.firebaseapp.com",
    databaseURL: "https://expensify-123abc.firebaseio.com",
    projectId: "expensify-123abc",
    storageBucket: "expensify-123abc.appspot.com",
    messagingSenderId: "716525575891"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
    name: 'Jane Babe'
  });