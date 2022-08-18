//-----------------------スライドメニューの作り方
//https://www.webcreatorbox.com/tech/slide-menu
const lang = document.querySelector('.change-lang');
const list = document.querySelector('.lang-list');

lang.addEventListener('click', () => {
  list.classList.toggle('opened')
});


//-----------------------headerの動画効果を実現
//https://www.webcreatorbox.com/tech/loading-animation
// window.onload = function() {
//   const menuTop = document.querySelector('.menuTop');
//   const menuLogo = document.querySelector('.logo-lang-box');
//   menuTop.classList.toggle('show')
//   menuLogo.classList.toggle('show')
// }

//-----------------------loading画面とheaderの動画効果を実現
//有多个要执行的函数语法:https://www.runoob.com/w3cnote/javascript-window-onload.html
//用setTimeout延时执行:https://bbs.csdn.net/topics/360219223
// window.onload = function() {
//   const loading = document.getElementById('loading');
//   loading.style.display = 'none';
// }

function loading() {
  const loading = document.getElementById('loading');
  loading.style = "opacity:0";
  setTimeout((e) => {
    loading.classList.add("fake-fade-out");
  }, 500);
}

function header() {
  const menuTop = document.querySelector('.menuTop');
  const menuLogo = document.querySelector('.logo-lang-box');
  menuTop.classList.toggle('show')
  menuLogo.classList.toggle('show')
}

window.onload = function() {
  loading();
  setTimeout('header()', 600);
}


//-----------------------Intersection Observer API の使い方
//https://fuuno.net/cani/cani26/cani26.html
//https://fuuno.net/ani/ani54/ani54.html
//https://fuuno.net/ani/ani66/ani66.html
//https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll
//https://closet-land.com/javascript/scroll-animation/
//多分最適解：
//https://www.webdesignleaves.com/pr/jquery/intersectionObserverAPI-basic.html
//こちらの内容理解するにはコンストラクタ関数,コールバック関数そして配列操作のforEachメソッドの知識が必須です。

//単体elementの実現方法
// const gazou = document.getElementById("v3gazou");

// let options = {
//   rootMargin:"-45% 0%"
// }

// let observer1 = new IntersectionObserver(callback,options);
// observer1.observe(gazou);

// function callback(entries) {
//   if(entries[0].isIntersecting) {
//     gazou.classList.add("run")
//   }
// }

const plural = document.querySelectorAll(":scope main section");

let options = {
  rootMargin: "-45% 0% "
};

let observe = new IntersectionObserver(callback,options);
plural.forEach(function(value) {
      observe.observe(value);
})

function callback(entries) {
  entries.forEach(function(value) {
    if (value.isIntersecting) {
      value.target.classList.add("run");
    }
  });
}


//-----------------------アップデート情報一覧の作り方
//https://www.techiedelight.com/ja/change-elements-display-to-none-or-block-javascript/
//https://agohack.com/how-to-use-js-queryselector/

//querySelectorの方法の演示、処理速度は getElementsBy… の方が速いので、単に要素を取得するだけなら querySelector() より getElementsBy… を使った方がいい。
// document.querySelector("#openList").onclick = function() {
//   document.querySelector("#updateList").style.display = "block";
// }

//CSSにanimation加えることでdisplay: none > blockの動画効果の実現は出来ましたが、block > noneの過程に動画効果の実現は叶えませんでした。
// document.getElementById("openList").onclick = function() {
//   document.getElementById("updateList").style.display = "block";
// }

// document.querySelector("#closeList").onclick = function() {
//   document.getElementById("updateList").style.display = "none";
// }


//display: none > blockの効果はanimation, display: block > noneの動画効果はtransition加えることで実現。
//なぜanimationなのか：https://freelance321.com/css3/display-transition/
// https://qiita.com/gonshi_com/items/4ae066ef4bea6d519854
// https://gxy-life.com/2PC/PC/PC20211211.html
const openList = document.getElementById("openList");
const closeList = document.querySelector("#closeList")
const updateList = document.getElementById("updateList");

openList.onclick = function() {
  updateList.classList.toggle("change");
}

closeList.onclick = function() {
  updateList.style = "opacity:0";
  setTimeout((e) => {
    updateList.classList.remove("change");
    updateList.style = "opacity:1";
  }, 500);
}


//-----------------------scrollButtonの作り方
//https://notetoself-dy.com/javascript-page-top-button/#
//https://web-dev.tech/front-end/javascript/smooth-scroll-top-button/
//https://sinpe-pgm.com/pagetop-button-js/

//方法一：
// window.onload = function() {
//   let Animation = function() {
//     let toTop = document.querySelector('.to-top-btn');
//     let rect = toTop.getBoundingClientRect();
//     let scrollTop = rect.top + window.pageYOffset;
//     // console.log(scrollTop);
//     if (scrollTop > 1100) {
//       toTop.classList.remove('hide');
//     } else {
//       toTop.classList.add('hide');
//     }
//   }
//   window.addEventListener('scroll', Animation);
// }

// const toTopBtn = document.querySelector('.to-top-btn');
// toTopBtn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// });

const toTopBtn = document.querySelector('.to-top-btn');

toTopBtn.addEventListener('click', scroll_top);

function scroll_top() {
  window.scroll({top: 0, behavior: 'smooth'});
}

window.addEventListener('scroll', scroll_event);
function scroll_event() {
  // let rect = toTopBtn.getBoundingClientRect();
  // let scrollTop = rect.top + window.pageYOffset;
  // let x = window.pageYOffset;
  // console.log(x);
  if (window.pageYOffset > 500) {
    toTopBtn.classList.remove('hide');
  } else {
    toTopBtn.classList.add('hide');
  }
  if (window.pageYOffset > 5800) {
    toTopBtn.classList.remove('fixed');
  } else {
    toTopBtn.classList.add('fixed');
  }
}

// window.addEventListener('scroll', scroll_event);
// function scroll_event() {
//   // let rect = toTopBtn.getBoundingClientRect();
//   // let scrollTop = rect.top + window.pageYOffset;
//   // let x = window.pageYOffset;
//   // console.log(x);
//   if (window.pageYOffset > 5800) {
//     toTopBtn.classList.remove('fixed');
//   } else if (window.pageYOffset > 500) {
//     toTopBtn.classList.add('fixed');
//     toTopBtn.classList.remove('hide');
//   } else {
//     toTopBtn.classList.add('hide');
//   }
// }