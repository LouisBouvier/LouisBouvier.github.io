// Dark Mode Toggle Functionality (based on academicpages)
(function($) {
  'use strict';

  // Detect OS/browser preference
  const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Set the theme on page load or when explicitly called
  var setTheme = function(theme) {
    const use_theme = theme || localStorage.getItem("theme") || $("html").attr("data-theme") || browserPref;

    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-icon").text("●");  // filled circle for dark mode
    } else {
      $("html").removeAttr("data-theme");
      $("#theme-icon").text("○");  // empty circle for light mode
    }
  };

  // Toggle the theme manually
  var toggleTheme = function() {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  };

  // Initialize on document ready
  $(document).ready(function() {
    // If the user hasn't chosen a theme, follow the OS preference
    setTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function(e) {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });

    // Enable the theme toggle
    $('#theme-toggle').on('click', toggleTheme);
  });

})(jQuery);
