// Simple form submission simulation
const form = document.getElementById('inquiryForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e){
  e.preventDefault(); // Prevent page reload

  const name = form.name.value;
  const email = form.email.value;
  const course = form.course.value;
  const message = form.message.value;

  // You can later integrate this with email or database
  successMessage.textContent = `Thank you ${name}! Your inquiry for ${course} has been received. We will contact you at ${email}.`;

  form.reset();
});
