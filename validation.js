function errormessage1(classes, message,j) {
  var SetErrorBorder = document.getElementsByClassName(classes);
  errors_image = document.getElementsByClassName("error-image");
  // for (let i=0 ;i<SetErrorBorder.length;i++)
  SetErrorBorder[0].classList.add("error-input");
  SetErrorBorder[1].innerHTML = message;
  errors_image[j].style.display="block";
  
}

function clearerror() {
   errors = document.getElementsByClassName("clearerror");
   errors_image = document.getElementsByClassName("error-image");
  for (var i = 0,j=0; i < errors.length;j++ ) {
    errors[i].classList.remove("error-input");
    errors[i + 1].innerHTML = "";
    errors_image[j].style.display="none";
    i = i + 2;
  }
}
function validation() {
  var ISsubmission = true;
  clearerror();
  var name = document.forms["myform"]["fname"].value;
  var lname = document.forms["myform"]["lname"].value;
  var email = document.forms["myform"]["email"].value;
  var password = document.forms["myform"]["password"].value;
  if (name == "") {
    errormessage1("fname", "First Name cannot be empty",0);
    ISsubmission = false;
  }
  if (lname == "") {
    errormessage1("lname", "Last Name cannot be empty",1);
    ISsubmission = false;
  }
  if (email == "") {
    errormessage1("email", "Looks like this is not an email",2);
    ISsubmission = false;
  }
  if (password == "") {
    errormessage1("password", "Password cannot be empty",3);
    ISsubmission = false;
  }

  return ISsubmission;
}
