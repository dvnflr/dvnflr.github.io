
let progress = document.getElementById("progress");
let gallery = document.getElementById("gallery");

var queue = new createjs.LoadQueue(false);

queue.on("fileload", handleFileComplete);
queue.on("progress", event => {
  let progress = Math.floor(event.progress * 100);
  this.progress.style.width = progress + "%";
  if (progress == 100) {
    console.log("all done");
    document.querySelector("body").style.background = "white";
  }
});
queue.on("complete", event => {
  gallery.classList.add("fadeIn");
  setTimeout(() => {
    progress.classList.add("expand");
  }, 500);
});
queue.loadFile("https://s3.amazonaws.com/coursetro/stuff/mountains-clouds.jpg");
queue.loadFile(
  "https://s3.amazonaws.com/coursetro/stuff/adventure-alpine-alps-714258.jpg"
);
queue.loadFile(
  "https://s3.amazonaws.com/coursetro/stuff/170407220921-07-iconic-mountains-pitons-restricted.jpg"
);
queue.loadFile(
  "https://s3.amazonaws.com/coursetro/stuff/170407220916-04-iconic-mountains-matterhorn-restricted.jpg"
);

function handleFileComplete(event) {
  var item = event.item; // A reference to the item that was passed in to the LoadQueue
  var type = item.type;

  // Add any images to the page body.
  if (type == createjs.Types.IMAGE) {
    gallery.appendChild(event.result);
  }
}
