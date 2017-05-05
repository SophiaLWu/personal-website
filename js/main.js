
$(document).ready(function() {
  loadContent();
  animateNavbar();
  animatePage();

  var projectsSlider = new Slider(9, "projects");
  projectsSlider.init();
  projectsSlider.userInput();
  addPortfolioDescriptions()

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

  function addPortfolioDescriptions() {
    $(".projects-page-slide").append("<div class='project-description'></div");
    $("div[data-slide-num='1']").find("img").wrap("<a href='https://frozen-sands-98166.herokuapp.com/'></a>");
    $("div[data-slide-num='1']").find(".project-description").append("<a href='https://frozen-sands-98166.herokuapp.com/'>BOOK OF FACES</a>: Ruby on Rails fully functional social network web app");
    $("div[data-slide-num='2']").find(".project-description").append("<a href='https://frozen-stream-95035.herokuapp.com/'>WHERE'S WALDO?</a>: Ruby on Rails web puzzle game with a JavaScript/jQuery and Ajax front end"); 
    $("div[data-slide-num='2']").find("img").wrap("<a href='https://frozen-stream-95035.herokuapp.com/'></a>");
    $("div[data-slide-num='3']").find(".project-description").append("<a href='https://sophialwu.github.io/minesweeper/'>MINESWEEPER</a>: classic game rebuilt as a web game with JavaScript/jQuery"); 
    $("div[data-slide-num='3']").find("img").wrap("<a href='https://sophialwu.github.io/minesweeper/'></a>");
    $("div[data-slide-num='4']").find(".project-description").append("<a href='https://sophialwu.github.io/missile-command/'>MISSILE COMMAND</a>: Atari's game built using HTML5 Canvas"); 
    $("div[data-slide-num='4']").find("img").wrap("<a href='https://sophialwu.github.io/missile-command/'></a>");
    $("div[data-slide-num='5']").find(".project-description").append("<a href='https://sophialwu.github.io/snake-game/'>SNAKE</a>: JavaScript/jQuery web game");
    $("div[data-slide-num='5']").find("img").wrap("<a href='https://sophialwu.github.io/snake-game/'></a>");
    $("div[data-slide-num='6']").find(".project-description").append("<a href='https://quiet-forest-50554.herokuapp.com/'>PRIVATE EVENTS</a>: Ruby on Rails event planning web app utilizing Bootstrap");
    $("div[data-slide-num='6']").find("img").wrap("<a href='https://quiet-forest-50554.herokuapp.com/'></a>");
    $("div[data-slide-num='7']").find(".project-description").append("<a href ='https://sophialwu.github.io/tic-tac-toe/'>TIC-TAC-TOE</a>: minimalist web game built with JavaScript/jQuery");
    $("div[data-slide-num='7']").find("img").wrap("<a href='https://sophialwu.github.io/tic-tac-toe/'></a>");
    $("div[data-slide-num='8']").find(".project-description").append("<a href='https://rawgit.com/SophiaLWu/project-javascript-jquery/master/index.html'>ETCH-A-SKETCH</a>: JavaScript/jQuery web app");
    $("div[data-slide-num='8']").find("img").wrap("<a href='https://rawgit.com/SophiaLWu/project-javascript-jquery/master/index.html'></a>");
    $("div[data-slide-num='9']").find(".project-description").append("<a href='https://github.com/SophiaLWu/zuma-game'>ZUMA</a>: Puzzle game built using Python's Tkinter GUI");
    $("div[data-slide-num='9']").find("img").wrap("<a href='https://github.com/SophiaLWu/zuma-game'></a>");
  }

});