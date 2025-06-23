$(document).ready(function () {
  const images = $(".thumb").map(function () {
    return $(this).attr("src");
  }).get();

  let currentIndex = 0;

  function showModal(index) {
    currentIndex = index;
    $("#modal-img").attr("src", images[currentIndex]);
    $("#modal").fadeIn();
  }

  $(".thumb").click(function () {
    const index = parseInt($(this).attr("data-index"));
    showModal(index);
  });

  $(".close, #modal").click(function (e) {
    if (e.target.id === "modal" || $(e.target).hasClass("close")) {
      $("#modal").fadeOut();
    }
  });

  $(".next").click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    $("#modal-img").fadeOut(200, function () {
      $(this).attr("src", images[currentIndex]).fadeIn(200);
    });
  });

  $(".prev").click(function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    $("#modal-img").fadeOut(200, function () {
      $(this).attr("src", images[currentIndex]).fadeIn(200);
    });
  });
});
