
function Slider (numberSlides, page) {
  var self = this;
  this.numberSlides = numberSlides;
  this.page = page;
  this.currentSlide = null;
  this.currentCircle = null;

  this.userInput = function() {
    self.clickCircle();
    $("." + self.page + "-page-next-arrow").on("click", self.nextSlide);
    $("." + self.page + "-page-prev-arrow").on("click", self.previousSlide);
    $("." + self.page + "-page-prev-arrow").hover(function() {
      self.previewShow("prev");
    }, self.previewHide);
    $("." + self.page + "-page-next-arrow").hover(function() {
      self.previewShow("next");
    }, self.previewHide);
  }

  this.init = function() {
    self.addSlides();
    self.addCircles();
    $("." + self.page + "-page-slide").hide();
    self.currentSlide = $("." + self.page + "-page-slide").first();
    self.currentCircle = $("." + self.page + "-page-circle").first();
    self.currentCircle.addClass("active-" + self.page + "-page-circle");
    self.currentSlide.show();
  }

  this.addSlides = function() {
    for (var i = 1; i <= self.numberSlides; i++) {
      $("." + self.page + "-page-slide-container").append("<div class='" + self.page + "-page-slide' data-slide-num='" + i + "'><img src='images/" + self.page + "/" + i + ".jpg'></div>");
    }
  }

  this.addCircles = function() {
    for (var i = 1; i <= self.numberSlides; i++) {
      $("." + self.page + "-page-circles").append("<div class='" + self.page + "-page-circle' data-slide='" + i + "'></div>");
    }
  }

  this.nextSlide = function() {
    self.currentSlide.animate({ left: "-200%" }, 1000);
    self.currentCircle.removeClass("active-" + self.page + "-page-circle");
    if (self.currentSlide.next().length != 0) {
      self.currentSlide = self.currentSlide.next();
      self.currentCircle = self.currentCircle.next();
    }
    else {
      self.currentSlide = $("." + self.page + "-page-slide:first-child");
      self.currentCircle = $("." + self.page + "-page-circle:first-child");
    }
    self.currentCircle.addClass("active-" + self.page + "-page-circle");
    self.currentSlide.css("left", "100%");
    self.currentSlide.show();
    self.currentSlide.animate({ left: "0%" }, 1000);
  }

  this.previousSlide = function() {
    console.log("prev slide");
    self.currentSlide.animate({ left: "100%" }, 1000);
    self.currentCircle.removeClass("active-" + self.page + "-page-circle");
    if (self.currentSlide.prev().length != 0) {
      self.currentSlide = self.currentSlide.prev();
      self.currentCircle = self.currentCircle.prev();
    }
    else { 
      self.currentSlide = $("." + self.page + "-page-slide:last-child");
      self.currentCircle = $("." + self.page + "-page-circle:last-child");
    }
    self.currentCircle.addClass("active-" + self.page + "-page-circle");
    self.currentSlide.css("left", "-200%");
    self.currentSlide.show();
    self.currentSlide.animate({ left: "0%" }, 1000);
  }

  this.clickCircle = function() {
    $("." + self.page + "-page-circle").on("click", function() {
      var prevSlideNumber = parseInt(self.currentCircle.data("slide"));
      self.currentCircle.removeClass("active-" + self.page + "-page-circle");
      self.currentCircle = $(this);
      self.currentCircle.addClass("active-" + self.page + "-page-circle");
      var currentSlideNumber = parseInt(self.currentCircle.data("slide"));
      console.log(currentSlideNumber);
      var slideNumberDiff = currentSlideNumber - prevSlideNumber;
      if (slideNumberDiff > 0) {
        self.currentSlide.animate({ left: "-200%" }, 1000);
        self.currentSlide = $("." + self.page + "-page-slide:nth-child(" + currentSlideNumber + ")");
        self.currentSlide.css("left", "100%");
        self.currentSlide.show();
        self.currentSlide.animate({ left: "0%" }, 1000);
      }
      else {
        self.currentSlide.animate({ left: "100%" }, 1000);
        self.currentSlide = $("." + self.page + "-page-slide:nth-child(" + currentSlideNumber + ")");
        self.currentSlide.css("left", "-200%");
        self.currentSlide.show();
        self.currentSlide.animate({ left: "0%" }, 1000);
      }
    });
  },

  this.newSlideNumber = function(type, slideNumber) {
    if (type === "prev") {
      return (slideNumber === 1) ? self.numberSlides : slideNumber - 1;
    }
    else {
      return (slideNumber === self.numberSlides) ? 1 : slideNumber + 1;
    }
  }

  this.previewShow = function(type) {
    var slideNumber = parseInt(self.currentSlide.data("slide-num"));
    var prevSlideNumber = self.newSlideNumber(type, slideNumber);
    $("<div class='" + self.page + "-page-preview-slide'><img src='images/" + self.page + "/" + prevSlideNumber 
       + ".jpg'></div>").appendTo("." + self.page + "-page-preview").hide().fadeIn(500);
    if (type === "prev") {
      $("." + self.page + "-page-preview-slide").addClass(self.page + "-page-prev-preview-slide");
    } else {
      $("." + self.page + "-page-preview-slide").addClass(self.page + "-page-next-preview-slide");
    }
  }

  this.previewHide = function() {
    $("." + self.page + "-page-preview-slide").fadeOut(500, function() {
        $(this).remove();
    });
  }

  this.defaultAdvance = function() {
    setTimeout(function() {
      self.nextSlide();
      self.defaultAdvance();
    }, 5000);
  }

};