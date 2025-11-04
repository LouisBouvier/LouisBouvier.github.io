// Dark Mode Toggle Functionality
(function() {
  'use strict';

  // Get the current theme from localStorage or default to light
  function getCurrentTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  // Set the theme on the document
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
  }

  // Update the toggle button icon
  function updateToggleButton(theme) {
    var button = document.getElementById('dark-mode-toggle');
    if (button) {
      button.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Toggle between light and dark themes
  function toggleTheme() {
    var currentTheme = getCurrentTheme();
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    var theme = getCurrentTheme();
    setTheme(theme);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Add click event listener to toggle button
  window.addEventListener('load', function() {
    var button = document.getElementById('dark-mode-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
    }
  });
})();
