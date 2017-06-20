$(document).ready(function(){

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBHps5VHxHvpVsDPsF7hlGqrlCE8rTwL0U",
    authDomain: "final-5aa67.firebaseapp.com",
    databaseURL: "https://final-5aa67.firebaseio.com",
    projectId: "final-5aa67",
    storageBucket: "final-5aa67.appspot.com",
    messagingSenderId: "139113141928"
  };
  firebase.initializeApp(config);
firebase.auth().signOut();
  var dbRef= firebase.database().ref().child('object');
  const $email =$ ('#account');
  const $password =$('#password');
  const $btnSignIn=$('#btnSignIn');
  const $btnSignOut=$('#btnSignOut');
  const $signInfo = $('#sign-info');

  $btnSignIn.click(function(e){   //登入按鈕

    const email= $email.val();
    const password =$password.val();

    const auth = firebase.auth();
    const promise =auth.signInWithEmailAndPassword(email,password);
    console.log(promise);

    promise.catch(function(e) {
       console.log(e.message);
       $signInfo.html(e.message);
     });
    firebase.auth().onAuthStateChanged(function(user){

      if(user){
        $signInfo.html("成功登入");
          document.cookie = "isLosign";
          window.location.href = "../index.html";
      } else if (user=='Null'){
        $signInfo.html("");

    }else{
            $signInfo.html("帳號密碼錯誤");

    }
    });


  });

  $btnSignOut.click(function(e){
    firebase.auth().signOut();
  });

/*
  firebase.auth().onAuthStateChanged(function(user){

    if(user){
      alert("login in");
        window.location.href = "../index.html";
    } else{
      alert("帳號或密碼錯誤");
    }
  });*/



});
