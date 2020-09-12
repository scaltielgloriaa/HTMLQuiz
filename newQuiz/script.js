// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("What is HTML?", ["Programming Language", "Markup Language", "Hypertext Library", "Scripting Language"], "Markup Language"),
    new Question("Of which main parts does the HTML file consist of?", ["header and body", "footer and header","head and body", "head and main"], "head and body"),
    new Question("Which tag contains the visual part of the web page?", ["header", "body", "footer", "head"], "body"),
    new Question("What is the correct HTML element for inserting a line break?", ["hr", "break", "lb", "br"], "br"),
    new Question("Choose the correct HTML element to define important text", ["b", "em", "i", "strong"], "strong"),
    new Question("Which of these elements are all simple <table> elements?", ["table,tr,tt", "table,th,td", "table,tr,td", "thead,th,td"], "table,tr,td"),
    new Question("How can you open a link in a new tab/browser window?", ["[a src='http://www.google.com' target='_blank'] [/a]", "[a url='http://www.google.com' target='new'] [/a]", "[a href='http://www.google.com' target='_blank'] [/a]", "[a href='http://www.google.com' target='new'] [/a]"], "[a href='http://www.google.com' target='_blank'] [/a]"),
    new Question("Which character is used to indicate an end tag?", ["*", "/", "<", ">"], "/"),
    new Question("What is the correct HTML for creating a hyperlink?", ["[a src='http://www.google.com'] [/a]", "[a href='http://www.google.com'] [/a]", "[a url='http://www.google.com'] [/a]", "[a http://www.google.com] [/a]"], "[a href='http://www.google.com'] [/a]"),
    new Question("Choose the correct HTML element to define emphasized text", ["italic", "strong", "em", "i"], "em"),
    new Question("Inline elements are normally displayed without starting a new line.", ["true,but takes all space", "false,but takes all space", "true,but not takes all space", "false,but not takes all space"], "true,but not takes all space"),
    new Question("How can you make a numbered list?", ["li", "ol", "ul", "al"], "ol"),
    new Question("How can you make a bulleted list?", ["ol", "al", "li", "ul"], "ul"),
    new Question("Which tag that is used to make a border around form content", ["legend", "fieldset", "border", "rowspan"], "legend"),
    new Question("Block elements are normally displayed without starting a new line.", ["true,but takes all space", "false,but takes all space", "true,but not takes all space", "false,but not takes all space"], "false,but takes all space"),
    new Question("What is the correct HTML for making a checkbox?", ["[input type=radio]", "[checkbox]", "[input type=checkbox]", "[radiobutton]"], "[input type=checkbox]"),
    new Question("What is the correct HTML for making a text input field?", ["[label type=text]", "[label type=textarea]", "[textarea]", "[input type=text]"], "[input type=text]"),
    new Question("What is the correct HTML for making a drop-down list?", ["[fieldset]", "[select]", "[input]", "[label]"], "[select]"),
    new Question("What is the correct HTML for making a text area?", ["[input type=textarea]", "[textarea]", "[label for=textarea]", "[text]"], "[textarea]"),
    new Question("What is the largest headings", ["h6", "h2", "h1", "h7"], "h1"),
    new Question("What is tag p do?", ["make a long text", "make a paragraph", "make a argument", "make a normal text"], "make a paragraph"),
    new Question("Which tag is used to make a horizontal line ?", ["br", "hl", "hr", "bl"], "hr"),
    new Question("How to input an image?", ["[image src='img/wbb.jpg']", "[image href='img/wbb.jpg']", "[img src='img/wbb.jpg']", "[img href='img/wbb.jpg']"], "[img src='img/wbb.jpg']"),
    new Question("Which attribute is used to play and pause video?", ["id", "cntrl", "class", "controls"], "controls"),
    new Question("Which attribute is used to display a web page within a web page?", ["embed", "img", "iframe", "audio"], "iframe"),
    new Question("Which attribute is used to make a space between text and border in table?", ["cellspacing", "cellpadding", "border", "rowspan"], "cellpadding"),
    new Question("Which attribute is used to make a space between border and border in table?", ["cellspacing", "cellpadding", "border", "rowspan"], "cellspacing"),
    new Question("Which attribute should have same value to make a form(only one label and input)?", ["id & class", "for & class", "type & id", "for & id"], "for & id"),
    new Question("Which attribute u should use for multiple lable and input for one group", ["id", "name", "class", "type"], "name"),
    new Question("Which value is not types of button ?", ["reset", "button y", "button x", "submit"], "button y"),
    new Question("What tag u should use to make title in your fieldset?", ["title", "fieldset", "h1", "legend"], "legend"),
    new Question("Which value is not types of input", ["text", "radio", "select", "checkbox"], "select"),
    new Question("In HTML5 which tag that used to write the main text?", ["section", "article", "aside", "figure"], "article"),
    new Question("In HTML5, what tag that replace div?", ["head,body,foot", "header,body,footer", "header,main,footer", "head,main,foot"], "header,main,footer"),
    new Question("Which tag is used to save many link?", ["navigation", "navbar", "li", "nav"], "nav"),
    new Question("When we use class what should we use in the href?", ["&", ".", "%", "#"], "."),
    new Question("In HTML5 which tag that used to write the optional text?", ["section", "article", "aside", "figure"], "aside"),
    new Question("What is HTML comments ?", ["//", "/**/", "[!-- --]", "()"], "[!-- --]"),
    new Question("When we use id what should we use in the href?", ["&", ".", "%", "#"], "#")
    /*new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("What is HTML?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),*/

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();