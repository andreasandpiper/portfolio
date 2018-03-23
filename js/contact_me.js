$(function () {

  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // something to have when submit produces an error ?
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      $('.submit-message').html("<i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>")
      var name = $("input#name").val().trim();
      var email = $("input#email").val().trim();
      var message = $("textarea#message").val().trim();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message


      $.ajax({
        url: "php_mailer/mail_handler.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          message: message
        },
        cache: false,
        success: function (resp) {
          resp = JSON.parse(resp)
          if (resp.success) {
            // Success message
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#success > .alert-success')
              .append("<strong>Your message has been sent. </strong>");
            $('#success > .alert-success')
              .append('</div>');

            //clear all fields
            $('#contactForm').trigger("reset");

          }
          $('.submit-message').text("Submit Message")

        },
        error: function (err) {
          console.log(err)

          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry " + firstName + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:andrea.wayte@gmail.com?Subject=Message_Me from portfolio site'>andrea.wayte@gmail.com</a> ? Sorry for the inconvenience!");
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");

          $('.submit-message').text("Submit Message")

        },
      })
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});