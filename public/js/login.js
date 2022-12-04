const handleLogin = async event => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      alert(response.statusText);
    } else {
      document.location.replace('/dashboard');
    }
  }
};

const handleSignup = async event => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      alert(response.statusText);
    } else {
      document.location.replace('/dashboard');
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', handleLogin);

document.querySelector('.signup-form').addEventListener('submit', handleSignup);
