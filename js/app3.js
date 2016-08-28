$(document).ready(function () {

    var Quiz = [
        {
            number: 1,
            question: "What does CSS stand for?",
            list: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            number: 2,
            question: "Which HTML attribute is used to define inline styles?",
            list: ["styles", "style", "font", "class"],
            correctAnswer: "Class"
        },
        {
            number: 3,
            question: "Which property is used to change the background color?",
            list: ["fgcolor", "color", "text-color"],
            correctAnswer: "color"
        },
        {
            number: 4,
            question: "Which CSS property controls the text size?",
            list: ["font-size", "font-style", "text-size", "text-style"],
            correctAnswer: "text-size"
        },
        {
            number: 5,
            question: "What does HTML stand for?",
            list: ["Hyper Text Markup Language", "Hyper Text Makeup Language", "Hypen Text Marker Language" , "Super Text Marker Language"], 
            correctAnswer: "Hyper Text Markup Language"
        }
        
    ];

    var grade = 0;
    var currentStatus = 0;




    //what happens when user clicks submit button
    /*$("#submitButton").on("click", function () {*/
    $("#enterButton").click(function (event) {
        event.preventDefault();
        console.log("Enter Button Clicked");
        trialStart();

        // how to load next question and or final score
        if (currentStatus < 5) {
            $("#question").replaceWith("<h2 id = 'question'>" + Quiz[currentStatus].question + "</h2>");
            $("#answer1").replaceWith("<li id = 'answer1'>" + "<input type='radio' name='choice' value='" + Quiz[currentStatus].list[0] + "'>" + Quiz[currentStatus].list[0] + "</li>");
            $("#answer2").replaceWith("<li id = 'answer2'>" + "<input type='radio' name='choice' value='" + Quiz[currentStatus].list[1] + "'>" + Quiz[currentStatus].list[1] + "</li>");
            $("#answer3").replaceWith("<li id = 'answer3'>" + "<input type='radio' name='choice' value='" + Quiz[currentStatus].list[2] + "'>" + Quiz[currentStatus].list[2] + "</li>");
            $("#answer4").replaceWith("<li id = 'answer4'>" + "<input type='radio' name='choice' value='" + Quiz[currentStatus].list[3] + "'>" + Quiz[currentStatus].list[3] + "</li>");
        } else {
            $("#list").find("ul").hide();
            $('#finalScore').replaceWith("<span id='finalScore'>" + grade + "</span>").fadeIn(1000);
            $("#list").find("h3").fadeIn(1000);
            $("#question").replaceWith("<h2 id = 'question'>" + "Congratulation! Your grade is..." + "</h2>").fadeIn(1000);
            $('#count').replaceWith("<span id='count'>" + "1" + "</span>");
        }

    });


    //what happens when user clicks new game button
    $("#newQuiz").on("click", function () {
        console.log("New Quiz Button Clicked");
        currentStatus = 0;
        grade = 0;
        counter = 1;
        $('#count').replaceWith("<span id='count'>" + counter + "</span>");
        $("#question").replaceWith("<h2 id = 'question'>" + Quiz[0].question + "</h2>");
        $("#list").find("h3").hide();
        $("#answer1").replaceWith("<li id = 'answer1'>" + "<input type='radio' name='choice' value=" + Quiz[0].list[0] + ">" + Quiz[0].list[0] + "</li>");
        $("#answer2").replaceWith("<li id = 'answer2'>" + "<input type='radio' name='choice' value=" + Quiz[0].list[1] + ">" + Quiz[0].list[1] + "</li>");
        $("#answer3").replaceWith("<li id = 'answer3'>" + "<input type='radio' name='choice' value=" + Quiz[0].list[2] + ">" + Quiz[0].list[2] + "</li>");
        $("#answer4").replaceWith("<li id = 'answer4'>" + "<input type='radio' name='choice' value=" + Quiz[0].list[3] + ">" + Quiz[0].list[3] + "</li>");
        $("#list").find("ul").fadeIn(1000);
    });
    //to add to the counter at the bottom right
    var counter = 1;
    var accounting = function () {
        counter += 1;
        $('#count').replaceWith("<span id='count'>" + counter + "</span>");
    };

    //how to play the game
    var trialStart = function () {

        //    making sure the user has made a choice

        if (currentStatus < 10 && ($('input[name=choice]:checked').length > 0)) {
            accounting();


            //    getting the value of the user choice

            var quizTakerChoice = $('input[name=choice]:checked').val();
            console.log(quizTakerChoice);

            //  to add one point to user score if answer is correct
            var userScoring = function () {
                if (quizTakerChoice === Quiz[currentStatus].correctAnswer) {
                    grade += 1;
                    console.log(grade);
                }
                currentStatus += 1;
                console.log(currentStatus);
            };

            userScoring();
        } else {
            alert("Please choose an option!");
        }

    };

});
