Index = {
  init: function(){

    // Mobile menu
    $(".menu-trigger").click(function(e) {
      $(".sub-header").toggle();
      e.stopPropagation();
    });

    // Dropdown
    $('.sub-header li').hover(
      function () {
        $('.dropdown', this).show();
      },
      function () {
        $('.dropdown', this).hide();
      }
    );

  }
}

$(document).ready(function() {
  Index.init();
});
