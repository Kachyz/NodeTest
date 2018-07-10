var config = {
    apiKey: "AIzaSyACw5LBUOiYPTa6-VginJQMC2G2uij0_M0",
    authDomain: "post-8888.firebaseapp.com",
    databaseURL: "https://post-8888.firebaseio.com",
    projectId: "post-8888",
    storageBucket: "post-8888.appspot.com",
    messagingSenderId: "1073473642029"
  };
firebase.initializeApp(config);

function loginEmail(){
    let email=document.getElementById('email').value;
    let pass=document.getElementById('passeord').value;

    if(email.length>0 && pass.length>0){
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
}

function firebaseAuth(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        window.location="dashboard.html";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

function loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth(provider);
}

function loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebaseAuth(provider);
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location='dashboard.html';
    } else {
      // User is signed out.
      // ...
    }
  });
  