$(document).ready(function(){
  $("#answer_form").on("submit", function(event){
    event.preventDefault();
    console.log("Hello!")
    var answer = $("input[name='answer']").val().toLowerCase();
    console.log(answer);
    if (answer == 'capital' || answer== 'the capital') {
      console.log("Success!");
      window.location.replace("http://ctkochan22.github.io/landings/thors_quest_final");
    } else {
      console.log("Fail!");
      $('#answer_form')[0].reset();
      $('#error_message').html("<p style='color:red;'>Wrong Answer!</p>");
    };
  })//click
})