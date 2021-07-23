// $(document).ready(function() {
//     $('body').bootstrapMaterialDesign();
//     document.getElementById("btnLogin").click();
//     setTimeout(function() {
//         document.getElementById("btnLogin").click();
//     }, 2000);

// });


$(function () {
    
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });

    $(function() {
      $('.nav-linkk').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000);
            event.preventDefault();
      });
    });  
    
  });


    

