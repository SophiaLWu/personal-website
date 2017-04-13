
var ProjectsSlider = {
  numberSlides: 4,
  currentSlide: null,
  currentCircle: null,

  userInput: function() {
    ProjectsSlider.clickCircle();
    $(".projects-page-next-arrow").on("click", ProjectsSlider.nextSlide);
    $(".projects-page-prev-arrow").on("click", ProjectsSlider.previousSlide);
    $(".projects-page-prev-arrow").hover(function() {
      ProjectsSlider.previewShow("prev");
    }, ProjectsSlider.previewHide);
    $(".projects-page-next-arrow").hover(function() {
      ProjectsSlider.previewShow("next");
    }, ProjectsSlider.previewHide);
  },

  init: function() {
    ProjectsSlider.addSlides();
    ProjectsSlider.addCircles();
    $(".projects-page-slide").hide();
    ProjectsSlider.currentSlide = $(".projects-page-slide").first();
    ProjectsSlider.currentCircle = $(".projects-page-circle").first();
    ProjectsSlider.currentCircle.addClass("active-projects-page-circle");
    ProjectsSlider.currentSlide.show();
  },

  addSlides: function() {
    for (var i = 1; i <= ProjectsSlider.numberSlides; i++) {
      $(".projects-page-slide-container").append("<div class='projects-page-slide'><img src='images/projects/" + i + ".jpg'><p>" + i + "</p></div>");
    }
  },

  addCircles: function() {
    for (var i = 1; i <= ProjectsSlider.numberSlides; i++) {
      $(".projects-page-circles").append("<div class='projects-page-circle' data-slide='" + i + "'></div>");
    }
  },

  nextSlide: function() {
    console.log("next slide");
    ProjectsSlider.currentSlide.animate({ left: "-200%" }, 1000);
    ProjectsSlider.currentCircle.removeClass("active-projects-page-circle");
    if (ProjectsSlider.currentSlide.next().length != 0) {
      ProjectsSlider.currentSlide = ProjectsSlider.currentSlide.next();
      ProjectsSlider.currentCircle = ProjectsSlider.currentCircle.next();
    }
    else {
      ProjectsSlider.currentSlide = $(".projects-page-slide:first-child");
      ProjectsSlider.currentCircle = $(".projects-page-circle:first-child");
    }
    ProjectsSlider.currentCircle.addClass("active-projects-page-circle");
    ProjectsSlider.currentSlide.css("left", "100%");
    ProjectsSlider.currentSlide.show();
    ProjectsSlider.currentSlide.animate({ left: "0%" }, 1000);
  },

  previousSlide: function() {
    console.log("prev slide");
    ProjectsSlider.currentSlide.animate({ left: "100%" }, 1000);
    ProjectsSlider.currentCircle.removeClass("active-projects-page-circle");
    if (ProjectsSlider.currentSlide.prev().length != 0) {
      ProjectsSlider.currentSlide = ProjectsSlider.currentSlide.prev();
      ProjectsSlider.currentCircle = ProjectsSlider.currentCircle.prev();
    }
    else { 
      ProjectsSlider.currentSlide = $(".projects-page-slide:last-child");
      ProjectsSlider.currentCircle = $(".projects-page-circle:last-child");
    }
    ProjectsSlider.currentCircle.addClass("active-projects-page-circle");
    ProjectsSlider.currentSlide.css("left", "-200%");
    ProjectsSlider.currentSlide.show();
    ProjectsSlider.currentSlide.animate({ left: "0%" }, 1000);
  },

  clickCircle: function() {
    $(".projects-page-circle").on("click", function() {
      var prevSlideNumber = parseInt(ProjectsSlider.currentCircle.data("slide"));
      ProjectsSlider.currentCircle.removeClass("active-projects-page-circle");
      ProjectsSlider.currentCircle = $(this);
      ProjectsSlider.currentCircle.addClass("active-projects-page-circle");
      var currentSlideNumber = parseInt(ProjectsSlider.currentCircle.data("slide"));
      console.log(currentSlideNumber);
      var slideNumberDiff = currentSlideNumber - prevSlideNumber;
      if (slideNumberDiff > 0) {
        ProjectsSlider.currentSlide.animate({ left: "-200%" }, 1000);
        ProjectsSlider.currentSlide = $(".projects-page-slide:nth-child(" + currentSlideNumber + ")");
        ProjectsSlider.currentSlide.css("left", "100%");
        ProjectsSlider.currentSlide.show();
        ProjectsSlider.currentSlide.animate({ left: "0%" }, 1000);
      }
      else {
        ProjectsSlider.currentSlide.animate({ left: "100%" }, 1000);
        ProjectsSlider.currentSlide = $(".projects-page-slide:nth-child(" + currentSlideNumber + ")");
        ProjectsSlider.currentSlide.css("left", "-200%");
        ProjectsSlider.currentSlide.show();
        ProjectsSlider.currentSlide.animate({ left: "0%" }, 1000);
      }
    });
  },

  newSlideNumber: function(type, slideNumber) {
    if (type === "prev") {
      return (slideNumber === 1) ? ProjectsSlider.numberSlides : slideNumber - 1;
    }
    else {
      return (slideNumber === ProjectsSlider.numberSlides) ? 1 : slideNumber + 1;
    }
  },

  previewShow: function(type) {
    var slideNumber = parseInt(ProjectsSlider.currentSlide.find("p").text());
    var prevSlideNumber = ProjectsSlider.newSlideNumber(type, slideNumber)
    $("<div class='projects-page-preview-slide'><img src='images/" + prevSlideNumber 
       + ".jpg'></div>").appendTo(".projects-page-preview").hide().fadeIn(500);
    if (type === "prev") {
      $(".projects-page-preview-slide").addClass("projects-page-prev-preview-slide");
    } else {
      $(".projects-page-preview-slide").addClass("projects-page-next-preview-slide");
    }
  },

  previewHide: function() {
    $(".projects-page-preview-slide").fadeOut(500, function() {
        $(this).remove();
    });
  },

  defaultAdvance: function() {
    setTimeout(function() {
      ProjectsSlider.nextSlide();
      ProjectsSlider.defaultAdvance();
    }, 5000);
  }

};

