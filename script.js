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

// for filter section at events
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  // for read mroe button on events
  const loadmore = document.querySelector('#loadmore');
  let currentItems = 3;

  loadmore.addEventListener('click', (e) => {
    console.log('hi')
      const elementList = [...document.querySelectorAll('.card')];
      for (let i = currentItems; i < currentItems + 3; i++) {
          if (elementList[i]) {
              elementList[i].style.display = 'block';
          }
      }
      currentItems += 3;

      // Load more button will be hidden after list fully loaded
      if (currentItems >= elementList.length) {
          e.target.style.display = 'none';
      }
  })
  for (i = 0; i < 3; i++) {
    removeFilter(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addFilter(x[i], "show");
  }

  
}

// start of filters
// show filtered
function addFilter(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeFilter(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// active class for filters
var btnContainer = document.getElementById("filters");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

// end of filters

// for scroll bar at top
let processScroll = () => {
  let scrollTop = document.documentElement.scrollTop
  let scrollBottom = (document.documentElement.scrollHeight)-window.innerHeight //basically the height of the entire page in px
  let scrollPercent = scrollTop/scrollBottom * 100 + '%'
  document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent)
}
document.addEventListener('scroll',processScroll)