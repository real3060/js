
function modal() {
  // модалка 
  var more = document.querySelector('.more');
  var overlay = document.querySelector('.overlay');
  var close = document.querySelector('.popup-close');
  more.addEventListener('click', function () {
    this.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = "";
  }); // модалка на кнопку узнать подробнее

  var knowMore = document.querySelectorAll('.description-btn'); // получение версии браузера

  function get_name_browser() {
    // получаем данные userAgent
    var ua = navigator.userAgent;
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'IE';
    return 'Не определен';
  }

  var browser = get_name_browser(); //  цикл

  if (window.screen.width > 600) {
    var _loop = function _loop(i) {
      knowMore[i].addEventListener('click', function () {
        if (i === 2 && window.screen.width > 600 && browser != "IE") {
          knowMore[i].classList.remove('more-splash'); //удалил огненную кнопку

          knowMore[i].classList.add('animation-open'); //добавил свой класс анимации

          overlay.classList.remove('fade'); //удалил у оверлея эффект выпадания

          overlay.classList.add('animation-open'); //добавил свой эффект выпадания

          overlay.style.display = 'block';
          document.body.style.overflow = 'hidden'; //удалил прокрутку на фоне
        }

        if (i === 3) {
          knowMore[i].classList.remove('more-splash');
          document.body.style.overflow = 'hidden';
          overlay.classList.remove('fade');
          overlay.classList.add('active');
          var opacit = 0.1;
          overlay.style.display = 'block';
          var timer = setInterval(function () {
            if (opacit >= 1) {
              clearInterval(timer);
            }

            overlay.style.opacity = opacit;
            overlay.style.filter = 'alpha(opacity=' + opacit * 100 + ")";
            opacit += opacit + 0.1;
          }, 10);
        } else {
          knowMore[i].classList.add('more-splash');
          overlay.classList.add('fade');
          overlay.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      });
    };

    for (var i = 0; i < knowMore.length; i++) {
      _loop(i);
    }
  } else {
    var _loop2 = function _loop2(i) {
      knowMore[i].addEventListener('click', function () {
        knowMore[i].classList.remove('more-splash');
        overlay.classList.remove('fade');
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    };

    for (var i = 0; i < 4; i++) {
      _loop2(i);
    }
  }

  ;
}

module.exports = modal;