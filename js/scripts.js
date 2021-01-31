$(document).ready(function() {
  $("form#form-programming").submit(function(event) {
    const answer1 = $("select#question1").val();
    const answer2 = $("select#question2").val();
    const answer3 = $("select#question3").val();
    const answer4 = $("select#question4").val();
    const answer5 = $("select#question5").val();

    if (answer1 === "Burgundy" && answer2 === "Tiger" && answer3 === "London" && answer4 === "Mythic Quest" && answer5 === "Nevada") {
      $("#pythonResult").show();
    } else if (answer1 === "Gray" && answer2 === "Kangaroo" && answer3 === "Tokyo" && answer4 === "Community" && answer5 === "Colorado") {
      $("#javascriptResult").show();
    } else if (answer1 === "Peach" && answer2 === "Parrot" && answer3 === "Bucharest" && answer4 === "Madam Secretary" && answer5 === "Montana") {
      $("#rubyResult").show();
    }

    event.preventDefault();
  });
});


/*
$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    const quote = (100 - age) * 3;

    $("#rate").text(quote);
    $("#quote").show();

    event.preventDefault();
  });
});



//$("select#gender").val();
const gender = $("select#gender").val();

if this question === this and this question === this

show this 
*/