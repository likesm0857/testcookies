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
  const auth = firebase.auth();
  var dbUser = firebase.database().ref().child('User');
  var dbRef= firebase.database().ref().child('object');
  const $btnSignUp=$('#btnSignUp');
  const $state = $('#state');
  const $noemail= $('#noemail');
  const $nopassword= $('#nopassword');
  $btnSignUp.click(function(user){
    const $email =$ ('#email');
    const email= $email.val();
    const $password =$('#password');
    const password =$password.val();
    const userName=$ ('#userName');
    const $check=$('#check');
    const check= $check.val();
    const $passwordcheck=$('#passwordcheck');
    const passwordcheck=$passwordcheck.val();
    const $passwordcheckid= $('#passwordcheckid');
    var textcheck4=0;
    var textcheck1=0;
    var textcheck2=0;
    var textcheck3=0;
    var textcheck5=0;
    console.log(password.length);
if(password.length<6){

  $nopassword.html("密碼長度少於6位");
    document.getElementById('nopassword').style.color='red';
    textcheck5=0;
}else{
    $nopassword.html("");
    textcheck5=1;
    console.log(textcheck5);
 }

  if (passwordcheck!=password)
  {
    $passwordcheckid.html("密碼不相同");
    document.getElementById('passwordcheckid').style.color='red';
    textcheck1=0;
  }else{
    $passwordcheckid.html("");
    textcheck1=1;
    console.log(textcheck1);
  }

  if(password==""){
    $nopassword.html("未填寫密碼");
      document.getElementById('nopassword').style.color='red';
      textcheck2=0;
  }else{
      $nopassword.html("");
      textcheck2=1;
      console.log(textcheck2);
  }

  if(email==""){
    console.log($email);
    $noemail.html("未填電子郵件");
      document.getElementById('noemail').style.color='red';
      textcheck3=0;
  }else{
      $noemail.html("");
      textcheck3=1;
      console.log(textcheck3);

  }
  if (check=="dfw8hp"){
      $state.html("輸入正確");
      document.getElementById('state').style.color='green';
      textcheck4=1;
      console.log(textcheck4);
  }else {
    {
      $state.html("輸入錯誤");
      document.getElementById('state').style.color='red';
      textcheck4=0;
    }
  }
  if (textcheck5*textcheck4*textcheck1*textcheck2*textcheck3==1){
       const promise =auth.createUserWithEmailAndPassword(email,password);
      if(user){
        alert("註冊成功");
         setTimeout(window.location.href = "../index.html", 6000);
      }

       console.log(textcheck4);
       console.log(textcheck1);
       console.log(textcheck2);
       console.log(textcheck3);
       console.log(textcheck5*textcheck4*textcheck1*textcheck2*textcheck3);
     }
  });
  var menuLeft = document.getElementById('cbp-spmenu-s1'), //點擊頁面跳出nav
    showLeftPush = document.getElementById('showLeftPush'),
    cbpSpmenuPush = document.getElementById('cbpspmenupush'),
    body = document.body;
  var  state="close";

  console.log(state);
   cbpspmenupush.onclick = function(){ //按鈕跳出nav (+上ID可用)
     event.cancelBubble=true;
      console.log(state);
      if(state=="open"){
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toright');
        classie.toggle(menuLeft, 'cbp-spmenu-open');  //滑動效果
      state="close";
      console.log(state);
        }
      };

      showLeftPush.onclick = function(){ //按鈕跳出nav (+上ID可用)
        console.log(state);
      if(state=="close"){
         event.cancelBubble=true;
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toright');
        classie.toggle(menuLeft, 'cbp-spmenu-open');  //滑動效果
      state="open";
      console.log(state);
      }
    };
});
