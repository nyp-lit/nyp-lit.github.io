//opening menu button on mobile
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open')
        menuOpen = false;
    }
    var menuLinks = document.getElementsByClassName('allLinks')[0]
    if(menuLinks.style.display == 'flex'){
        menuLinks.style.display = 'none'
    }else{
        menuLinks.style.display = 'flex'
    }
})


//hide menu on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').style.top = "0";
  } else {
    document.querySelector('nav').style.top = "-60px";
    // close menu on scroll, only on mobile

    var mq = window.matchMedia( "(max-width: 960px)" );
    if (mq.matches) {
      menuBtn.classList.remove('open')
      menuOpen = false;
      var menuLinks = document.getElementsByClassName('allLinks')[0]
      menuLinks.style.display = 'none'
    }
  }
  prevScrollpos = currentScrollPos;
}

// for scroll bar at top
let processScroll = () => {
  let scrollTop = document.documentElement.scrollTop
  let scrollBottom = (document.documentElement.scrollHeight)-window.innerHeight //basically the height of the entire page in px
  let scrollPercent = scrollTop/scrollBottom * 100 + '%'
  document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent)
}
document.addEventListener('scroll',processScroll)