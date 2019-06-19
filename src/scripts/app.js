var quack,
  quackController = function() {
    var $self = this,
      $window = $(window);

    this.init = function() {
      $(".mobile-menu-toggler").click(function(){
            $(".nav").toggleClass("opened");
      });
      
    };
    
  };

$(function() {
  if(!window.console) window.console = {};
  if(!window.console.log) window.console.log = function () {};
  if(!window.console.info) window.console.info = function () {};

  quack = new quackController();
  quack.init();
});
