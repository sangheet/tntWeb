var $ = jQuery,
    firstVisit = true,
    currentNamespace,
    scroll = $(window).scrollTop(),
    lastScroll,
    windowWidth = $(window).width(),
    containerOffset = $(".global__header-wrapper .container").offset().left,
    headerWrapper,
    menuTrigger;

$(() => {
  //Update global variables on document ready
  headerWrapper = $(".global__header-wrapper"),
  menuTrigger = $(".global__menu-overlay-trigger");

  // Loader
  loaderCount(20, true);

  barba.hooks.before((data) => {
    headerWrapper.addClass("is-visible");

    if(scroll > headerWrapper.innerHeight()) {
      headerWrapper.addClass("solid");
    }
  });

  barba.hooks.beforeEnter((data) => {
    splitWords();
    $(window).scrollTop(0);
    headerWrapper.removeClass("solid");
  });

  barba.hooks.afterEnter((data) => {
    currentNamespace = data.next.namespace;

    if(data.next.namespace == "inicio" || data.next.namespace == "blog" || data.next.namespace == "eventos" || data.next.namespace == "contacto") {
      //headerWrapper.addClass("text-white");
      console.log("A");
    } else {
      //headerWrapper.removeClass("text-white");
      
    }
  });

  //Page transitions
  barba.init({
    views: [
      {
        namespace: 'inicio',
        beforeLeave(data) {
          const done = this.async();

          homeFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            homeFunctions(0, 500);

            //Show video popup
            servicesPopup(1500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'expertise',
        beforeLeave(data) {
          const done = this.async();

         // expertiseFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
           // expertiseFunctions(0, 500);
          } else {
            firstVisit = true;
          }
        }
      },
      {
        namespace: 'proyectos',
        beforeLeave(data) {
          const done = this.async();

          projectsFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            projectsFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'data-insights',
        beforeLeave(data) {
          const done = this.async();

          dataFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            dataFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'conocimiento',
        beforeLeave(data) {
          const done = this.async();

          knowledgeFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          var knowledgeCategory = $.urlParam('category');

          if(!firstVisit) {
            knowledgeFunctions(0, 500);
            Cf7Init();
          } else {
            firstVisit = false;
          }

          if (knowledgeCategory != 0) {
            knowledgeFilter(knowledgeCategory);
          } else {
            knowledgeFilter("Books");
          }
        }
      },
      {
        namespace: 'blog',
        beforeLeave(data) {
          const done = this.async();

          blogFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            blogFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'post',
        beforeLeave(data) {
          const done = this.async();

          postFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            postFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'eventos',
        beforeLeave(data) {
          const done = this.async();

          eventsFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            eventsFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'evento',
        beforeLeave(data) {
          const done = this.async();

          eventFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            eventFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'equipo',
        beforeLeave(data) {
          const done = this.async();

          teamFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            teamFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'carreras',
        beforeLeave(data) {
          const done = this.async();

          careersFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            careersFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'vacante',
        beforeLeave(data) {
          const done = this.async();

          jobFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            jobFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'contacto',
        beforeLeave(data) {
          const done = this.async();

          contactFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            contactFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      },
      {
        namespace: 'disruptive-test',
        beforeLeave(data) {
          const done = this.async();

          disruptiveFunctions(0, 0, true, true);

          setTimeout(() => {
            done();
          }, 2000);
        },
        afterEnter(data) {
          if(!firstVisit) {
            disruptiveFunctions(0, 500);
          } else {
            firstVisit = false;
          }
        }
      }
    ]
  });






  //Night mode
  var nightModeStatus = Cookies.get("night-mode"),
      currentHour = new Date().getHours();

  if (currentHour < 8 || currentHour > 19) {
    $("body").attr("data-theme", "light");    $(".global__header-night-mode input[type='checkbox']").prop('checked', true);
  }


  if (nightModeStatus == "on") {
    $("body").attr("data-theme", "night");
    $(".global__header-night-mode input[type='checkbox']").prop('checked', true);
  } else if(nightModeStatus == "off") {
    $("body").attr("data-theme", "light");
    $(".global__header-night-mode input[type='checkbox']").prop('checked', false);
  }

  $(".global__header-night-mode input[type='checkbox']").on("change", nightModeChange);
  


 /*  //Scroll animation
  $("a.scroll-target").click((e) => {
    var target = $(e.currentTarget).attr("href");
    
    e.preventDefault();

    $('html,body').animate({
      scrollTop: $(target).offset().top
    }, 2000, "easeInOutQuart");
  }); */



  //No-barba link
 /*  $(".no-barba").click((e) => {
    var url = $(e.currentTarget).attr("href");

    //window.location.href = url;

    return false;
  }); */



  //Menu
  $(".global__menu-overlay-trigger, .global__menu-overlay-close, .global__menu-left-arrow, .global__menu-category-section").click(() => {
    menuTrigger.toggleClass("active");
    $(".global__menu-overlay").toggleClass("is-visible");

    $(".global__menu-overlay .animate-on-load").each((i, e) => {
      setTimeout(() => {
        $(e).toggleClass("hidden");
      }, i * 100);
    });
  });

  $(".global__menu-category-section").click((e) => {
    $(".global__menu-category-section").removeClass("current");
    $(e.currentTarget).addClass("current");
  });
});



$(window).load(() => {
  currentNamespace = $(".global__wrapper").data("barba-namespace");

  //Loader
  loaderCountAnimate.stop();
  loaderCount(86, 88, 93, 94, 96, 100, true);

  // Check first visit for header text color
  if (currentNamespace == "inicio" || currentNamespace == "blog" || currentNamespace == "eventos" || currentNamespace == "contacto") {
    headerWrapper.addClass("text-white");
  } else {
    headerWrapper.removeClass("text-white");
  }
    
  //Check first visit for animations delay
  if (currentNamespace == "inicio") {
    homeFunctions(3000, 500);

    //Show video popup
    servicesPopup(4500);
  } else if (currentNamespace == "expertise") {
    expertiseFunctions(3000, 500);
  } else if (currentNamespace == "proyectos") {
    projectsFunctions(3000, 500);
  } else if (currentNamespace == "data-insights") {
    dataFunctions(3000, 500);
  } else if (currentNamespace == "conocimiento") {
    knowledgeFunctions(3000, 500);
  } else if (currentNamespace == "blog") {
    blogFunctions(3000, 500);
  } else if (currentNamespace == "post") {
    postFunctions(3000, 500);
  } else if (currentNamespace == "eventos") {
    eventsFunctions(3000, 500);
  } else if (currentNamespace == "evento") {
    eventFunctions(3000, 500);
  } else if (currentNamespace == "equipo") {
    teamFunctions(3000, 500);
  } else if (currentNamespace == "carreras") {
    careersFunctions(3000, 500);
  } else if (currentNamespace == "vacante") {
    jobFunctions(3000, 500);
  } else if (currentNamespace == "contacto") {
    contactFunctions(3000, 500);
  } else if (currentNamespace == "disruptive-test") {
    disruptiveFunctions(3000, 500);
  }

  //Run global functions on load
  menuTrigger.addClass("hidden");

  setTimeout(() => {
    headerMenu();
  }, 3500);
});




$(window).scroll(() => {
  headerScroll();

  if (currentNamespace == "expertise") {
    expertiseSidebarFixed();
    expertiseInfoBubblesPosition();
  } else if (currentNamespace == "proyectos") {
    // projectsTypesFixed();
  }
});




$(window).on("resize", () => {
  windowWidth = $(window).width(),
  containerOffset = $(".global__header-wrapper .container").offset().left;
});






//Global functions

//Animate loader
var args,
    loaderCountAnimate;

function loaderCount() {
  if(arguments[arguments.length - 1] == true) {
    args = [];

    [...arguments].forEach((e) => {
      args.push(e);
    });
  }

  loaderCountAnimate = $({counter: arguments[0]}).animate({ counter: arguments[1] }, {
    duration: 500,
    step: (now) => {
      $(".global__loader-info-percent").text(Math.ceil(now) + "%");

      if(Math.ceil(now) == 100) {
        loaderCountAnimate.stop();
        loader();
      }
    },
    done: () => {
      args.splice(0, 1);

      if(args[1] != true) {
        loaderCount(args[0], args[1]);
      }
    }
  });
}

function loader() {
  $(".global__loader-overlay.white").addClass("active");

  setTimeout(() => {
    $(".global__loader-overlay.black").addClass("hide");
  }, 280);
}



// Runs on window load (3500 delay)
// Animate header/menu on load
function headerMenu() {
  if(scroll < headerWrapper.innerHeight()) {
    headerWrapper.addClass("is-visible");
  }

  setTimeout(() => {
    menuTrigger.addClass("animate");

    setTimeout(() => {
      menuTrigger.removeClass("animate hidden");
    }, 1500);
  }, 1000);
}


// Runs on window scroll
// Change header/menu classes
function headerScroll() {
  lastScroll = scroll,
  scroll = $(window).scrollTop();

  if(scroll > headerWrapper.innerHeight()) {
    headerWrapper.addClass("fixed").removeClass("is-visible transition");
  } else {
    headerWrapper.removeClass("fixed").addClass("transition");
  }

  if(scroll > lastScroll) {
    if(containerOffset < menuTrigger.width()) {
      menuTrigger.addClass("hidden");
    }
  } else {
    menuTrigger.removeClass("hidden");
  }
}


//Slider
function slider(reverse) {
  if (!reverse) {
    $(".global__slider").each((i, el) => {
      $(el).slick({
        rows: 0,
        fade: true,
        speed: 1000,
        easing: 'easeInOutCuart',
        dots: true,
        prevArrow: $(el).next().find(".global__left-arrow"),
        nextArrow: $(el).next().find(".global__right-arrow")
      });
    });
  }
}


// Split words
function splitWords() {
  var linesToSplit = $(".global__split-words");

  linesToSplit.each((i, el) => {
    var line = $(el),
        words = line.text().trim().split(" ");

    if(line.children().length <= 0) {
      line.html("");

      $.each(words, (i, word) => {
        line.append("<div class='global__word-wrapper hidden'><span>" + word + "</span></div>");
      });
    }
  });
}


//Animate split words
function animateSplitWords(words, reverse) {
  var wordsList = words;

  if (reverse) {
    wordsList = words.get().reverse()
  }

  $(wordsList).each((i, el) => {
    setTimeout(() => {
      toggleClasses($(el), "hidden", reverse);
    }, i * 100);
  });
}


//Animate secondary elements
function animateElements(elements, reverse, delay) {
  var introElements = elements;

  if (reverse) {
    introElements = introElements.get().reverse();
  }

  if (delay != null) {
    var delayTime = delay;
  } else {
    var delayTime = 150;
  }

  $(introElements).each((i, el) => {
    setTimeout(() => {
      toggleClasses($(el), "hidden", reverse);
    }, i * delayTime);
  });
}


//Toggle class based on reverse variable
function toggleClasses(el, classes, reverse, addClassesOnLoad) {
  if (reverse) {
    if(addClassesOnLoad == true) {
      el.removeClass(classes);
    } else {
      el.addClass(classes);
    }
  } else {
    if(addClassesOnLoad == true) {
      el.addClass(classes);
    } else {
      el.removeClass(classes);
    }
  }
}


//Change offset for waypoints based on reverse variable
function offsetWaypoints(reverse, customOffset) {
  var offset = customOffset;

  if (offset == null) {
    offset = "75%";
  }

  if (reverse) {
    offset = "100%";
  }
  
  return offset;
}


//Night mode switch
function nightModeChange() {
  var $this = $(this);

  if ($this.is(":checked")) {
    $("body").attr("data-theme", "night");

    Cookies.set("night-mode", "on", {expires: 1});
  } else {
    $("body").attr("data-theme", "light");

    Cookies.set("night-mode", "off", {expires: 1});
  }
}



//Blog
function articles(type, reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 500;
  }

  $('.global__blog-module-wrapper.' + type).waypoint({
    handler: function() {
      toggleClasses($(".global__blog-module-wrapper." + type), "hidden", reverse);
      toggleClasses($(".global__blog-module-wrapper." + type + " .global__section-header"), "hidden", reverse);

      setTimeout(() => {
        animateElements($(".global__blog-module-wrapper." + type + " .global__blog-module-item"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}



//Events module
function eventsModule(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 500;
  }

  $('.global__events-module').waypoint({
    handler: function(direction) {
      toggleClasses($(".global__events-module .global__section-header"), "hidden", reverse);

      setTimeout(() => {
        animateElements($(".global__events-module .animate-on-load"), reverse);
      }, delayTime);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}


//Career module color
$("body").on("mouseenter", ".global__career-module", (e) => {
  var color = $(e.currentTarget).data("color");
  
  $(e.currentTarget).css("background-color", color);
});

$("body").on("mouseleave", ".global__career-module", (e) => {
  $(e.currentTarget).css("background-color", "");
});


//Careers module
function moduleCareers(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 500;
  }

  $('.global__careers-module').waypoint({
    handler: function(direction) {
      toggleClasses($(".global__careers-module"), "hidden", reverse);
      toggleClasses($(".global__careers-module .global__section-header"), "hidden", reverse);

      setTimeout(() => {
        animateElements($(".global__careers-module .animate-on-load"), reverse);
      }, delayTime);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}



//Reinitialize CF7 forms
function Cf7Init() {
  $('div.wpcf7 > form').each((i,e) => {
    const $form = $(e);

    wpcf7.initForm($form);

    if(wpcf7.cached) {
      wpcf7.refill($form);
    }
  });
}



//Footer
function footer(reverse) {
  if (reverse) {
    animateSplitWords($("footer .global__word-wrapper"), reverse);
    animateElements($("footer .animate-on-load"), reverse);
  } else {
    $('footer').waypoint({
      handler: function(direction) {
        animateSplitWords($("footer .global__word-wrapper"), reverse);
        animateElements($("footer .animate-on-load"), reverse);
  
        this.destroy();
      },
      offset: offsetWaypoints(reverse)
    });
  }
}


//Remove accents
function simplifyText(str) {
  var map = {
      'a' : 'á|à|ã|â|À|Á|Ã|Â',
      'e' : 'é|è|ê|É|È|Ê',
      'i' : 'í|ì|î|Í|Ì|Î',
      'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ'
  };
  
  str = str.toLowerCase();
  
  for (var pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  };

  return str;
};




// Search url parameter
/* $.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                    .exec(window.location.href);
  if (results == null) {
       return 0;
  }
  return results[1] || 0;
} */
// Global variables
var foresightBlinks;

//Home functions
function homeFunctions(delayOnLoad, delayElements, reverse, skip) {
  slider(reverse);

  setTimeout(() => {
    //Animate split words
    animateSplitWords($(".home__intro-block-info .global__word-wrapper"), reverse);

    //Intro cover
    homeIntroBackground(reverse);

    setTimeout(() => {
      //Intro elements
      animateElements($(".home__intro-animate-elements .animate-on-load"), reverse);

      if(skip != true) {
        //Foresight animation
        foresight();
      }
    }, delayElements);

    //Stadistics
    stadistics(reverse, skip);

    //Projects
    projects(reverse);

    //Blog
    articles("blog", reverse);

    //Anticrisis service
    anticrisis(reverse);

    //Expertise
    expertise(reverse);

    //Events
    events(reverse);

    //Case studies
    articles("case-studies", reverse);

    //External articles
    externalArticles(reverse)

    //Footer
    footer(reverse);
  }, delayOnLoad);
}






//Intro
function homeIntroBackground(reverse) {
  toggleClasses($(".home__intro-background"), "hidden", reverse);
}

function foresight() {
  $(".home__intro-background-outline").removeClass("hidden");

  if (foresightBlinks != null) {
    clearTimeout(foresightBlinks);
  }

  foresightBlinks = setTimeout(() => {
    $(".home__intro-background-outline").addClass("blinks");
  }, 4000);

  $(".home__intro-background-outline").hover(() => {
    $(".home__intro-background-outline").removeClass("blinks").addClass("blinks-stop");

    $(".home__intro-foresight").toggleClass("hidden");
  });
}




// Stadistics
function stadistics(reverse, skip) {
  toggleClasses($('.home__stadistics-wrapper'), "hidden", reverse);

  $('.home__stadistics-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".home__stadistics-wrapper .home__stadistic-item-wrapper"), reverse);
      
      if (!skip) {
        stadisticsCounter();
      }

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function stadisticsCounter() {
  $('.home__stadistic-number').each((i, el) => {
    $({counter: 0}).animate({ counter: $(el).data("count") }, {
      duration: 1500,
      easing: 'easeInOutQuart',
      step: (now) => {
        if($(el).data("plus") !== undefined) {
          $(el).text("+" + Math.ceil(now));
        } else {
          $(el).text(Math.ceil(now));
        }
      }
    });
  });
}



//Projects
function projects(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 1000;
  }

  $('.home__projects-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($('.home__projects-wrapper'), "hidden", reverse);
      
      setTimeout(() => {
        animateSplitWords($(".home__projects-info .global__word-wrapper"), reverse);
        
        setTimeout(() => {
          animateElements($(".home__projects-info .animate-on-load"), reverse);
        }, 300);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}



// Anticrisis service
function anticrisis(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 400;
  }
  
  $('.home__anticrisis-service-wrapper').waypoint({
    handler: function(direction) {
      //Expertise header
      toggleClasses($(".home__anticrisis-service-wrapper .global__section-header"), "hidden", reverse);
      animateSplitWords($(".home__anticrisis-service-wrapper .global__word-wrapper"), reverse);
      animateElements($(".home__anticrisis-service-wrapper .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });

  $(".open-popup").click(() => {
    $(".global__popup-services-overlay").addClass("is-visible");

    return false;
  });
}



// Expertise lines
function expertise(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 400;
  }

  if ($(window).width() > 991) {
    var expertiseOptionDelay = 400;
  } else {
    var expertiseOptionDelay = 500;
  }
  
  $('.home__expertise-wrapper').waypoint({
    handler: function(direction) {
      //Expertise header
      toggleClasses($(".home__expertise-wrapper .global__section-header"), "hidden", reverse);
      animateSplitWords($(".home__expertise-header .global__word-wrapper"), reverse);
      toggleClasses($(".home__expertise-options"), "progress-line", reverse, true);

      //Expertise options
      setTimeout(() => {
        setTimeout(() => {
          toggleClasses($(".home__expertise-header"), "progress-line", reverse, true);
        }, 300);

        $(".home__expertise-option-wrapper").each((i, el) => {
          setTimeout(() => {
            toggleClasses($(el), "progress-line", reverse, true);
          }, i * expertiseOptionDelay);

          setTimeout(() => {
            toggleClasses($(el).children(), "hidden", reverse);
          }, i * 400);
        });
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}



function events(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 400;
  }
  
  $('.home__events-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".home__events-wrapper, .home__event-bg-image"), "hidden", reverse);
      
      setTimeout(() => {
        toggleClasses($(".home__event-info"), "hidden", reverse);

        setTimeout(() => {
          toggleClasses($(".home__events-arrows"), "hidden", reverse);

          setTimeout(() => {
            toggleClasses($(".home__events-wrapper"), "slow-animation", reverse);
          }, delayTime * 5);
        }, delayTime);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}



//External articles
function externalArticles(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 500;
  }

  $(".home__articles-wrapper").waypoint({
    handler: function() {
      toggleClasses($(".home__articles-wrapper"), "hidden", reverse);
      animateSplitWords($(".home__articles-title .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".home__articles-wrapper .home__articles-item"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function expertiseFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    //Intro
    expertiseIntro(reverse);

    //Facts
    externalArticles(reverse)

    //Animate expertise services
    expertiseServices(reverse);

    // Services overlay interaction
    expertiseServicesTabs();

    //Expertise sidebar fixed on scroll
    expertiseSidebarFixed();

    //Service step info bubble position
    expertiseInfoBubblesPosition();

    //Blog
    articles("blog", reverse);

    //Footer
   // footer(reverse);
  }, delayOnLoad);
}


function expertiseIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 800;
  }

  $('.global__intro-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".global__intro-wrapper"), "hidden", reverse);

      animateSplitWords($(".global__intro-info .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".global__intro-wrapper .animate-on-load"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function expertiseServices(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 400;
  }

  $('.services__details-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".services__details-sidebar"), "hidden", reverse);

      animateSplitWords($(".service__details-info-title .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".services__details-sidebar-container .animate-on-load"), reverse);
        animateElements($(".service__item-wrapper.active .animate-on-load"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function expertiseServicesTabs() {
  $(".services__details-sidebar-title").click((e) => {
    var target = $(e.currentTarget),
        serviceName = target.data("service");

    $(".services__details-sidebar-title.active").removeClass("active");
    $(".services__details-sidebar-title[data-service='" + serviceName + "']").addClass("active");

    $(".service__item-wrapper.active").removeClass("active");

    setTimeout(() => {
      $(".service__item-wrapper").hide();
      $(".service__item-wrapper[data-service='" + serviceName + "']").show();
    }, 500);

    setTimeout(() => {
      $(".service__item-wrapper[data-service='" + serviceName + "']").addClass("active");
    }, 550);
  });
}

function expertiseSidebarFixed() {
  var sidebarOffset = $(".services__details-sidebar").offset().top,
      sidebarContainer = $(".services__details-sidebar-container"),
      sidebarContainerBottom = sidebarContainer.innerHeight() + scroll,
      nextSectionOffset = $(".services__details-wrapper").next().offset().top;

  if(scroll > sidebarOffset) {
    if(sidebarContainerBottom >= nextSectionOffset) {
      sidebarContainer.addClass("bottom");
    } else {
      sidebarContainer.addClass("fixed").removeClass("bottom");
    }
  } else {
    sidebarContainer.removeClass("fixed");
  }
}

function expertiseInfoBubblesPosition() {
  var infoIcon = $(".service__details-step-info-icon");

  infoIcon.each((i, el) => {
    var bubbleHeight = parseInt(window.getComputedStyle($(el).get(0), ':before').height) + parseInt(window.getComputedStyle($(el).get(0), ':after').height),
        infoIconOffset = $(el).offset().top,
        bubbleOffset = infoIconOffset - bubbleHeight;

    if(scroll > bubbleOffset) {
      $(el).addClass("down");
    } else {
      $(el).removeClass("down");
    }
  });
}
function projectsFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    //Projects global functions
    projectsGlobal(reverse);

    projectsIntro(reverse);

    projectsTypes(reverse);
    
    // projectsTypesFixed();

    projectsList(reverse);

    //Blog
    articles("blog", reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}


function projectsGlobal(reverse) {
  setTimeout(() => {
    $(".projects__item-wrapper").addClass("after-animation");
  }, 2000);

  $(".filters-module__sidebar-link").click((e) => {
    var tipo = $(e.target).data("tipo"),
        projects;

    if (tipo == "all") {
      projects = $(".projects__item-wrapper");
    } else {
      projects = $(".projects__item-wrapper[data-tipo='" + tipo + "']");
    }

    $(".filters-module__sidebar-link").removeClass("active")
    $(e.target).addClass("active");

    $(".projects__item-wrapper").addClass("inactive");
    
    setTimeout(() => {
      $(".projects__item-wrapper").hide();

      projects.show();

      setTimeout(() => {
        projects.removeClass("inactive");
      }, 50);

      //Blog
      articles("blog", reverse);

      //Footer
      footer(reverse);
    }, 500);

    return false;
  });
}


function projectsIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 800;
  }

  $('.global__intro-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".global__intro-wrapper"), "hidden", reverse);

      animateSplitWords($(".global__intro-info .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".global__intro-wrapper .animate-on-load"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}


function projectsTypes(reverse) {
  $('.filters-module__sidebar-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".filters-module__sidebar-wrapper .animate-on-load"), reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}


function projectsTypesFixed() {
  var sidebarOffset = $(".filters-module__sidebar-wrapper").offset().top - 60,
      sidebarContainer = $(".filters-module__sidebar-container"),
      sidebarContainerBottom = sidebarContainer.innerHeight() + scroll,
      nextSectionOffset = $(".filters-module__wrapper").next().offset().top;

  if(scroll > sidebarOffset) {
    if(sidebarContainerBottom >= nextSectionOffset - 80) {
      sidebarContainer.addClass("bottom");
    } else {
      sidebarContainer.addClass("fixed").removeClass("bottom");
    }
  } else {
    sidebarContainer.removeClass("fixed");
  }
}


function projectsList(reverse) {
  $('.filters-module__list').waypoint({
    handler: function(direction) {
      animateElements($(".filters-module__list .animate-on-load"), reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function dataFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    //Intro
    dataIntro(reverse);

    dataOptions(reverse);

    //Events module
    eventsModule(reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}


function dataIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 800;
  }

  $('.global__intro-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".global__intro-wrapper"), "hidden", reverse);

      animateSplitWords($(".global__intro-info .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".global__intro-wrapper .animate-on-load"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function dataOptions(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 300;
  }

  $(".data__options-wrapper").waypoint({
    handler: function(direction) {
      setTimeout(() => {
        animateElements($(".data__options-wrapper .animate-on-load"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function knowledgeFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    knowledgeGlobal(reverse);

    knowledgeIntro(reverse);

    knowledgeTabs(reverse);

    knowledgeContent(reverse);

    eventsModule(reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}

function knowledgeGlobal(reverse) {
  var downloadFormID = $(".knowledge__item-download .knowledge__item-download-form:not(.hidden) .wpcf7").attr("id"),
      downloadFormID = downloadFormID.match("-(.*)-")[1].replace("f", ""),
      bookUrl,
      bookType;

  $(".knowledge__types-tab").click((e) => {
    var el = $(e.currentTarget);
    bookType = $(el).data("book-type");

    knowledgeFilter(bookType, false);

    return false;
  });

  $(".knowledge__info-item").click((e) => {
    var el = $(e.currentTarget),
        bookImage = $(el).data("book-image"),
        bookTitle = $(el).data("book-title"),
        bookDescription = $(el).data("book-description"),
        bookExternal = $(el).data("book-external"),
        bookReplay = $(el).data("book-replay"),
        spotifyUrl = $(el).data("spotify");
    
    bookUrl = $(el).data("book-url");
    bookType = $(el).data("book-type");

    // Update book details
    $(".knowledge__header-title, .knowledge__item-detail-title").text(bookTitle);
    $(".knowledge__item-download-name").val(bookTitle);
    $(".knowledge__header-type").text(bookType);
    $(".knowledge__item-download-type").val(bookType);
    $(".knowledge__item-detail-description").text(bookDescription);
    $(".knowledge__item-detail-image img").attr("src", bookImage);
    $(".knowledge__item-download-link").attr("href", bookUrl);
    $(".knowledge__item-detail-option.replay").attr("href", bookReplay);
    $(".knowledge__item-detail-option.download").attr("href", bookUrl);
    $(".knowledge__item-detail-spotify").attr("href", spotifyUrl);

    if (bookExternal == "si") {
      $(".knowledge__item-download").hide();
      $(".knowledge__item-download-link").show();
      $(".knowledge__item-detail-description").addClass("is-external");
    } else {
      $(".knowledge__item-download").show();
      $(".knowledge__item-download-link").hide();
      $(".knowledge__item-detail-description").removeClass("is-external");
    }


    // Replace form
    if (bookTitle == "Disruptive Test") {
      $(".knowledge__item-download-form[data-form='principal']").addClass("hidden");
      $(".knowledge__item-download-form[data-form='secundario']").removeClass("hidden");
    } else {
      $(".knowledge__item-download-form[data-form='principal']").removeClass("hidden");
      $(".knowledge__item-download-form[data-form='secundario']").addClass("hidden");
    }

    // Update form id based on ebook selection
    downloadFormID = $(".knowledge__item-download .knowledge__item-download-form:not(.hidden) .wpcf7").attr("id");
    downloadFormID = downloadFormID.match("-(.*)-")[1].replace("f", "");

    // Display book details
    $("#knowledge__item-detail-anchor").parent().slideDown(1000, "easeInOutQuart");

    // Animate book details scroll
    $("body,html").animate({
      scrollTop: $("#knowledge__item-detail-anchor").offset().top - 50
    }, 1000, "easeInOutQuart");

    return false;
  });




  /* $(".knowledge__item-detail-option.download").click((e) => {
    var url = $(e.currentTarget).attr("href");

    window.location.href = url;

    return false;
  }); */




 /*  document.addEventListener( 'wpcf7mailsent', function( event ) {
    if (downloadFormID == event.detail.contactFormId) {
      if (bookType != "Webinars") {
        window.location.href = bookUrl;
      } else {
        $(".knowledge__item-detail-options").removeClass("hidden");
      }

      setTimeout(() => {
        $(".wpcf7-response-output").fadeToggle(1000);
      }, 5000);
    }
  }, false ); */
}


function knowledgeFilter(type, reverse) {
  var tab = $(".knowledge__types-tab[data-book-type='" + type + "']"),
      type = $(tab).data("book-type"),
      books = $(".knowledge__info-item[data-book-type='" + type + "']").parent(),
      booksContainer = $(".knowledge__info-item[data-book-type='" + type + "']");

  $(".knowledge__intro-title, .knowledge__types-tab").removeClass("active");
  $(tab).addClass("active");
  $(".knowledge__intro-title[data-book-type='" + type + "']").addClass("active");

  $(".knowledge__info-item").addClass("inactive");

  setTimeout(() => {
    $(".knowledge__info-item").parent().hide();

    books.show();

    setTimeout(() => {
      booksContainer.removeClass("inactive");
    }, 50);

    eventsModule(reverse);

    //Footer
    footer(reverse);
  }, 500);
}

function knowledgeIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 300;
  }

  $('.knowledge__wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".knowledge__intro-wrapper .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function knowledgeTabs(reverse) {
  $('.knowledge__info-content-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".knowledge__types-tabs .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function knowledgeContent(reverse) {
  $('.knowledge__info-content-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".knowledge__info-content-wrapper .animate-on-load"), reverse);

      setTimeout(() => {
        animateSplitWords($(".knowledge__info-title .global__word-wrapper"), reverse);
      }, 300);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function blogFunctions(delayOnLoad, delayElements, reverse, skip) {
  //Team global functions
  blogGlobal();

  setTimeout(() => {
    //Animate split words
    animateSplitWords($(".blog__intro-title .global__word-wrapper"), reverse);

    setTimeout(() => {
      //Intro elements
      animateElements($(".blog__intro-wrapper .animate-on-load"), reverse);
    }, delayElements);

    blogIntroBackground(reverse);

    blogScrollSection(reverse);

    blogFilters(reverse);

    blogSidebar(reverse);

    blogArticles(reverse);

    blogPagination(reverse);

    eventsModule(reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}

function blogGlobal() {
  $(".blog__filter").click((e) => {
    var target = $(e.currentTarget);

    target.addClass("active").siblings().removeClass("active");
  });
}

function blogIntroBackground(reverse) {
  toggleClasses($(".blog__intro-image"), "hidden", reverse);
}

function blogScrollSection(reverse) {
  $('.blog__intro-scroll').waypoint({
    handler: function(direction) {
      toggleClasses($('.blog__intro-scroll'), "hidden", reverse);
      animateSplitWords($(".blog__intro-scroll-title .global__word-wrapper"), reverse);
      
      setTimeout(() => {
        animateElements($(".blog__intro-scroll .animate-on-load"), reverse);
      }, 500);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function blogFilters(reverse) {
  $('.blog__filter-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($('.blog__filter-wrapper'), "hidden", reverse);
      animateElements($(".blog__filter-wrapper .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function blogArticles(reverse) {
  $('.blog__articles').waypoint({
    handler: function(direction) {
      animateElements($(".blog__articles .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function blogSidebar(reverse) {
  $('.blog__sidebar-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".blog__sidebar-wrapper .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function blogPagination(reverse) {
  $('.blog__articles-pagination-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".blog__articles-pagination-wrapper"), "hidden", reverse);

      pageNumbers = $(".blog__articles-pagination .page-numbers");

      if (reverse) {
        pageNumbers = pageNumbers.get().reverse();
      }

      $(pageNumbers).each((i, el) => {
        setTimeout(() => {
          toggleClasses($(el), "visible", reverse, true);
        }, i * 150);
      });

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function postFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    postGlobal(reverse);

    postIntro(reverse);

    postRecents(reverse);

    postContent(reverse);

    eventsModule(reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}

function postGlobal(reverse) {
  $(".post__other-posts-tab").click((e) => {
    var el = $(e.currentTarget),
        tab = $(el).data("post-tab");
    
    $(".post__other-posts-tab").removeClass("active");
    $(el).addClass("active");

    $(".post__sidebar-content-column").removeClass("active");

    setTimeout(() => {
      $(".post__sidebar-content-column[data-post-tab!='" + tab + "']").hide();
      $(".post__sidebar-content-column[data-post-tab='" + tab + "']").show();

      setTimeout(() => {
        $(".post__sidebar-content-column[data-post-tab='" + tab + "']").addClass("active");
      }, 50);

      eventsModule(reverse);

      //Footer
      footer(reverse);
    }, 500);

    return false;
  });
}

function postIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 300;
  }

  $('.post__wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".post__intro-wrapper .animate-on-load"), reverse);

      setTimeout(() => {
        animateSplitWords($(".post__intro-info-title .global__word-wrapper"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function postRecents(reverse) {
  $('.post__other-posts').waypoint({
    handler: function(direction) {
      animateElements($(".post__other-posts .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function postContent(reverse) {
  $('.post__info-content-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".post__info-content-wrapper .animate-on-load"), reverse);

      setTimeout(() => {
        animateSplitWords($(".post__info-title .global__word-wrapper"), reverse);
      }, 300);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function eventsFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    //Global events function
    eventsGlobal(reverse);

    //Animate split words
    animateSplitWords($(".events__intro-title .global__word-wrapper"), reverse);

    setTimeout(() => {
      //Intro elements
      animateElements($(".events__intro-wrapper .animate-on-load"), reverse);
    }, delayElements);

    eventsIntroBackground(reverse);

    eventsFilters(reverse);

    eventsList(reverse);

    //Blog
    articles("blog", reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}


function eventsGlobal(reverse) {
  $(".events__filter").click((e) => {
    var categoria = $(e.target).data("categoria"),
        events,
        eventsContainer;

    if (categoria == "All") {
      events = $(".global-event-module__item-wrapper").parent();
      eventsContainer = $(".global-event-module__item-wrapper");

    } else {
      events = $(".global-event-module__item-wrapper[data-categoria*='" + categoria + "']").parent();
      eventsContainer = $(".global-event-module__item-wrapper[data-categoria*='" + categoria + "']");
    }

    $(".events__filter").removeClass("active")
    $(e.target).addClass("active");

    $(".global-event-module__item-wrapper").addClass("inactive");
    
    setTimeout(() => {
      $(".global-event-module__item-wrapper").parent().hide();

      events.show();

      setTimeout(() => {
        eventsContainer.removeClass("inactive");
      }, 50);

      //Blog
      articles("blog", reverse);

      //Footer
      footer(reverse);
    }, 500);

    return false;
  });
}

function eventsIntroBackground(reverse) {
  toggleClasses($(".events__intro-image"), "hidden", reverse);

  setTimeout(() => {
    toggleClasses($(".events__closest-event-info"), "hidden", reverse);
  }, 700);
}

function eventsFilters(reverse) {
  $('.events__filter-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($('.events__filter-wrapper'), "hidden", reverse);
      animateElements($(".events__filter-wrapper .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function eventsList(reverse) {
  $('.events__list-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".events__list-wrapper .global__section-header"), "hidden", reverse);
      animateElements($(".events__list-wrapper .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function eventFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    eventIntro(reverse);

    eventRecents(reverse);

    eventContent(reverse);

    //Blog 
    articles("blog", reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}

function eventIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 300;
  }

  $('.event__wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".event__intro-wrapper .animate-on-load"), reverse);

      setTimeout(() => {
        animateSplitWords($(".event__intro-info-title .global__word-wrapper"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function eventRecents(reverse) {
  $('.event__other-events').waypoint({
    handler: function(direction) {
      animateElements($(".event__other-events .animate-on-load"), reverse);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function eventContent(reverse) {
  $('.event__info-content-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".event__info-content-wrapper .animate-on-load"), reverse);

      setTimeout(() => {
        animateSplitWords($(".event__info-title .global__word-wrapper"), reverse);
      }, 300);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function teamFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    //Team global functions
    teamGlobal();

    //Intro
    teamIntro(reverse);

    //Intro break image
    teamBreakImage(reverse);

    //Info options
    teamInfoOptions(reverse);

    //Blog
    articles("blog", reverse);

    //Director
    teamDirector(reverse);

    //Members list
    teamMembersList(reverse);

    //Gallery
    slider(reverse);
    teamGallery(reverse);

    //Benefits
    teamBenefits(reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}


function teamGlobal() {
  $(".team__info-option").hover((e) => {
    var target = $(e.currentTarget);
    $(target).children(".team__info-option-description").slideToggle(750, "easeInOutCubic");
  });
}

function teamIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 800;
  }

  $('.global__intro-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".global__intro-wrapper"), "hidden", reverse);

      animateSplitWords($(".global__intro-info .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".global__intro-wrapper .animate-on-load"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function teamBreakImage(reverse) {
  $('.team__intro-image').waypoint({
    handler: function(direction) {
      toggleClasses($(".team__intro-image"), "hidden", reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function teamInfoOptions(reverse) {
  $('.team__info-options').waypoint({
    handler: function(direction) {
      animateElements($(".team__info-options .animate-on-load"), reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function teamDirector(reverse) {
  $('.team__director-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".team__director-wrapper, .team__director-card"), "hidden", reverse);
      animateElements($(".team__director-info .animate-on-load"), reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function teamMembersList(reverse) {
  if (reverse) {
    var delayTimeout = 0,
        delayElements = 0;
  } else {
    var delayTimeout = 500,
        delayElements;
  }

  $('.team__list-wrapper').waypoint({
    handler: function(direction) {
      animateSplitWords($(".team__list-title .global__word-wrapper"), reverse);
      
      setTimeout(() => {
        animateElements($(".team__list-wrapper .animate-on-load"), reverse, delayElements);
      }, delayTimeout);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function teamGallery(reverse) {
  $('.team__gallery-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".team__gallery-wrapper"), "hidden", reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function teamBenefits(reverse) {
  if (reverse) {
    var delayTimeout = 0,
        delayElements = 0;
  } else {
    var delayTimeout = 500,
        delayElements;
  }

  $('.team__beliefs-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".team__beliefs-wrapper"), "hidden", reverse);

      animateSplitWords($(".team__beliefs-title .global__word-wrapper"), reverse);
      
      setTimeout(() => {
        animateElements($(".team__beliefs-wrapper .animate-on-load"), reverse, delayElements);
      }, delayTimeout);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function careersFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    //Global careers function
    careersGlobal(reverse);

    //Intro
    careersIntro(reverse);

    //Categories filter
    careersCategories(reverse);

    // Careers items
    careersList(reverse);

    //Blog
    articles("blog", reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}


function careersGlobal(reverse) {
  setTimeout(() => {
    $(".global__career-module").addClass("after-animation");
  }, 2000);

  $(".filters-module__sidebar-link, .filters-module__sidebar-btn").click((e) => {
    var categoria = $(e.target).data("categoria"),
        careers,
        careersContainer;

    if (categoria == "All") {
      careers = $(".global__career-module").parent();
      careersContainer = $(".global__career-module");

    } else {
      careers = $(".global__career-module[data-categoria*='" + categoria + "']").parent();
      careersContainer = $(".global__career-module[data-categoria*='" + categoria + "']");
    }

    $(".filters-module__sidebar-link").removeClass("active")
    $(e.target).addClass("active");

    $(".global__career-module").addClass("inactive");
    
    setTimeout(() => {
      $(".global__career-module").parent().hide();

      careers.show();

      setTimeout(() => {
        careersContainer.removeClass("inactive");
      }, 50);

      //Blog
      articles("blog", reverse);

      //Footer
      footer(reverse);
    }, 500);

    return false;
  });
}


function careersIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 800;
  }

  $('.global__intro-wrapper').waypoint({
    handler: function(direction) {
      toggleClasses($(".global__intro-wrapper"), "hidden", reverse);

      animateSplitWords($(".global__intro-info .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".global__intro-wrapper .animate-on-load"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function careersCategories(reverse) {
  $('.filters-module__sidebar-wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".filters-module__sidebar-wrapper .animate-on-load"), reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}

function careersList(reverse) {
  $('.filters-module__list').waypoint({
    handler: function(direction) {
      animateElements($(".filters-module__list .animate-on-load"), reverse);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function jobFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    //Global careers function
    jobGlobal(reverse);

    jobIntro(reverse);

    //Blog
    articles("blog", reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}


function jobGlobal(reverse) {
  
}

function jobIntro(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 300;
  }

  $('.career__wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".career__header-wrapper .animate-on-load"), reverse);

      setTimeout(() => {
        animateSplitWords($(".career__title .global__word-wrapper"), reverse);

        setTimeout(() => {
          animateElements($(".career__other-vacants .animate-on-load"), reverse);
          animateElements($(".career__info-content-wrapper .animate-on-load"), reverse);
        }, 300);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function contactFunctions(delayOnLoad, delayElements, reverse, skip) {
  //Team global functions
  contactGlobal();

  setTimeout(() => {
    //Animate split words
    animateSplitWords($(".contact__intro-info .global__word-wrapper"), reverse);

    setTimeout(() => {
      //Intro elements
      animateElements($(".contact__intro-info .animate-on-load"), reverse);
      animateElements($(".contact__intro-form .animate-on-load"), reverse);
    }, delayElements);

    contactIntroFormBackground(reverse);

    contactLocations(reverse);

    moduleCareers(reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}

function contactGlobal() {
  $(".contact__intro-info-input").keyup(function() {
    if($(this).val().length > 0) {
      $(this).parent().addClass("active");
    } else {
      $(this).parent().removeClass("active");
    }
  });


  $(".contact__locations-search-input").keyup(function() {
    var search = $(this).val().toLowerCase(),
        search = simplifyText(search);

    if($(this).val().length > 0) {
      $(".contact__locations-item").addClass("searching").removeClass("active");

      $(".contact__locations-item-name, .contact__locations-cities").hide();
      $(".location__city").parent().hide();

      $(".location__city[data-city*='" + search + "']")
        .parent().show()
          .closest(".contact__locations-cities").show()
          .siblings(".contact__locations-item-name").show();

      if($(".location__city[data-city*='" + search + "']").length > 0) {
        $(".contact__locations-no-results").hide();
      } else {
        $(".contact__locations-no-results").show();
      }
    } else {
      $(".contact__locations-item").removeClass("searching");
      $(".contact__locations-item-name").show();
      $(".location__city").parent().show();
      $(".contact__locations-cities, .contact__locations-no-results").hide();
    }
  });


  $(".contact__locations-item-name").click((e) => {
    var target = $(e.currentTarget),
        location = target.parent();

    location.siblings(".active").children(".contact__locations-cities").slideUp(500, "easeInOutCubic");
    location.siblings(".active").removeClass("active");

    setTimeout(() => {
      location.toggleClass("active");
    }, 300);
    location.children(".contact__locations-cities").slideToggle(800, "easeInOutCubic");
  })
}

function contactIntroFormBackground(reverse) {
  toggleClasses($(".contact__intro-wrapper"), "hidden", reverse);
}

function contactLocations(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 500;
  }

  $('.contact__locations-wrapper').waypoint({
    handler: function(direction) {
      animateSplitWords($(".contact__locations-title .global__word-wrapper"), reverse);

      setTimeout(() => {
        animateElements($(".contact__locations-wrapper .animate-on-load"), reverse);
      }, delayTime);
      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function disruptiveFunctions(delayOnLoad, delayElements, reverse, skip) {
  setTimeout(() => {
    disruptiveTest(reverse);

    //Footer
    footer(reverse);
  }, delayOnLoad);
}

function disruptiveTest(reverse) {
  if (reverse) {
    var delayTime = 0;
  } else {
    var delayTime = 300;
  }

  $('.disruptive-test__wrapper').waypoint({
    handler: function(direction) {
      animateElements($(".disruptive-test__wrapper .animate-on-load"), reverse);

      setTimeout(() => {
        animateSplitWords($(".disruptive-test__title .global__word-wrapper"), reverse);
      }, delayTime);

      this.destroy();
    },
    offset: offsetWaypoints(reverse)
  });
}
function videoPopup(delayOnLoad) {
  var popupVideo = Cookies.get("popup-video");

  setTimeout(() => {
    if(popupVideo == null) {
      $(".global__popup-video-overlay").addClass("is-visible");
    }
  }, delayOnLoad);
}

$(".global__popup-video-overlay").click((e) => {
  $(e.currentTarget).removeClass("is-visible");

  setTimeout(() => {
    $(".global__popup-video iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }, 1000);

  Cookies.set("popup-video", "hide", {expires: 1});
});
function generalPopup(delayOnLoad) {
  var popupGeneral = Cookies.get("popup-general");

  setTimeout(() => {
    if(popupGeneral == null) {
      $(".global__popup-general-overlay").addClass("is-visible");
    }
  }, delayOnLoad);
}

$(".global__popup-general-overlay").click((e) => {
  $(e.currentTarget).removeClass("is-visible");

  setTimeout(() => {
    $(".global__popup-general iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }, 1000);

  Cookies.set("popup-general", "hide", {expires: 1});
});
function servicesPopup(delayOnLoad) {
  var popupServices = Cookies.get("popup-services");

  setTimeout(() => {
    if(popupServices == null) {
      $(".global__popup-services-overlay").addClass("is-visible");
    }
  }, delayOnLoad);
}

$(".global__popup-services-overlay").click((e) => {
  $(e.currentTarget).removeClass("is-visible");

  setTimeout(() => {
    $(".global__popup-services iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }, 1000);

  Cookies.set("popup-services", "hide", {expires: 1});
});

$(".global__popup-services-wrapper").click(function(e){
  e.stopPropagation();
});


$(window).load(function() {
  //Fix for images url
  $(".global__popup-services-wrapper form img").each(function() {
    var url = $(this).attr("src"),
        url = window.location.href + "source/img" + url;

    $(this).attr("src", url);
  });

  // Custom style
  $(".global__popup-services-overlay select").selectric({
    maxHeight: 140
  });
});


$(".global__popup-services-form-option label").click(function() {
  var $this = $(this),
      option = $(this).data("option"),
      thisOptionWrapper = $(this).closest(".global__popup-services-form-option");

  $this.find("img").toggle();

  //Toggle label images
  thisOptionWrapper.siblings().find(".global__popup-services-form-option-checked").hide();
  thisOptionWrapper.siblings().find(".global__popup-services-form-option-unchecked").show();

  //Uncheck all previous checked options
  thisOptionWrapper.parent().find("input[type='checkbox']").prop("checked", false);

  //Toggle checkbox
  thisOptionWrapper.find("span[id='" + option + "']").find("input[type='checkbox']").prop("checked", true);
});