// Signup logic
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const phone = document.getElementById('phone').value.trim();
  localStorage.setItem('user_' + phone, JSON.stringify({ username, phone }));
  alert('Signup successful!');
  this.reset();
});

// Login logic
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const phone = document.getElementById('phoneLogin').value.trim();
  const user = localStorage.getItem('user_' + phone);
  if (user) {
    alert('Login successful! Welcome back.');
  } else {
    alert('User not found.');
  }
});
