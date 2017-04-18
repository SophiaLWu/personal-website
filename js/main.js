
$(document).ready(function() {
  loadContent();
  animateNavbar();
  animatePage();

  var projectsSlider = new Slider(4, "projects");
  projectsSlider.init();
  projectsSlider.userInput();

  var artworkSlider = new Slider(7, "artwork");
  artworkSlider.init();
  artworkSlider.userInput();


  // Function Definitions

  // When page loads, fades in home page content
  function loadContent() {
    $(".main-content").fadeIn(2000);
    $("footer").css("visibility", "visible").hide().fadeIn(2000);
  }

  // Animations for when hovering over navbar buttons
  function animateNavbar() {
    $(".nav-btn").hover(
      function() {
        $(this).next().fadeIn(200);
        $(this).find("img").css({ top: "-5px" });
      },
      function() {
        $(this).next().fadeOut(200);
        $(this).find("img").css({ top: "0" });
      }
    );
  };

  // Animates a specific page when clicked
  function animatePage() {
    $(".nav-btn").on("click", function() {
      $(".main-content").fadeOut(500);
      $("footer").fadeOut(500);
      var page = $(this).data("page");
      $("." + page + "-page").css("visibility", "visible").hide().fadeIn(900);
      $(".return").fadeIn(900);
      $(".return").on("click", function() {
        $(".return").fadeOut(900);
        $(".main-content").fadeIn(900);
        $("footer").fadeIn(900);
        $("." + page + "-page").fadeOut(900);
      });
    });
  };

  // Fades in tabs to other pages and hides tab titles
  function addTabs() {
    $.each(["#about-tab", "#skills-tab", "#projects-tab", "#artwork-tab", 
            "#contact-tab"], function(i, el) {
      $(el).fadeIn(700);
    });
    $.each([".about-title", ".skills-title", ".projects-title",
            ".artwork-title", ".contact-title"], function(i, el) {
      $(el).hide();
    });
  }

});