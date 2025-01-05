document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animation");
    let hasAnimated = false; // For count-up animation
  
    // Function to check if an element is in the viewport
    const elementInView = (element, offset = 10) => {
        const elementTop = element.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };
  
    // Function to add the visible class for scroll animation
    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };
  
    // Scroll Animation function
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 10)) {
                displayScrollElement(el);
            }
        });
      };
  
  
      const menuBtn = document.getElementById("menu-btn");
      const navLinks = document.getElementById("nav-links");
      const menuBtnIcon = menuBtn.querySelector("i");
      
      menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");
      
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
      });
      
      navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
      });
      
      const headerImage = document.querySelector(".header__image");
      headerImage.addEventListener(
        "animationend",
        (e) => {
          setTimeout(() => {
            headerImage.classList.add("reveal");
          });
        },
        { once: true }
      );
      
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };
      
      ScrollReveal().reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 1500,
      });
      ScrollReveal().reveal(".header__content h2", {
        ...scrollRevealOption,
        delay: 2000,
      });
      ScrollReveal().reveal(".header__content p", {
        ...scrollRevealOption,
        delay: 2500,
      });
      ScrollReveal().reveal(".header__content div", {
        ...scrollRevealOption,
        delay: 3000,
      });
      
      ScrollReveal().reveal(".header .nav__links", {
        delay: 3500,
      });
  
  
      (() =>{
  
        const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;
      
        openNavMenu.addEventListener("click", toggleNav);
        closeNavMenu.addEventListener("click", toggleNav);
        // close the navMenu by clicking outside
        menuOverlay.addEventListener("click", toggleNav);
      
        function toggleNav() {
            navMenu.classList.toggle("open");
            menuOverlay.classList.toggle("active");
            document.body.classList.toggle("hidden-scrolling");
        }
      
        navMenu.addEventListener("click", (event) =>{
            if(event.target.hasAttribute("data-toggle") && 
                window.innerWidth <= mediaSize){
                // prevent default anchor click behavior
                event.preventDefault();
                const menuItemHasChildren = event.target.parentElement;
              // if menuItemHasChildren is already expanded, collapse it
              if(menuItemHasChildren.classList.contains("active")){
                  collapseSubMenu();
              }
              else{
                // collapse existing expanded menuItemHasChildren
                if(navMenu.querySelector(".menu-item-has-children.active")){
                  collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
              }
            }
        });
        function collapseSubMenu(){
            navMenu.querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
            navMenu.querySelector(".menu-item-has-children.active")
            .classList.remove("active");
        }
        function resizeFix(){
             // if navMenu is open ,close it
             if(navMenu.classList.contains("open")){
                 toggleNav();
             }
             // if menuItemHasChildren is expanded , collapse it
             if(navMenu.querySelector(".menu-item-has-children.active")){
                  collapseSubMenu();
           }
        }
      
        window.addEventListener("resize", function(){
           if(this.innerWidth > mediaSize){
               resizeFix();
           }
        });
      
      })();
      
      
      const countUpElements = document.querySelectorAll('.count-row h1 span');

      const animateCountUp = (el) => {
          const target = parseInt(el.getAttribute('data-target'));
          const duration = 2000; // 2 seconds
          const stepTime = Math.abs(Math.floor(duration / target));
          let current = 0;
          const timer = setInterval(() => {
              current += 1;
              el.textContent = current;
              if (current === target) {
                  clearInterval(timer);
              }
          }, stepTime);
      };
    
      const handleCountUpAnimation = () => {
          countUpElements.forEach((el) => {
              if (elementInView(el, 100) && !el.classList.contains('counted')) {
                  animateCountUp(el);
                  el.classList.add('counted');
              }
          });
      };
    
      window.addEventListener('scroll', () => {
          handleCountUpAnimation();
      });
    
      // Initialize count-up animations
      handleCountUpAnimation();
  
  document.addEventListener("DOMContentLoaded", () => {
    const crsr = document.querySelector(".cursor");
    
    // Mouse move event to follow the cursor
    document.addEventListener("mousemove", function (event) {
        crsr.style.left = event.pageX - 8 + "px"; // Adjust for cursor size
        crsr.style.top = event.pageY - 8 + "px"; // Adjust for cursor size
    });
  
    // Function to change cursor size on h1 hover
    const h1Element = document.querySelector('h1');
  
    h1Element.addEventListener('mouseenter', () => {
        crsr.style.transform = 'scale(5)'; // Increase cursor size
    });
  
    h1Element.addEventListener('mouseleave', () => {
        crsr.style.transform = 'scale(1)'; // Reset cursor size
    });
  });
  
  
  
  
  
  
  
  
    // Scroll listener for animations
    window.addEventListener("scroll", () => {
        handleScrollAnimation(); // Handle scroll animation
        handleScrollCounting(); // Handle counting
    });
  
    handleScrollAnimation(); // Initial check for scroll animations
    handleScrollCounting(); // Initial check for counting
  });
  
  
  // JavaScript to toggle the answer section with smooth transition
  function toggleAnswer(element) {
    // Select the answer and divider
    var answer = element.nextElementSibling;
    var divider = answer.nextElementSibling;
  
    // Toggle the active class on the question item
    element.classList.toggle('active');
  
    // Expand or collapse the answer section smoothly
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null; // Collapse
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const navSection = document.querySelector('.nav-section');
  
            menuToggle.addEventListener('click', function() {
                navSection.classList.toggle('active');
                menuToggle.classList.toggle('open');
            });
        });
  
  
  
  function openForm() {
    window.location.href = "form.html"; // Change to your form's path if needed
  }
  function openService() {
    window.location.href = "service.html"; // Change to your form's path if needed
  }
  function openAbout(){
    window.location.href = "about-us.html"
  }
  function openFaq(){
    window.location.href = "faqs.html"
  }
  function openContact(){
    window.location.href = "contact.html"
  }
  
  function openBlog(){
    window.location.href = "blog.html"
  }
  
  function openOrder(){
    window.location.href = "order.html"
  }
  
  function openForm(){
    window.location.href = "form.html"
  }
  
  
  
  function openLogin() {
    // Redirect to loader.html first
    window.location.href = "../loader/loader.html";
  }
  
  const mainImage = document.querySelector(".main__image");
  mainImage.addEventListener(
  "animationend",
  (e) => {
    setTimeout(() => {
      mainImage.classList.add("reveal");
    });
  },
  { once: true }
  );
  
  const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  };
  
  ScrollReveal().reveal(".orf", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 1500, // Adjust delay to match the sequence
  });
  
  ScrollReveal().reveal(".main__content h1", {
  ...scrollRevealOption,
  delay: 1500,
  });
  
  ScrollReveal().reveal(".main__content h2", {
  ...scrollRevealOption,
  delay: 2000,
  });
  ScrollReveal().reveal(".main__content p", {
  ...scrollRevealOption,
  delay: 2500,
  });
  ScrollReveal().reveal(".main__content div", {
  ...scrollRevealOption,
  delay: 3000,
  });
  
  
  
  // Function to check if an element is in the viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // Function to handle scroll animations
  const handleScrollAnimations = () => {
    const scrollAnimations = document.querySelectorAll('.scroll-animation');
    scrollAnimations.forEach(animation => {
      if (isElementInViewport(animation)) {
        animation.classList.add('visible');
      }
    });
  };
  
  // Add event listeners
  window.addEventListener('load', handleScrollAnimations);
  window.addEventListener('scroll', handleScrollAnimations);
  window.addEventListener('resize', handleScrollAnimations);
  
  
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
  
  /* Menu show */
  if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
  }
  
  /* Menu hidden */
  if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
  }
  
  document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".orf");
  img.classList.add("visible"); // Add 'visible' class to trigger the fade-in
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector(".header").classList.add("loaded");
    }, 3000); // Slide down after 3 seconds
  });
  document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close')
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
      })
    }
  
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
      })
    }
  
    // Close menu when clicking on a nav__link
    const navLinks = document.querySelectorAll('.nav__link')
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
      })
    })
  })
  
  // Existing code...
  
  // FAQ Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
  
            // Toggle the clicked item
            item.classList.toggle('active');
        });
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const scrollAnimations = document.querySelectorAll('.scroll-animation');
    const counters = document.querySelectorAll('.score-container h1[data-target]');
  
    const handleScroll = () => {
      scrollAnimations.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 50) {
          el.classList.add('active');
          if (el.classList.contains('score-level')) {
            startCounting();
          }
        }
      });
    };
  
    const startCounting = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const current = +counter.innerText;
          const increment = target / 100; // Complete in 3 seconds (100 steps, 30ms interval)
  
          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target; // Ensure it ends exactly at the target
          }
        };
        updateCount();
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  });
  
  
  function addLineBreaks() {
    // Check screen width
    if (window.innerWidth <= 1280) {
      // Select the first score container's paragraph
      const score1Paragraph = document.querySelector(
        ".score-container:nth-of-type(1) .pk"
      );
      if (score1Paragraph && !score1Paragraph.dataset.modified) {
        score1Paragraph.innerHTML = score1Paragraph.innerHTML.replace(
          "have",
          "have<br>"
        );
        score1Paragraph.dataset.modified = "true"; // Prevent duplicate <br> tags
      }
  
      // Select the third score container's paragraph
      const score3Paragraph = document.querySelector(
        ".score-container:nth-of-type(3) .pk"
      );
      if (score3Paragraph && !score3Paragraph.dataset.modified) {
        score3Paragraph.innerHTML = score3Paragraph.innerHTML.replace(
          "satisfaction",
          "satisfaction<br>"
        );
        score3Paragraph.dataset.modified = "true"; // Prevent duplicate <br> tags
      }
    }
  }
  
  // Run function on load
  addLineBreaks();
  
  // Run function on window resize
  window.addEventListener("resize", addLineBreaks);

  
  const elementInView = (el, offset = 0) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= -offset &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
    );
  };
  
  let allPage2Visible = false;
  
  const handleScrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.page2 .scroll-animation');
    let allVisible = true;
    animatedElements.forEach((el) => {
      if (elementInView(el)) {
        el.classList.add('visible');
      } else {
        allVisible = false;
      }
    });
    if (allVisible && !allPage2Visible) {
      allPage2Visible = true;
      handleScrollCounting();
    }
  };
  
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000; // Animation duration in milliseconds
    const step = target / (duration / 16); // 60 FPS
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      el.textContent = Math.round(current);
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  };
  
  const handleScrollCounting = () => {
    if (!allPage2Visible) return;
    const countElements = document.querySelectorAll('.score-container h1 span[data-target]');
    countElements.forEach((el) => {
      if (!el.classList.contains('counted')) {
        animateCount(el);
        el.classList.add('counted');
      }
    });
  };
  
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Initial check
  handleScrollAnimation();


  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const servicesDropdown = document.querySelector('.services-dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        if (!n.classList.contains('dropdown-toggle')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }));

    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            servicesDropdown.classList.toggle('active');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!servicesDropdown.contains(e.target) && window.innerWidth <= 768) {
            servicesDropdown.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            servicesDropdown.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const authButtons = document.getElementById("auth-buttons");
  const profileSection = document.getElementById("profile-section");
  const profileImage = document.getElementById("profile-image");
  const profileDropdown = document.getElementById("profile-dropdown");
  const logoutBtn = document.getElementById("logout-btn");
  const logoutModal = document.getElementById("logout-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const confirmLogout = document.getElementById("confirm-logout");
  const cancelLogout = document.getElementById("cancel-logout");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navClose = document.getElementById("nav-close");

  // Check login state and update UI
  if (localStorage.getItem("isLoggedIn") === "true") {
      // Hide login and sign-up buttons
      authButtons.style.display = "none";

      // Show profile section with user's image
      const profileImageUrl = localStorage.getItem("profileImageUrl") || "default-profile.png";
      profileImage.src = profileImageUrl;
      profileSection.style.display = "block";

      // Toggle profile dropdown
      profileImage.addEventListener("click", () => {
          profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (event) => {
          if (!profileSection.contains(event.target)) {
              profileDropdown.style.display = "none";
          }
      });
  }

  // Log Out Button: Show confirmation modal
  logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logoutModal.style.display = "block";
      modalOverlay.style.display = "block";
  });

  // Confirm Logout: Clear session and redirect
  confirmLogout.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("profileImageUrl");
      window.location.href = "../Loginpage/login.html";
  });

  // Cancel Logout: Close the modal
  cancelLogout.addEventListener("click", () => {
      logoutModal.style.display = "none";
      modalOverlay.style.display = "none";
  });

  // Close the modal when clicking on the overlay
  modalOverlay.addEventListener("click", () => {
      logoutModal.style.display = "none";
      modalOverlay.style.display = "none";
  });

  // Navigation menu toggle
  if (navToggle) {
      navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
      });
  }

  if (navClose) {
      navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
      });
  }

  // Close menu when a nav link is clicked
  document.querySelectorAll(".nav__link").forEach(link => {
      link.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
      });
  });

  // Scroll animations
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const elementInView = (element, offset = 100) => {
      const elementTop = element.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  };

  const displayScrollElement = (element) => {
      element.classList.add("visible");
  };

  const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
          if (elementInView(el, 100)) {
              displayScrollElement(el);
          }
      });
  };

  // Scroll listener for animations
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Initial check
});


function orderForm(){
  window.href.location  = "../Order-form/index.html"
}