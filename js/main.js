
$(document).ready(function() {
  // hideContent();
  loadContent();
  animateNavbar();
  animatePage();

  var projectsSlider = new Slider(4, "projects");
  projectsSlider.init();
  projectsSlider.userInput();

  var artworkSlider = new Slider(7, "artwork");
  artworkSlider.init();
  artworkSlider.userInput();

  // Initially hides all content on page
  function hideContent() {
    $.each([
            ".about-page",
            ".skills-page", 
            ".projects-page",
            ".artwork-page",  
            ".contact-page"], function(i, el) {
      $(el).hide();
    });
  };

  // When page loads, fades in home page content
  function loadContent() {
    $(".main-content").fadeIn(3000);
  }

  // Animations for when hovering over navbar buttons
  function animateNavbar() {
    $(".nav-btn").hover(
      function() {
        $(this).next().fadeIn(300);
        $(this).find("img").css({ top: "-5px" });
      },
      function() {
        $(this).next().fadeOut(300);
        $(this).find("img").css({ top: "0" });
      }
    );
  };

  // Animates a specific page when clicked
  function animatePage() {
    $(".nav-btn").on("click", function() {
      var page = $(this).data("page");
      zoomIn(page);
      zoomOut(page)
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
    // $.each(["#about-tab", "#skills-tab", "#projects-tab", 
    //         "#artwork-tab", "#contact-tab"], function(i, el) {
    //   $(el).hide();
    // });
    // $(".title-screen").animate({
    //   top: top,
    //   right: right,
    //   bottom: bottom,
    //   left: left,
    // }, 900);
    $("." + page + "-page").css("visibility", "visible").hide().fadeIn(900);
    // $("." + page + "-page").fadeIn(900);
    $(".return").fadeIn(900);
  };

  // Zooms back out to homepage
  function zoomOut(page) {
    console.log("zoom out" + page);
    $(".return").on("click", function() {
      $(".return").fadeOut(900);
      $("." + page + "-page").fadeOut(900);
    // $(".title-screen").animate({
    //   top: "15px",
    //   right: "15px",
    //   bottom: "15px",
    //   left: "15px",
    // }, 900, addTabs);
      // addTabs();
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