document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('surveyForm');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', function (e) {
    // Basic browser validation already handles 'required' fields
    // We'll just show a nice message
    if (!form.checkValidity()) {
      feedback.textContent = 'Please complete all required fields.';
      feedback.style.color = 'red';
      e.preventDefault(); // Prevent form submission
    } else {
      feedback.textContent = 'Thank you! Your form is ready to be submitted.';
      feedback.style.color = 'green';
    }
  });
});
