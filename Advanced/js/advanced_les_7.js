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


























