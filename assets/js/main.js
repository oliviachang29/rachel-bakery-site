$(".lazy").unveil(100, function() {
  $(this).on('load', function() {
    this.style.opacity = 1;
  });
});