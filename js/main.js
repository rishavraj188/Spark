jQuery(document).ready(function()
{
  "use strict";

  $('.slider').ripples({
  dropRadius: 15,
  perturbance: 5,
});

$(".text").typed({
    strings: ["We Are <strong class='primary'>SPARKY.</strong>", "We Are <strong class='secondary'>Awesome Developers.</strong>"],
    typeSpeed: 0,
    loop:true
  });
$(window).scroll(function(){
  var top= $(window).scrollTop();

  if(top>70)
  {
    $('header').addClass('transparent-bg');
  }
  else
  {
    if($('header').hasClass('transparent-bg'))
    {
      $('header').removeClass('transparent-bg');
    }
  }
});

});
