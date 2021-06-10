// Init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  },
  vertical: false
});


/*
object to hold href values of links inside our nav with
the class '.anchor-nav'

scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
}
*/
var scenes = {
  'intro': {
    'intro': 'intro-anchor'
  },
  'scene2': {
    'works': 'anchor1'
  },
  'scene3': {
    'whoami': 'anchor2'
  },
  'scene4': {
    'contact': 'anchor3'
  }
}

// for(var key in scenes) {
//   // skip loop if the property is from prototype
//   if (!scenes.hasOwnProperty(key)) continue;

//   var obj = scenes[key];

//   for (var prop in obj) {
//     // skip loop if the property is from prototype
//     if(!obj.hasOwnProperty(prop)) continue;
//     console.log("hasownproperty shit")
//     // new ScrollMagic.Scene({ triggerElement: '#' + prop })
//     //     .setClassToggle('#' + obj[prop], 'active')
//     //     .addTo(controller);
//   }
// }


// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {

      x : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });
console.log("ease");
});


//BIND BREAKS THE NAV, I DON"T KNOW WHY. SO I COMMENTED IT.... TOO BAD!!!
//WHEREVER THE NAV-ANCHOR IS. THIS BREAKS THAT NAV..
//  Bind scroll to anchor links using Vanilla JavaScript
// var anchor_nav = document.querySelector('.anchor-nav');

// anchor_nav.addEventListener('click', function(e) {
//   var target = e.target,
//       id     = target.getAttribute('href');

//   if(id !== null && id.length > 0) {
//     e.preventDefault();
//     controller.scrollTo(id);
//     console.log(id !== null && id.length > 0)
//     console.log(id)

//     if(window.history && window.history.pushState) {
//       history.pushState("", document.title, id);
//     }
//   }
// });


//HORIZONTAL SCROLL
window.addEventListener("wheel", onWheel);

function onWheel(event) {
  event.preventDefault();

  var normalized;  
  var delta = event.wheelDelta;
  var scroll = (window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0) || 0;
    var scrollvert = (window.pageYOffset || document.scrollTop) - (document.clientLeft || 0) || 0;

  if (window.innerWidth > 991) {
      if (delta) {
        normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
      } else {
        delta = event.deltaY || event.detail || 0;
        normalized = -(delta % 3 ? delta * 10 : delta / 3);
      }
        TweenLite.to(window, 0.1, {scrollTo: {x: scroll + -1500 * normalized } });
  }
  else{
     if (delta) {
        normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
      } else {
        delta = event.deltaY || event.detail || 0;
        normalized = -(delta % 3 ? delta * 10 : delta / 3);
      }
    TweenLite.to(window, 0.1, {scrollTo: {y: scrollvert + -1000 * normalized} });
  }



}

