
//Setting form functionality 
 const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent page reload

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name && email && message) {
        // Here you can send data to a server if needed
        formMessage.textContent = "Message sent successfully!";
        form.reset();
      } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
      }
    });

    