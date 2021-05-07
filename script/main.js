//smoothscroll into
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  easing:'easeInOutQuart'
});

//this is for the 'scroll back to top' thing in the corner
$(document).ready(function(){
$(window).scroll(function(){
	if($(this).scrollTop()>180){
		$('#backToTop').fadeIn();
	} else{
		$('#backToTop').fadeOut();
	}
	});
	$('#backToTop').click(function(){
		$("html,body").animate({ scrollTop:0},600);
		return false;
	});
});

$(document).ready(function() {
  const navBtn = $('.scrptlink');
  navBtn.click(()=>{	
    setTimeout(()=>{
      removeHash();
    }, 5);  });

  function removeHash(){
    // history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    history.replaceState(undefined, undefined, "#hash_value")
  }
});

/*
* $('.links').click(function(e){ 
*	 $('html, body').animate({
*   scrollTop: $( $.attr(this, 'href') ).offset().top - $('.nav').height()
*	 }, 1000);
*  return false;
* });
*/


//navbar active

// $(document).ready(function() {
//   $('.nav-link').click(function() {
//       var dis = $(this),
//           disTarget = dis.data('target'),
//           ScrollTo = $(disTarget).offset().top;
//       dis.addClass('active').siblings('.nav-link').removeClass('active');
//       $('html,body').animate({ scrollTop: ScrollTo },"slow");
//   });
//   });


//navbar back when scroll
// $(window).on("scroll", function() {
//     if ($(window).scrollTop()) {
//         $('.nav').addClass("black");
//     }
//     else {
//         $('.nav').removeClass("black");
//     }
// });
