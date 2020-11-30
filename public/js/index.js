$(() => {
  // Close Welcome Screen and Open Login Screen
  $('#loginButton').on('click', (event) => {
    $('#welcomeScreen').css('display', 'none');
    $('#loginScreen').css('display', 'inline');
  });

  // Close Welcome Screen and Open Sign Up Screen
  $('#signupButton').on('click', (event) => {
    $('#welcomeScreen').css('display', 'none');
    $('#signupScreen').css('display', 'inline');
  });
});
