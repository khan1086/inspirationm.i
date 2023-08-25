$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
  $('.nav').toggleClass('showing');
  $('.nav ul').toggleClass('showing');
    });
  });

  $('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });









  // login


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Here you can implement your login validation logic
        if (username === "yourusername" && password === "yourpassword") {
            alert("Login successful!");
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
});
// login page end



// signup

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // You can add your form validation and submission logic here
  
  alert("Signup successful!"); // Just an example, replace with actual logic
});
