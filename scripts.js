// Smooth scroll for internal links
document.addEventListener("click", (event) => {
  const target = event.target.closest('a[href^="#"]');
  if (!target) return;

  const id = target.getAttribute("href").slice(1);
  const section = document.getElementById(id);
  if (!section) return;

  event.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
});

// Demo form handler
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted (demo). Connect this to your backend.");
  });
}
