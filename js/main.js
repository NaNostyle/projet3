window.addEventListener("DOMContentLoaded", function() {
  new Slideshow(
    0,
    document.querySelectorAll(".slide"),
    document.querySelector("#arrow-left"),
    document.querySelector("#arrow-right")
  );

  new Canvas(
    document.getElementById("canvas"),
    document.getElementById("clear"),
    4
  );

  new CountDown(
  1000 * 60 * 20, 
  new Date().getTime()
  );
});
