document.addEventListener("DOMContentLoaded", function () {
    let steps = document.querySelectorAll(".step");
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.style.opacity = "1";
      }, index * 500);
    });
  });
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
      }, index * 400);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    let points = document.querySelectorAll(".fail-point");
    points.forEach((point, index) => {
      setTimeout(() => {
        point.style.opacity = "1";
      }, index * 400);
    });
  });
  document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
      const answer = item.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
  function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Close Popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Submit Form (For now, just close the popup)
function submitForm() {
    closePopup();
}
