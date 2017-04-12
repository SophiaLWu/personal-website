
$(document).ready(function() {
  hideContent();
  loadHome();
  animatePageTitle();
  animatePage();
  
  // ProjectsSlider.init();
  // ProjectsSlider.currentCircle.addClass("active-projects-circle");
  // ProjectsSlider.currentSlide.show();
  // ProjectsSlider.defaultAdvance();
  // ProjectsSlider.userInput();
  
  $(document).one("click", function() {
    addTabs();
  });


  /* Function Definitions */

  // Initially hides certain content
  function hideContent() {
    $.each([".return", ".title-screen",
            "#about-tab", ".about-page",
            "#skills-tab", ".skills-page", 
            "#projects-tab", ".projects-page",
            "#artwork-tab", ".artwork-page",  
            "#contact-tab", ".contact-page"], function(i, el) {
      $(el).hide();
    });
  };

  // When page loads, fades in home page and title
  function loadHome() {
    $(".title-screen").fadeIn(1500, function() {
      $(".title-text-container").fadeIn(700);
    });
    $(".title-text-container").hide();
  }

  // Page title shows when hovering over circle
  function animatePageTitle() {
    $(".circle").hover(
      function() {
        $(this).next().fadeIn(300);
      },
      function() {
        $(this).next().fadeOut(300);
      }
    );
  };

  // Animates a specific page when clicked
  function animatePage() {
    $(".circle").on("click", function() {
      var page = $(this).data("page")
      zoomIn(page);
      zoomOut(page);
    });
  };

  // Zooms in on specific page
  function zoomIn(page) {
    switch(page) {
      case "about":
        zoomInAnimations("about", "0%", "-80%", "0", "0");
        break;
      case "skills":
        zoomInAnimations("skills", "-50%", "-100%", "0", "0");
        break;
      case "projects":
        zoomInAnimations("projects", "0", "0", "0", "-80%");
        break;
      case "artwork":
        zoomInAnimations("artwork", "-50%", "", "0", "-100%");
        break;
      case "contact":
        zoomInAnimations("contact", "-100%", "0", "0", "0");
        break;
      default: return
    }
  };

   // Animations when zooming into a specific page
  function zoomInAnimations(page, top, right, bottom, left) {
    console.log("zoom in" + page);
    $.each(["#about-tab", "#skills-tab", "#projects-tab", 
            "#artwork-tab", "#contact-tab"], function(i, el) {
      $(el).hide();
    });
    $(".title-screen").animate({
      top: top,
      right: right,
      bottom: bottom,
      left: left,
    }, 600);
      $("." + page + "-page").fadeIn(900);
    $(".return").fadeIn(900);
  };

  // Zooms back out to homepage
  function zoomOut(page) {
    $(".return").off("click").on("click", function(event) {
      console.log("zoom out" + page);
      $(".return").fadeOut(900);
      $("." + page + "-page").fadeOut(900);
      $(".title-screen").animate({
        top: "15px",
        right: "15px",
        bottom: "15px",
        left: "15px",
      }, 600, addTabs);
    });
  };


  // Fades in tabs to other pages and hides tab titles
  function addTabs() {
    console.log("add tabs");
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