// // Smooth scrolling for CTA button
const learnMoreButton = document.getElementById('learn-more');
if (learnMoreButton) {
  learnMoreButton.addEventListener('click', function(event) {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}

// Counter
document.addEventListener("DOMContentLoaded", function() {
  const counterElement = document.getElementById('counter');
  let currentNumber = 0;
  const targetNumber = 45;
  const speed = 30; // Speed of increment (milliseconds)

  // Function to update the counter
  function updateCounter() {
    if (currentNumber < targetNumber) {
      currentNumber++;
      counterElement.textContent = currentNumber;
      setTimeout(updateCounter, speed);
    } else {
      counterElement.textContent = targetNumber + "+";
    }
  }

  // Use IntersectionObserver to trigger counter when in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start the counter when the element is in view
        updateCounter();
        // Stop observing once the counter starts
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .8 }); // Trigger when 80% of the counter is in view

  // Observe the counter element
  observer.observe(counterElement);
});
