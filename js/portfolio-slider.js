var ProjectsSlider = {
  numberSlides: 4,
  currentSlide: $(".slide").first(),
  currentCircle: $(".projects-circle").first(),

  userInput: function() {
    ProjectsSlider.clickCircle();
    $(".projects-next-arrow").on("click", ProjectsSlider.nextSlide);
    $(".projects-prev-arrow").on("click", ProjectsSlider.previousSlide);
    $(".projects-prev-arrow").hover(function() {
      ProjectsSlider.previewShow("prev");
    }, ProjectsSlider.previewHide);
    $(".projects-next-arrow").hover(function() {
      ProjectsSlider.previewShow("next");
    }, ProjectsSlider.previewHide);
  },

  init: function() {
    ProjectsSlider.addSlides();
    ProjectsSlider.addCircles();
    $(".projects-slide").hide();
  },

  addSlides: function() {
    for (var i = 1; i <= ProjectsSlider.numberSlides; i++) {
      $(".projects-slide-container").append("<div class='projects-slide'><img src='images/projects/" + i + ".jpg'><p>" + i + "</p></div>");
    }
  },

  addCircles: function() {
    for (var i = 1; i <= ProjectsSlider.numberSlides; i++) {
      $(".projects-circles").append("<div class='projects-circle'>" + i + "</div>");
    }
  },

  nextSlide: function() {
    ProjectsSlider.currentSlide.hide("projects-slide", { direction: "left" }, 1000);
    ProjectsSlider.currentCircle.removeClass("active-projects-circle");
    if (ProjectsSlider.currentSlide.next().length != 0) {
      ProjectsSlider.currentSlide = ProjectsSlider.currentSlide.next();
      ProjectsSlider.currentCircle = ProjectsSlider.currentCircle.next();
    }
    else {
      ProjectsSlider.currentSlide = $(".projects-slide:first-child");
      ProjectsSlider.currentCircle = $(".projects-circle:first-child");
    }
    ProjectsSlider.currentCircle.addClass("active-projects-circle");
    ProjectsSlider.currentSlide.show("projects-slide", { direction: "right" }, 1000);
  },

  previousSlide: function() {
    ProjectsSlider.currentSlide.hide("projects-slide", { direction: "right" }, 1000);
    ProjectsSlider.currentCircle.removeClass("projects-active-circle");
    if (ProjectsSlider.currentSlide.prev().length != 0) {
      ProjectsSlider.currentSlide = ProjectsSlider.currentSlide.prev();
      ProjectsSlider.currentCircle = ProjectsSlider.currentCircle.prev();
    }
    else { 
      ProjectsSlider.currentSlide = $(".projects-slide:last-child");
      ProjectsSlider.currentCircle = $(".projects-circle:last-child");
    }
    ProjectsSlider.currentCircle.addClass("active-projects-circle");
    ProjectsSlider.currentSlide.show("projects-slide", { direction: "left" }, 1000);
  },

  clickCircle: function() {
    $(".projects-circle").on("click", function() {
      var prevSlideNumber = parseInt(ProjectsSlider.currentCircle.text());
      ProjectsSlider.currentCircle.removeClass("active-projects-circle");
      ProjectsSlider.currentCircle = $(this);
      ProjectsSlider.currentCircle.addClass("active-projects-circle");
      var currentSlideNumber = parseInt(ProjectsSlider.currentCircle.text());
      var slideNumberDiff = currentSlideNumber - prevSlideNumber;
      if (slideNumberDiff > 0) {
        ProjectsSlider.currentSlide.hide("projects-slide", { direction: "left" }, 1000);
        ProjectsSlider.currentSlide = $(".projects-slide:nth-child(" + currentSlideNumber + ")");
        ProjectsSlider.currentSlide.show("projects-slide", { direction: "right" }, 1000);
      }
      else {
        ProjectsSlider.currentSlide.hide("projects-slide", { direction: "right" }, 1000);
        ProjectsSlider.currentSlide = $(".projects-slide:nth-child(" + currentSlideNumber + ")");
        ProjectsSlider.currentSlide.show("projects-slide", { direction: "left" }, 1000);
      }
    });
  },

  newSlideNumber: function(type, slideNumber) {
    if (type === "prev") {
      return (slideNumber === 1) ? 12 : slideNumber - 1;
    }
    else {
      return (slideNumber === 12) ? 1 : slideNumber + 1;
    }
  },

  previewShow: function(type) {
    var slideNumber = parseInt(ProjectsSlider.currentSlide.find("p").text());
    var prevSlideNumber = ProjectsSlider.newSlideNumber(type, slideNumber)
    $("<div class='projects-preview-slide'><img src='images/" + prevSlideNumber 
       + ".jpg'></div>").appendTo(".projects-preview").hide().fadeIn(500);
    if (type === "prev") {
      $(".projects-preview-slide").addClass("projects-prev-preview-slide");
    } else {
      $(".projects-preview-slide").addClass("projects-next-preview-slide");
    }
  },

  previewHide: function() {
    $(".projects-preview-slide").fadeOut(500, function() {
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
