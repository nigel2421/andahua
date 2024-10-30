document.addEventListener("DOMContentLoaded", function () {
  // Initialize the first typed instance
  new Typed("#typed-1", {
    stringsElement: "#typed-strings-1",  // Element containing the first set of strings
    typeSpeed: 150,                      // Speed of typing
    backSpeed: 100,                      // Speed of backspacing
    loop: true                          // Loop the typing animation
  });

  // Initialize the second typed instance
  new Typed("#typed-2", {
    stringsElement: "#typed-strings-2",  // Element containing the second set of strings
    typeSpeed: 5,                      // Speed of typing
    backSpeed: 3,                      // Speed of backspacing
    loop: true                          // Loop the typing animation
  });
});
