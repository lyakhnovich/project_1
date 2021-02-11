// Event
// window.onload = handler;
//
// function handler(e) {
//   if(!e) e = window.event;
// }
//
// function handler2(event) {
//   let e = event || window.event;
// }

// EventInterfaceDOM

// window.addEventListener('load', init, false);
//
// function init() {
//   let button1 = document.getElementById('button1');
//   button1.addEventListener('click', handler, false);
// }
//
// function handler(e) {
//   // тип события
//   let message = 'type = ' + e.type + '\r\n';
//
//   // узел документа, в котором произошло событие может не совпадать currentTarget
//   message += 'target = ' + e.target + '\r\n';
//
//   // узел чей обработчик события работает в данный момент. На этапах ПЕРЕХВАТА и ВСПЛЫВАНИЯ значения свойства отличаются
//   message += 'currentTarget = ' + e.currentTarget + '\r\n';
//
//   // число указывающее этап. Одна из костант Event.CAPTURING_PHASE=1, Event.AT_TARGET=2, Event.BUBBLING_PHASE=3
//   message += 'eventPhase = ' + e.eventPhase + '\r\n';
//
//   // объект Date, указывающий, когда произошло событие
//   message += 'timeStamp = ' + e.timeStamp + '\r\n';
//
//   // true если событие может всплывать по дереву элементов. События blur, focus, load, unload не всплывают
//   message += 'bubbles = ' + e.bubbles + '\r\n';
//
//   // true если с этим событием связано действие по умолчанию и его можно отменить с помощью вызова метода preventDefault
//   message += 'cancelable = ' + e.cancelable + '\r\n';
//
//   console.log(message);
//
// }

// MouseEventInterfaceDOM
// window.addEventListener('load', init, false);
//
// function init() {
//   let div = document.getElementsByTagName('div')[0];
//   div.addEventListener('mousemove', handler, false);
// }
//
// function handler(e) {
//   let message = '';
//   message += e.button + '<br>';                 // 0 - левая клавиша, 1 - средняя, 2 - правая
//   message += 'Alt: ' + e.altKey + '<br>';       // true если клавиша Alt зажата
//   message += 'Ctrl: ' + e.ctrlKey + '<br>';     // true если клавиша Ctrl зажата
//   message += 'Shift: ' + e.shiftKey + '<br>';   // true если клавиша Shift зажата
//   message += 'X: ' + e.clientX + '<br>';        // координаты относительно левого верхнего угла документа
//   message += 'Y: ' + e.clientY + '<br>';        // координаты относительно левого верхнего угла документа
//   message += 'screen X: ' + e.screenX + '<br>';        // координаты относительно экрана'
//   message += 'screen Y: ' + e.screenY + '<br>';        // координаты относительно экрана'
//   document.getElementById('output').innerHTML = message;
// }


// Mouse Hover
// window.onload = function () {
//   let p = document.getElementsByTagName('p')[0];
//
//   p.onmouseover = function () {
//     this.style.backgroundColor = 'green';
//   }
//
//   p.onmouseout = function () {
//     this.style.backgroundColor = 'yellow';
//   }
//
// }

// MouseEvents
// window.onload = function () {
//
//   let div1 = document.getElementById('div1');
//   let div2 = document.getElementById('div2');
//   let div3 = document.getElementById('div3');
//
//
//   div1.onmousedown = function (e) {
//
//     if(!e) e = window.event;
//
//     // e.layerX - для фирокс
//     this.innerHTML = 'событие onmouse<b>down<b> X: ' + (e.offsetX === undefined ? e.layerX : e.offsetX)
//     + 'Y: ' +  (e.offsetY === undefined ? e.layerY : e.offsetY);
//   }
//
//   div2.onmousemove = function (e) {
//     this.innerHTML = 'событие onmouse<b>move<b> X: ' + e.offsetX + 'Y: ' + e.offsetY;
//   }
//
//   div3.onmouseup = function (e) {
//     this.innerHTML = 'событие onmouse<b>up<b> X: ' + e.offsetX + 'Y: ' + e.offsetY;
//   }
// }

// Keyboard
// window.onload = function () {
//   let main = document.getElementById('main');
//
//   main.onkeydown = function () {
//     print('onkeydown event');
//   }
//
//   main.onkeyup = function () {
//     print('onkeyup event');
//   }
//
//   main.onkeypress = function () {
//     print('onkeypress event');
//   }
//
//   function print(message) {
//     document.getElementById('output').innerHTML += message + '<br />'
//   }
// }

// KeyInfo
window.onload = function () {
  let main = document.getElementById('main');

  main.onkeydown = function (e) {
    clear();
    print('alt = ' + e.altKey);
    print('ctrl = ' + e.ctrlKey);
    print('shift = ' + e.shiftKey);
    print('charCode = ' + e.charCode);
    print('keyCode = ' + e.keyCode);
  };

  function print(message) {
    document.getElementById('output').innerHTML += message + '<br/>';
  }
  
  function clear() {
    document.getElementById('output').innerHTML = '';
  }
}








