// var topoffset = 200;
//     $('.downarrow').click(function(e) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $("#about").offset().top - topoffset
//         }, 500);
//     });
// var topoffset = 100;
//     $("li.home").click(function(e) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $("#home").offset().top - topoffset
//         }, 500);
//     });

  $('.scrollTo').click(function() {
      var dis = $(this),
          disTarget = dis.data('target'),
          ScrollTo = $(disTarget).offset().top-100;
      dis.addClass('active').siblings('.#about').removeClass('active');
      $('html,body').animate({ scrollTop: ScrollTo },"slow");
  });

// function smoothScroll(target,duration){
// 	var target = document.querySelector(target);
// 	var targetPosition = target.getBoundingClientRect();
// 	console.log(targetPosition);

// }

// smoothScroll('.aboutme',1000);

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

// $('.downarrow').animate({
//     scrollTop: $("#about").offset().top
// }, 1000);