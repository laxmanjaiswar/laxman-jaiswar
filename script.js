// script.js

const form = document.querySelector(".contact-form");

form.addEventListener("submit", () => {
  // Button text change (UX feedback)
  const btn = form.querySelector("button");
  btn.innerText = "Sending...";
  btn.disabled = true;

  // Optional: thoda professional delay feel
  setTimeout(() => {
    btn.innerText = "Message Sent ✔";
  }, 1500);
});
