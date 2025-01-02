// Smooth scrolling for CTA button
document.getElementById('learn-more').addEventListener('click', function(event) {
  document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
  });
});