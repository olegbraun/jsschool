/*$(document).ready(function(){
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    tool.onMouseDown = function(event){
      var c = Shape.Circle(event.point.x, event.point.y, 20);
      c.fillColor = 'green';
    }

    paper.view.draw();
});*/


let currentTempC = 22;

currentTempC = 22.5;

let targetTempC, room1 = "room", room2 = "lobby"; //Несколько переменных сразу

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;/*Написание нескольких констант, в отличии от переменных их значения не могут быть изменены*/

alert(ROOM_TEMP_C);
