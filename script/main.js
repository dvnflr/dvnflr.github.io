

// preloader
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish(){
	loader.classList.add("disappear");
}
// console scroll
window.addEventListener("scroll",function(){
    console.log(scrollX,scrollY);  	
});

// onscroll nav pop up
window.addEventListener("scroll",function(){
	const header = document.querySelector("header");
	const sticky = document.querySelector("header.sticky")
 if (window.innerWidth > 991) {
if (window.scrollX >160) {
    header.classList.add("sticky");
   sticky.style.transform="translate(-131%,-50%)rotate(-90deg)";
  } else {
   sticky.style.transform="translate3d(-140%,-50%,0)rotate(-90deg)";	
  }}

  if (window.innerWidth < 991) {
if (window.scrollY >160) {
    header.classList.add("sticky");
   sticky.style.transform="translate(-50%,0%)";
  } else {
        // console.log(scrollX,scrollY);   
        // header.classList.remove("sticky");
   sticky.style.transform="translate(-50%,-100%)";  
  }}


});
//remove hash
// remove fragment as much as it can go without adding an entry in browser history:
window.location.replace("#");

// slice off the remaining '#' in HTML5:    
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

