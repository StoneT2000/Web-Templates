$(document).ready(function () {
  for (var i = 0; i < 40; i++) {
    $(".MovingStripes_anim_wrapper").append('<div class="stripe"></div>')
  }
  var stripes = $(".MovingStripes_anim_wrapper").children();
  for (var i = 0; i < stripes.length; i ++) {
    stripes[i].style['animation-delay'] = i/4 + "s";
    stripes[i].style['z-index'] = i;
  }
});