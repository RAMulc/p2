

$(() => {
  // Close Welcome Screen and Open Login Screen
  $('#loginButton').on('click', (event) => {
    $('#welcomeScreen').css('display', 'none');
    $('#loginScreen').css('display', 'inline');
  });
  $('#mainLogIn').on('click', (event) => {
    $.ajax({
      type: "POST",
      url: "/login",
      data: data,
      success: success,
      dataType: dataType
    });
    console.log(event);
  })
  // Close Welcome Screen and Open Sign Up Screen
  $('#signupButton').on('click', (event) => {
    $('#welcomeScreen').css('display', 'none');
    $('#signupScreen').css('display', 'inline');
  });
});
