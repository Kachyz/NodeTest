const firebase = require('firebase')

const config = {
  apiKey: "AIzaSyDQf77KLoBk8mcIHlsmSC0QIAJMUb82vkw"
}

firebase.initializeApp(config)

// firebase.auth().createUserWithEmailAndPassword("kkk@gmail.com", "kkk123")
//   .catch( err => {
//     console.log(err.code);
//     console.log(err.message);
//   })

firebase.auth().signInWithEmailAndPassword("kkk@gmail.com", "kkk123")
  .then( firebaseUser => {
    console.log('logged in');
  })
  .catch( err => {
    console.log('error:', err);
  })