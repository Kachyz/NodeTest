var config = {
    apiKey: "AIzaSyACw5LBUOiYPTa6-VginJQMC2G2uij0_M0",
    authDomain: "post-8888.firebaseapp.com",
    databaseURL: "https://post-8888.firebaseio.com",
    projectId: "post-8888",
    storageBucket: "post-8888.appspot.com",
    messagingSenderId: "1073473642029"
  };
firebase.initializeApp(config);
 
function signUpEmail(){
    let email=document.getElementById('email').value;
    let pass=document.getElementById('password').value;

    if(email.length>0 && pass.length>0){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location='dashboard.html';
    } else {
       console.log('not logged in');
    }
  });