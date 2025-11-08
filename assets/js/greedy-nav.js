/*
 * GreedyNav.js
 * https://github.com/lukejacksonn/GreedyNav
 */

(function($) {
  var $nav, $btn, $vlinks, $hlinks;
  var numOfItems = 0;
  var totalSpace = 0;
  var breakWidths = [];
  var availableSpace, numOfVisibleItems, requiredSpace;

  // Add plugin to jQuery
  $.fn.greedyNav = function() {
    return this.each(function() {
      $nav = $(this);
      $btn = $("button", this);
      $vlinks = $(".visible-links", this);
      $hlinks = $(".hidden-links", this);
      numOfItems = $vlinks.children().length;

      // Add a resize event listener
      $(window).on("resize", function() {
        // Call the updateNav function
        updateNav();
      });

      // Add a click event listener to the button
      $btn.on("click", function() {
        // Toggles the show-hidden class on the hidden-links list
        $hlinks.toggleClass("hidden");
      });

      // Call the updateNav function
      updateNav();
    });
  };

  function updateNav() {
    // Get the total space available for the visible links
    availableSpace = $btn.hasClass("hidden")
      ? $nav.width()
      : $nav.width() - $btn.width() - 30;
    // Get the width of the button
    // Get the number of visible items
    numOfVisibleItems = $vlinks.children().length;
    // Get the space required for the visible items
    requiredSpace = 0;
    // Clear the breakWidths array
    breakWidths = [];

    // Loop through each of the visible links and store their widths in the breakWidths array
    $vlinks.children().each(function(i) {
      // Add the width of the current link to the total space required
      requiredSpace += $(this).outerWidth();
      // Add the width of the current link to the breakWidths array
      breakWidths.push(requiredSpace);
    });

    // If the space required is greater than the available space
    if (requiredSpace > availableSpace) {
      // While the space required is greater than the available space and there are visible links
      while (requiredSpace > availableSpace && $vlinks.children().length > 0) {
        // Move the last visible link to the hidden links list
        $($vlinks.children().get(-1)).prependTo($hlinks);
        // Recalculate the space required
        requiredSpace = 0;
        $vlinks.children().each(function() {
          requiredSpace += $(this).outerWidth();
        });
      }
      // If the button is hidden, show it
      if ($btn.hasClass("hidden")) {
        $btn.removeClass("hidden");
      }
    } else {
      // If the available space is greater than the last break width and there are hidden links
      while (
        availableSpace > breakWidths[numOfVisibleItems] &&
        $hlinks.children().length > 0
      ) {
        // Move the first hidden link to the visible links list
        $($hlinks.children().get(0)).appendTo($vlinks);
        // Recalculate the number of visible items
        numOfVisibleItems++;
      }
    }

    // If there are no hidden links, hide the button
    if ($hlinks.children().length < 1) {
      $btn.addClass("hidden");
    }
  }
})(jQuery);

// Initialize the plugin
$(document).ready(function() {
  $(".greedy-nav").greedyNav();
});