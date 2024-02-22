// Get the background color from style.css
const styleSheet = Array.from(document.styleSheets).find(sheet => sheet.href.includes('style.css'));
const backgroundColorValue = getComputedStyle(document.documentElement).getPropertyValue('--background-color');

// Store the background color in a local cookie
document.cookie = `background-color=${backgroundColorValue}; path=/`;
// Retrieve the background color from the local cookie
const cookie = document.cookie;
const backgroundColorCookie = cookie.split(';').find(cookie => cookie.trim().startsWith('background-color='));
const backgroundColor = backgroundColorCookie ? backgroundColorCookie.split('=')[1] : '';

// Set the background color on the about.html page
document.body.style.backgroundColor = backgroundColor;
