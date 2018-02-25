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

    //Select Territories
    var arr = [];
    $(".terr").change(function () {
        var id = $(this).attr("id");

        if ($(this).prop("checked")) {

            if (jQuery.inArray(this.id, arr) == -1) {
                arr.push({ value: this.id });
            }
            DisplayResult();
        }
        else {
            arr.sort(SortByName);
            var index = arr.findIndex(x => x.value == id);
            arr.splice(index, 1);
            $("#r_" + id).remove();
        }
    });

    window.RemoveValue = function (data) {
        $("#" + data.id).prop('checked', false);
        arr.sort(SortByName);
        var index = arr.findIndex(x => x.value == data.id);
        arr.splice(index, 1);
        $("#r_" + data.id).remove();
    }

    function DisplayResult() {
        arr.sort(SortByName);
        var htmlData = "";
        for (var i = 0; i < arr.length; i++) {
            htmlData += "<span class='closespan' id='r_" + arr[i].value + "'><label>" + $('#' + arr[i].value).attr('value') + "</label><i class='fa fa-close' aria-hidden='true' onclick='RemoveValue(" + arr[i].value + ")'></i></span>";
        }
        $("#result").html(htmlData);
    }

    //End - Select Territories

    //Select Classes
    var arrClass = [];
    $(".cls").change(function () {
        var id = $(this).attr("id");
        if ($(this).prop("checked")) {
            if (jQuery.inArray(this.id, arr) == -1) {
                arrClass.push({ value: this.id });
            }
            DisplayClassResult();
        }
        else {
            arrClass.sort(SortByName);
            var index = arrClass.findIndex(x => x.value == id);
            arrClass.splice(index, 1);
            $("#clsr_" + id).remove();
        }
    });

    window.RemoveClassValue = function (data) {
        $("#" + data).prop('checked', false);
        arrClass.sort(SortByName);
        var index = arrClass.findIndex(x => x.value == data);
        arrClass.splice(index, 1);
        $("#clsr_" + data).remove();
    }

    function DisplayClassResult() {
        arrClass.sort(SortByName);
        var htmlclsData = "";
        for (var i = 0; i < arrClass.length; i++) {
            htmlclsData += "<div id='clsr_" + arrClass[i].value + "'><div class='closespan'><label>" + 'Class ' + arrClass[i].value + "</label><a onclick='RemoveClassValue(" + arrClass[i].value + ")'>remove [<i class='fa fa-close' aria-hidden='true'></i>]</a></div><div class='add-p'>" + $('#' + arrClass[i].value).attr('value') + "</div></div>";
        }
        $("#clsresult").html(htmlclsData);
    }
    //End - Select Classes

    function SortByName(a, b) {
        var aName = a.value.toLowerCase();
        var bName = b.value.toLowerCase();
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }
});
