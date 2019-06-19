(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var quack,
    quackController = function () {
  function quackController() {
    var $self = this,
        $window = $(window);

    this.init = function () {
      $(".mobile-menu-toggler").click(function () {
        $(".nav").toggleClass("opened");
      });
    };
  }

  return quackController;
}();

$(function () {
  if (!window.console) window.console = {};
  if (!window.console.log) window.console.log = function () {};
  if (!window.console.info) window.console.info = function () {};

  quack = new quackController();
  quack.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSjtBQUFBLElBQ0U7QUFBa0IsV0FBbEIsZUFBa0IsR0FBVztBQUMzQixRQUFJLFFBQVEsSUFBWjtBQUFBLFFBQ0UsVUFBVSxFQUFFLE1BQUYsQ0FEWjs7QUFHQSxTQUFLLElBQUwsR0FBWSxZQUFXO0FBQ3JCLFFBQUUsc0JBQUYsRUFBMEIsS0FBMUIsQ0FBZ0MsWUFBVTtBQUNwQyxVQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLFFBQXRCO0FBQ0wsT0FGRDtBQUlELEtBTEQ7QUFPRDs7QUFYRDtBQUFBLEdBREY7O0FBY0EsRUFBRSxZQUFXO0FBQ1gsTUFBRyxDQUFDLE9BQU8sT0FBWCxFQUFvQixPQUFPLE9BQVAsR0FBaUIsRUFBakI7QUFDcEIsTUFBRyxDQUFDLE9BQU8sT0FBUCxDQUFlLEdBQW5CLEVBQXdCLE9BQU8sT0FBUCxDQUFlLEdBQWYsR0FBcUIsWUFBWSxDQUFFLENBQW5DO0FBQ3hCLE1BQUcsQ0FBQyxPQUFPLE9BQVAsQ0FBZSxJQUFuQixFQUF5QixPQUFPLE9BQVAsQ0FBZSxJQUFmLEdBQXNCLFlBQVksQ0FBRSxDQUFwQzs7QUFFekIsVUFBUSxJQUFJLGVBQUosRUFBUjtBQUNBLFFBQU0sSUFBTjtBQUNELENBUEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgcXVhY2ssXG4gIHF1YWNrQ29udHJvbGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkc2VsZiA9IHRoaXMsXG4gICAgICAkd2luZG93ID0gJCh3aW5kb3cpO1xuXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkKFwiLm1vYmlsZS1tZW51LXRvZ2dsZXJcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoXCIubmF2XCIpLnRvZ2dsZUNsYXNzKFwib3BlbmVkXCIpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9O1xuICAgIFxuICB9O1xuXG4kKGZ1bmN0aW9uKCkge1xuICBpZighd2luZG93LmNvbnNvbGUpIHdpbmRvdy5jb25zb2xlID0ge307XG4gIGlmKCF3aW5kb3cuY29uc29sZS5sb2cpIHdpbmRvdy5jb25zb2xlLmxvZyA9IGZ1bmN0aW9uICgpIHt9O1xuICBpZighd2luZG93LmNvbnNvbGUuaW5mbykgd2luZG93LmNvbnNvbGUuaW5mbyA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gIHF1YWNrID0gbmV3IHF1YWNrQ29udHJvbGxlcigpO1xuICBxdWFjay5pbml0KCk7XG59KTtcbiJdfQ==
