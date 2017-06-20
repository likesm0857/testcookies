$(document).ready(function() {

  var swiper = new Swiper('.swiper-container', { //滑動
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    speed: 800,


  });

  $('#example, body').vegas({ //背景切換
    delay: 7000,
    animationDuration: 70000,
    slides: [{
        src: 'img/1.png'
      },
      {
        src: 'img/2.png'
      },
      {
        src: 'img/3.png'
      },
      {
        src: 'img/4.png'
      },
      {
        src: 'img/5.png'
      }
    ],
    cover: true,
    animation: 'kenburns'
  });

  $(function() { //
    $("#gotop").click(function() {
      jQuery("html,body").animate({
        scrollTop: 0
      }, 1000);
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('#gotop').fadeIn("fast");
      } else {
        $('#gotop').stop().fadeOut("fast");
      }
    });
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

      showLeftPush2.onclick = function(){ //按鈕跳出nav (+上ID可用)
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
    showLeftPush3.onclick = function(){ //按鈕跳出nav (+上ID可用)
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
  showLeftPush4.onclick = function(){ //按鈕跳出nav (+上ID可用)
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
  };

});
