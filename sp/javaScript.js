//------------------------MENU BUTTON
// https://www.runoob.com/jsref/met-element-getattribute.html
// https://www.runoob.com/jsref/met-element-setattribute.html
// https://www.runoob.com/jsref/met-element-hasattribute.html
const menuBtn = document.querySelector('.menu-btn');
const navBox = document.querySelector('.nav-box');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('opened');
  const display = navBox.getAttribute('style');
  if (display === 'display: none') {
    navBox.setAttribute('style', 'display: block');
  } else {
    navBox.setAttribute('style', 'opacity: 0');
    setTimeout(() => {
      navBox.setAttribute('style', 'display: none');
    }, 500);
  }
});



//------------------------window.onload
function loading() {
  const loading = document.getElementById('loading');
  loading.setAttribute('style', 'opacity: 0');
  setTimeout(() => {
    loading.setAttribute('style', 'display: none');
  }, 500);
}

function header() {
  const menuTop = document.querySelector('.top-menu');
  const menuLogo= document.querySelector('.logo-lang-box');
  menuTop.classList.add('show');
  menuLogo.classList.add('show');
}

window.onload = function() {
  loading();
  setTimeout('header()', 600);
}



//----------------------LanguageBtton
const languageBtn = document.querySelector('.change-lang');
const languageList = document.querySelector('.lang-list');

languageBtn.addEventListener('click', () => {
  languageList.classList.toggle('opened');
});



//----------------------Intersection Observer API
const section = document.querySelectorAll(':scope main section');

const options = {
  rootMargin: "-45% 0%"
}

const callback = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('run');
    }
  });
}

const observe = new IntersectionObserver(callback, options);

section.forEach((value) => {
  observe.observe(value);
});



//----------------------アップデート情報一覧
const openUpdateList = document.querySelector('.open-update-modal');
const closeUpdateList = document.querySelector('.update-close-btn');
const updateList = document.querySelector('.update-modal');

openUpdateList.addEventListener('click', () => {
  updateList.setAttribute('style', 'display: block');
});

closeUpdateList.addEventListener('click', () => {
  updateList.setAttribute('style', 'opacity: 0');
  setTimeout(() => {
    updateList.setAttribute('style', 'display: none');
  }, 500);
});



//---------------------scrollButton
const toTopBtn = document.querySelector('.to-top-btn');

toTopBtn.addEventListener('click', () => {
  window.scroll({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    toTopBtn.classList.remove('hide');
  } else {
    toTopBtn.classList.add('hide');
  }
  if (window.pageYOffset > 6200) {
    toTopBtn.classList.remove('fixed');
  } else {
    toTopBtn.classList.add('fixed');
  }
});