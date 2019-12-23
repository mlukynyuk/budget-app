//Function constructor

/*var john = {
    name = 'John',
    yearOfBirth = 1990,
    job = "teacher"
};
*/

/*var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

var john = new Person ("John", 1990, "teacher");
var jane = new Person ("Jane", 1968, "designer");
var mark = new Person ("Mark", 1971, "policeman");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/

//Object.create
/*

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
   name: { value: 'Jane' },
   yearOfBirth: { value: 1969},
   job: { value: 'teacher'}
});


//First-class functions

var years = [1990, 1967, 2005, 1998, 1991];

function arrCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};
                    
function calculateAge(el) {
   return 2019 - el;
};

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 *el));
    } else {
        return -1;
    }
}
var ages = arrCalc(years, calculateAge);
var fullAges = arrCalc(ages, isFullAge);
var rates = arrCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);


//Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log (name + ' , could you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What do you teach, ' + name + '?');
        } 
    } else {
        return function(name) {
            console.log('What do you do, ' + name + '?');
        } 
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Mark');

interviewQuestion('policeman')('Jane');


//Immediately invoked functions (IIFE)

(function () {
    var score = Math.random () * 10;
    console.log(score >=5);
}) ();


//Closures
function retirement (retirementAge) {
    a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log (name + ' , could you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What do you teach, ' + name + '?');
        } else {
            console.log('What do you do, ' + name + '?');
        }
    }
}

interviewQuestion('teacher') ('Jane');
interviewQuestion('designer') ('Mark');



//Call, apply, bind

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentelmen. I\'m ' + this.name + ', I work as a ' + this.job + ' and I\'m ' + this.age + ' years old.' );
        } else if (style === 'informal') {
            console.log ('Hey everyone. I\'m ' + this.name + ', I work as a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a good ' + timeOfDay + ' .');
        }
    }
};

john.presentation('formal', 'morning');

var jane = {
    name: 'Jane',
    age: 35,
    job: 'designer'
}

john.presentation.call(jane, 'informal', 'night');

//john.presentation.apply(jane, ['informal', 'night']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
*/


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
 var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};


var question1 = new Question ('Do you like JS?', ['0. Yes', '1. No'], 0);
var question2 = new Question ('What is the name of the teacher?', ['0. John', '1. Jonas', '2. Johan'], 1);
var question3 = new Question ('Is learning JS fun?', ['0. Yes', '1. No'], 0);

var questions = [question1, question2, question3];

Question.prototype.checkAnswer = function(answer) {
    if (answer === this.correctAnswer) {
        console.log('You are right!');
    } else {
        console.log('You are wrong. Try again');
    }
}


Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(this.answers[i]);
    }
}
var random = Math.floor(Math.random() * questions.length);
var question = questions[random];
question.displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));

question.checkAnswer(answer);
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function (){
 var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};


var question1 = new Question ('Do you like JS?', ['0. Yes', '1. No'], 0);
var question2 = new Question ('What is the name of the teacher?', ['0. John', '1. Jonas', '2. Johan'], 1);
var question3 = new Question ('Is learning JS fun?', ['0. Yes', '1. No'], 0);

var questions = [question1, question2, question3];

Question.prototype.checkAnswer = function(answer, callback) {
    var sc;
    if (answer === this.correctAnswer) {
        console.log('You are right!');
        sc = callback(true);
    } else {
        console.log('You are wrong. Try again');
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------------');
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(this.answers[i]);
    }
}


function score() {
    var sc = 0;
    return function(correct) {
       if(correct) {
          sc++;
       } 
        return sc;
    }
}

var currentScore = score();


function nextQuestion() {
    var random = Math.floor(Math.random() * questions.length);
    questions[random].displayQuestion();
    var answer = prompt('Please select the correct answer.');
    if (answer !== 'exit') {
        questions[random].checkAnswer(parseInt(answer), currentScore);
        nextQuestion();
    }
}
    
nextQuestion();
}) ();

















                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    


















