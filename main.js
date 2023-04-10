// Get references to the HTML elements we want to style
const body = document.querySelector('body');
const section = document.querySelector('section');
const h1 = document.querySelector('h1');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const submit = document.querySelector('input[type="submit"]');

// Apply styles to the elements
body.style.backgroundColor = '#f1f1f1';
body.style.fontFamily = 'Arial, sans-serif';

section.style.backgroundColor = '#fff';
section.style.border = '1px solid #ddd';
section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
section.style.margin = '50px auto';
section.style.maxWidth = '500px';
section.style.padding = '20px';

h1.style.fontSize = '24px';
h1.style.marginBottom = '20px';

labels.forEach(label => {
  label.style.display = 'block';
  label.style.fontSize = '16px';
  label.style.fontWeight = 'bold';
  label.style.marginBottom = '10px';
});

inputs.forEach(input => {
  input.style.border = '1px solid #ccc';
  input.style.borderRadius = '3px';
  input.style.fontSize = '16px';
  input.style.padding = '10px';
  input.style.width = '100%';
});

submit.style.backgroundColor = '#4CAF50';
submit.style.border = 'none';
submit.style.borderRadius = '3px';
submit.style.color = '#fff';
submit.style.cursor = 'pointer';
submit.style.fontSize = '16px';
submit.style.marginTop = '20px';
submit.style.padding = '10px';
submit.style.width = '100%';

submit.addEventListener('mouseover', () => {
  submit.style.backgroundColor = '#3e8e41';
});

submit.addEventListener('mouseout', () => {
  submit.style.backgroundColor = '#4CAF50';
});
w = '0 0 10px rgba(0, 0, 0, 0.1)';
section.style.margin = '50px auto';
section.style.maxWidth = '500px';
section.style.padding = '20px';

h1.style.fontSize = '24px';
h1.style.marginBottom = '20px';

labels.forEach(label => {
  label.style.display = 'block';
  label.style.fontSize = '16px';
  label.style.fontWeight = 'bold';
  label.style.marginBottom = '10px';
});

inputs.forEach(input => {
  input.style.border = '1px solid #ccc';
  input.style.borderRadius = '3px';
  input.style.fontSize = '16px';
  input.style.padding = '10px';
  input.style.width = '100%';
});

submit.style.backgroundColor = '#4CAF50';
submit.style.border = 'none';
submit.style.borderRadius = '3px';
submit.style.color = '#fff';
submit.style.cursor = 'pointer';
submit.style.fontSize = '16px';
submit.style.marginTop = '20px';
submit.style.padding = '10px';
submit.style.width = '100%';

submit.addEventListener('mouseover', () => {
  submit.style.backgroundColor = '#3e8e41';
});

submit.addEventListener('mouseout', () => {
  submit.style.backgroundColor = '#4CAF50';
});
