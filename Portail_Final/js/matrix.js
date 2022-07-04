$(document).ready(function () {
  var matrix = new Matrix($('#matrix'));
  setTimeout("move()", 3000);
});

let Matrix = function (el) {
  'use strict';
  var m = this;
  let i = 0;

  m.init = function () {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Bienvenue',
      '         ',
      'sur',
      '   ',
      'le',
      '  ',
      'portail',
      '       ',
      'de',
      '  ',
      'MCG - FRANCE',
      '            '
    ];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function (length) {
    var random_text = '';
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function () {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function () {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
      }
    }

    var do_cycles = false;
    var message = '';

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function () {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;

    /* Permet de relancer l'animation*/
    setTimeout(m.animateIn, 2000);

  };

  m.init();
}

/* Gestion des mouvements */

function move() {
  const elem = document.getElementById("matrix");
  const r = Math.floor(Math.random() * 7);
  switch (r) {
    case 0:
      elem.style.top = `${300}px`;
      elem.style.bottom = `${150}px`;
      elem.style.fontSize = `${40}px`;
      break;
    case 1:
      elem.style.top = `${300}px`;
      elem.style.bottom = `${0}px`;
      elem.style.right = `${0}px`;
      elem.style.left = `${410}px`;
      elem.style.fontSize = `${90}px`;
      break;
    case 2:
      elem.style.top = `${225}px`;
      elem.style.bottom = `${845}px`;
      elem.style.right = `${127}px`;
      elem.style.left = `${652}px`;
      elem.style.fontSize = `${70}px`;
      break;
    case 3:
      elem.style.top = `${356}px`;
      elem.style.bottom = `${27}px`;
      elem.style.left = `${0}px`;
      elem.style.fontSize = `${110}px`;
      break;
    case 4:
      elem.style.top = `${31}px`;
      elem.style.bottom = `${745}px`;
      elem.style.left = `${930}px`;
      elem.style.fontSize = `${65}px`;
      break;
    case 5:
      elem.style.top = `${124}px`;
      elem.style.bottom = `${421}px`;
      elem.style.right = `${142}px`;
      elem.style.left = `${214}px`;
      elem.style.fontSize = `${130}px`;
      break;
    case 6:
      elem.style.top = `${658}px`;
      elem.style.left = `${1000}px`;
    default:
      break;
  }
  setTimeout("move()", 3000);

}






