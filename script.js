// Get the form element
const contactForm = document.getElementById("contactForm");

// Create a place for messages
const messageBox = document.createElement("p");
messageBox.id = "formMessage";
contactForm.appendChild(messageBox);

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  const nameInput = contactForm.querySelector('input[type="text"]');
  const emailInput = contactForm.querySelector('input[type="email"]');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // تحقق بسيط من المدخلات
  if (name === "" || email === "") {
    messageBox.textContent = "Please fill in all fields.";
    messageBox.style.color = "red";
    return;
  }

  // تحقق بسيط من صيغة البريد
  if (!email.includes("@") || !email.includes(".")) {
    messageBox.textContent = "Please enter a valid email address.";
    messageBox.style.color = "red";
    return;
  }

  // إذا كل شيء صحيح
  messageBox.textContent = "Thank you! Your message has been sent.";
  messageBox.style.color = "green";

  // تنظيف الحقول
  nameInput.value = "";
  emailInput.value = "";
});
