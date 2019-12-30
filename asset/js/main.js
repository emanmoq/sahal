$(document).ready(function () {   
   new WOW().init();

    $('.countNum').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 1000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
      
        });  
});

$('.clientSlider').owlCarousel({
  loop:true,
  margin:10,
items:1,
rtl:true


});
$('.PartnerSlider').owlCarousel({
  loop:true,
  margin:10,
responsive:{
0:{
  items:2
},
600:{
  items:3
},
1000:{
  items:5
}
},
rtl:true
});
$(".nav-item").click(function(){
  $(".nav-item").removeClass("active");
  $(this).addClass("active");
});
$(window).scroll(function () {
  scrollTop = $(window).scrollTop();

   if( scrollTop >$('header').height()){
      $('header').addClass('scrollNav');


   }
   else{
      $('header').removeClass('scrollNav');    

   }
   

  });
  function onScroll(event){
			
    var scrollPosition = $(document).scrollTop();
    $('.nav-item a[href^="#"').each(function () {
      console.log($(this).attr('href')); 
      var refElement = $($(this).attr("href"));
    //   console.log($(this).attr("href")); //log
      if (refElement.length&&refElement.position().top-50 <= scrollPosition) {
      $('.nav-item ').removeClass("active");
      $(this).parent().addClass("active");
      }
      else{
      $(this).removeClass("active");
      
      }
  
    });
    }

    $(document).on("scroll", onScroll);
    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top-50  }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      return false;
    });
    $(".navbar-toggler").click(function(){
$(".navbar-collapse").collapse("show");
    })   

    $(".close").click(function(){
      $('.navbar-collapse').collapse("hide")})
   
    
});

                