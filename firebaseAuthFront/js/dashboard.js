var config = {
  apiKey: "AIzaSyACw5LBUOiYPTa6-VginJQMC2G2uij0_M0",
  authDomain: "post-8888.firebaseapp.com",
  databaseURL: "https://post-8888.firebaseio.com",
  projectId: "post-8888",
  storageBucket: "post-8888.appspot.com",
  messagingSenderId: "1073473642029"
};
firebase.initializeApp(config);
var currentUser = {}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // console.log(user);
    // User is signed in.
    document.getElementById('user-name').textContent=user.displayName;
    document.getElementById('user-image').setAttribute('src',user.photoURL);
    currentUser = user
    // ...
  } else {
    window.location="index.html";
  }
});

function logout(){
  firebase.auth().signOut()
    .then(function() {
      window.location="index.html";
    })
    .catch(function(error) {
      console.log('something went wrong',error);
    });
}

function postSomething(){
  let postText = document.getElementById('newPostInput').value
  // console.log(postText);
  if(postText.length > 0){
    firebase.database().ref('posts/' + new Date().getTime()).set({
      username: currentUser.displayName,
      photo: currentUser.photoURL,
      post: postText,
      createDate: new Date().toISOString()
    })
    document.getElementById("newPostInput").value=""
  }
}

firebase.database().ref('posts/').on('child_added', snapshot => {
  // console.log(snapshot.val());
  let newPost = document.getElementById('emptyPost').cloneNode(true);
  newPost.setAttribute('style', '')
  newPost.querySelector('img').setAttribute('src', snapshot.val().photo)
  newPost.querySelector('h5').textContent=snapshot.val().username
  newPost.querySelector('h3').textContent=snapshot.val().post

  document.getElementById('posts-container').prepend(newPost)
})