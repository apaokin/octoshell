// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var z="<div class='checkbox'><label for='version_bs_1_active'><input name='version[bs][1][active]' value='0' type='hidden'><input value='1' checked='checked' name='version[bs][1][active]' id='version_bs_1_active' type='checkbox'> Active</label></div>";

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
Date.format = 'mm/dd/yyyy';
function get_vers_for_project() {
    // sanity check
    var project_val;
    var pack_val;
    
  $( "#projectver_package option:selected" ).each(function() {
      
        pack_val =$( this ).attr("value");
      
    });
  $( "#projects_ajax_form select.select2-ajax option:selected" ).each(function() {
      
        project_val=$( this ).attr("value");
      
    });
    $.ajax({
        url : "/pack/admin/get_project_vers/", // the endpoint
        dataType : "json", 
        type: "GET",
        data: {
          pack: pack_val,
          project_id: project_val,
        },
         // http method
         // data sent with the post request

        // handle a successful response
        success : function(json) {
          console.log("success");
             // remove the value from the input
        if (json.length>0)
          {

           

            $('#projects_vers_fields').html(needed_vers(json,"projvers"));

            $( "input.datepicker" ).datepicker(


              
     //this option for allowing user to select from year range
    );
          }
        else
        {
          $('#projects_vers_fields').html("Нет ни одной версии");
        }
        
        
          },
        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            console.log(errmsg);
            console.log(err);
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
};







function get_vers() {
    // sanity check
    var email_val;
    var pack_val;
    
  $( "#userver_package option:selected" ).each(function() {
      
        pack_val =$( this ).attr("value");
      
    });
  $( "#ajax_form select.select2-ajax option:selected" ).each(function() {
      
        email_val=$( this ).attr("value");
      
    });
    $.ajax({
        url : "/pack/admin/vers_json/", // the endpoint
        dataType : "json", 
        type: "GET",
        data: {
          pack: pack_val,
          user_id: email_val,
        },
         // http method
         // data sent with the post request

        // handle a successful response
        success : function(json) {
          console.log("success");
             // remove the value from the input
        if (json.length>0)
          {

          
           $('#vers_fields').html( needed_vers(json,"vers"));
           $( "input.datepicker" ).datepicker();
      // range
      // 
    
          }
        else
        {
          $('#vers_fields').html("Нет ни одной версии");
        }
        
        
          },
        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            console.log(errmsg);
            console.log(err);
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
};

function needed_vers(json,for_)
{
     
   var out="";
   var form="<div class='checkbox'><label for='{{id}}'><input name='{{vers}}[{{id}}][allow]' value='0' type='hidden'><input value='1' {{checked}} name='{{vers}}[{{id}}][allow]' id='{{id}}' type='checkbox'> {{name}}</label></div>";

         var template= Handlebars.compile(form);


       var date= "<div class='form-group'><label class='control-label' for='{{vers}}[{{id}}][date]'>Дата загрузки</label><input placeholder='mm-dd-yyyy' class='form-control form-control datepicker' value='{{date}}' name='{{vers}}[{{id}}][date]' id='date_{{id}}' type='text'></div>";
       var date_template= Handlebars.compile(date);
          for (i in json)
        {
          var obj=json[i];
          var str="";

          if (obj.allow)
          {
            str='checked';

          }
          else
          {
            str="";
          }
         
          var context =
           {name: obj.name,
            checked: str,
            id: obj.id,
            vers: for_,
            date: obj.date,
          };
          
          var res=template(context);
          var res_date=date_template(context);
         
          out+=res;
          out+=res_date;
          
          
          
        }
        return out;
       
       

};


get_vers();
get_vers_for_project();

$( "#ajax_form #userver_package").change(
    
  get_vers
);
  
  $( "#ajax_form select.select2-ajax").change(
    
  get_vers
);

$( "#projectver_package").change(
    
  get_vers_for_project
);
  
  $( "#projects_ajax_form select.select2-ajax").change(
    
  get_vers_for_project
);


$('#vers_sub').on('click', function(event){

    
     // sanity check
    
});

$("#post-form").bind('ajax:complete', function() {

         console.log("form submitted!");
    get_vers 


   });


  
  /* This is the function that will get executed after the DOM is fully loaded */
  
 function call()
 {
  alert("YYY");
 }   
 
console.log("END!!!!");