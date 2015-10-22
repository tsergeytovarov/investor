$(function() {

  $(".modal-open").on("click", function(){
    var modal = $(this).attr("data-modal");
    $(".modal__overlay").addClass("modal__overlay--active");
    $("." + modal).addClass("modal__overlay--active");
    return false;
  })

  $(".modal__close").on("click", function(){
    $(".modal__overlay").removeClass("modal__overlay--active");
    $(".modal").removeClass("modal__overlay--active");
    return false;
  })

});
