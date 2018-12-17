var checkForm = function(a)
{
  var form = (a.target) ? a.target : a.srcElement;
  if(form.name.value == "") {
    alert("Please enter your Name");
    form.name.focus();
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
    return;
  }
  if(form.email.value == "") {
    alert("Please enter a valid Email address");
    form.email.focus();
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
    return;
  }
  if(form.message.value == "") {
  alert("Please enter your comment or question in the Message box");
  form.message.focus();
  e.preventDefault ? e.preventDefault() : e.returnValue = false;
  return;
}

};
