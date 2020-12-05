$(document).ready(() => {

  

    $(document).on("click", "#loginButton", openLoginForm);
    $(document).on("click", "#signupButton", openSignUpForm);
   
  
  function openLoginForm(){
    $('#welcomeScreen').css('display', 'none');
    $('#loginScreen').css('display', 'inline');
  };
   
  function openSignUpForm(){
    $('#welcomeScreen').css('display', 'none');
    $('#signupScreen').css('display', 'inline');
  };
  
  
  
  
  });
  