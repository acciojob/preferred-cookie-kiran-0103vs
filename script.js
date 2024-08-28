//your JS code here. If required.

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

// Function to apply preferences
function applyPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Save preferences in cookies
  setCookie('fontsize', fontSize, 30); // Expires in 30 days
  setCookie('fontcolor', fontColor, 30);

  // Apply preferences immediately
  applyPreferences();
}

// Attach event listener to form
document.querySelector('form').addEventListener('submit', handleFormSubmit);

// Apply preferences on page load
applyPreferences();

