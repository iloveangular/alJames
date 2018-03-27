$('.panel-collapse').on('shown.bs.collapse', function (e) {
  var $panel = $(this).closest('.panel');
  $('html, body').animate({
    scrollTop: $panel.offset().top - 60
  }, 600);
});
function openForm(evt, formName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += "active";
}
function openForm2(evt, formName) {
  if(formName=='form-4')
  {
    document.getElementById('form-4').style.display = "block";
    document.getElementById('form-5').style.display = "none";
  }
  else
  {
    document.getElementById('form-4').style.display = "none";
    document.getElementById('form-5').style.display = "block";
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Territory js
$(document).ready(function () {

  //End - Select Territories
  //End - Select Classes
});
