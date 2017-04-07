
$(document).ready(function() {
  hideContent();
  titleLoad();
  animateContactPage();
  

  /* Function Definitions */

  // Initial hides certain content
  function hideContent() {
    $(".title-screen").hide();
    $(".contact-title").hide();
    $(".contact-page").hide();
  };

  // When page loads, fades in screen and title
  function titleLoad() {
    $(".title-screen").fadeIn(1500, function() {
      $(".title-text-container").fadeIn(800);
    });
    $(".title-text-container").hide();
  }

  // Animates contact page
  function animateContactPage() {
    $(".contact-circle").hover(
      function() {
        $(".contact-title").fadeIn(300);
      }, 
      function() {
        $(".contact-title").fadeOut(300);
      }
    );

    $(".contact-circle").on("click", function() {
      $(".title-screen").animate({
        top: "-100%",
      }, 500, function() {
        $(".contact-page").fadeIn(800);
      });
    });
  };

});