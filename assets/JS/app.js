// const formAll = document.getElementById('form, form1');
const Inputs = document.querySelectorAll('#form input, #form1 input');

const usernameRegex = {
	usuario: /^[a-zA-Z0-9]{2,12}$/, // Letras, numeros, guion y guion_bajo
/*	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos. */
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{4,20}$/, // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
}



/* usernameRegex  */
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "input_user":
            if(usernameRegex.usuario.test(e.target.value)){
                document.getElementById('group_user').classList.remove('form1_group-nok');
                document.getElementById('group_user').classList.add('form1_group-ok');
                document.querySelector('#group_user i').classList.add('fa-check-circle');
                document.querySelector('#group_user i').classList.remove('fa-times-circle');
                document.querySelector('#group_user .form1_input-error').classList.remove('form1_input-error-active');
            } else {
                document.getElementById('group_user').classList.add('form1_group-nok');
                document.getElementById('group_user').classList.remove('form1_group-ok');
                document.querySelector('#group_user i').classList.add('fa-times-circle');
                document.querySelector('#group_user i').classList.remove('fa-check-circle');
                document.querySelector('#group_user .form1_input-error').classList.add('form1_input-error-active');
            }            
		break;
		case "uname":
            if(usernameRegex.usuario.test(e.target.value)){
                document.getElementById('group2_user').classList.remove('form_group-nok');
                document.getElementById('group2_user').classList.add('form_group-ok');
                document.querySelector('.group2_user i').classList.add('fa-check-circle');
                document.querySelector('.group2_user i').classList.remove('fa-times-circle');
                document.querySelector('.group2_user .form_group-input').classList.remove('form_input-error-active');
            } else {
                document.getElementById('group2_user').classList.add('form_group-nok');
                document.getElementById('group2_user').classList.remove('form_group-ok');
                document.querySelector('.group2_user i').classList.add('fa-times-circle');
                document.querySelector('.group2_user i').classList.remove('fa-check-circle');
                document.querySelector('.group2_user .form_group-input').classList.add('form_input-error-active');
            }
            break;
		case "email":
            if(usernameRegex.usuario.test(e.target.value)){
                document.getElementById('group_email').classList.remove('form_group-nok');
                document.getElementById('group_email').classList.add('form_group-ok');
                document.querySelector('.group_email i').classList.add('fa-check-circle');
                document.querySelector('.group_email i').classList.remove('fa-times-circle');
                document.querySelector('.group_email .form_input-error').classList.remove('form_input-error-active');
            } else {
                document.getElementById('group_email').classList.add('form_group-nok');
                document.getElementById('group_email').classList.remove('form_group-ok');
                document.querySelector('#group_email i').classList.add('fa-check-circle');
                document.querySelector('#group_email i').classList.remove('fa-times-circle');
                document.querySelector('#group_email .form_input-error').classList.add('form_input-error-active');
            }
            break;
		case "phone":
            if(usernameRegex.usuario.test(e.target.value)){
                document.getElementById('group_email').classList.remove('form_group-nok');
                document.getElementById('group_email').classList.add('form_group-ok');
                document.querySelector('.group_email i').classList.add('fa-check-circle');
                document.querySelector('.group_email i').classList.remove('fa-times-circle');
                document.querySelector('.group_email .form_input-error').classList.remove('form_input-error-active');
            } else {
                document.getElementById('group_email').classList.add('form_group-nok');
                document.getElementById('group_email').classList.remove('form_group-ok');
                document.querySelector('#group_email i').classList.add('fa-check-circle');
                document.querySelector('#group_email i').classList.remove('fa-times-circle');
                document.querySelector('#group_email .form_input-error').classList.add('form_input-error-active');
            }
            break;
	}
}

Inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
});



// testing 5 usernameRegex.usuario.test("batman") result using BROWSER = true versus usernameRegex.usuario.test("!!!!") = false

// testing ruting 4 - 
/*
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "input_user":     /* id of the form 1 */
/*			console.log('Funciona!');    
        break;
        case "uname":           /* id of the form  */
/*			console.log('Funciona2!');
		break;
    }
}

Inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
});
*/

// End of testing ruting 4

// testing ruting 3 - It identidies each id when a key is hitting
/*
const validarFormulario = (e) => {
	console.log(e.target.name);
}

Inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
});
*/
// End of testing ruting 3

// testing ruting 1 - It identidies when a key is hiting
/*
Inputs.forEach((input) => {
	input.addEventListener('keyup', () => {
	console.log('testing: key up');
});
}); */
// End of testing ruting 1


// testing ruting 2 - checking function validarFormunlario when it is working
/*
const validarFormulario = () => {
	console.log('testing: It is done');
}
Inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
*/
// End of testing ruting 2






/*

Inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		form.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
*/
// usernameRegex



const questionNumber = document.querySelector(".question_number");
const questionText = document.querySelector(".question_text");
const optionContainer = document.querySelector(".option_container");
const answerIndecatorContainer = document.querySelector(".answer_indicator");
const homeBox = document.querySelector(".home_box");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const registerBox = document.querySelector(".register_box");
const timeBox = document.querySelector("time_box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


//push the question into availableQuestions array
function setAvailableQuestions(){
	const totalQuestion = quiz.length;
	for (let i=0; i<totalQuestion; i++){
		availableQuestions.push(quiz[i])
	}
}



// form section new - use - new - displaying user nickname - adding line 239 return true

function WelcomeNickName() {
  var variable = document.getElementById('input_user').value;
  document.getElementById('alert').innerHTML = 'Welcome Mr/Mrs: ' + variable;
  document.getElementById('alert1').innerHTML = 'Welcome Mr/Mrs: ' + variable;
  document.getElementById('alert2').innerHTML = 'Mr/Mrs: ' + variable;
  document.getElementById('alert3').innerHTML = 'Mr/Mrs: ' + variable;
 if(variable == '') {
        alert("You must enter a username")
    } else {
        return true;
    }
    
}

function validateForm()
{
  	
e.preventDefault();      

    var a=document.forms["form1"]["input_user"].value;
  try {
    if ((a === '') || (a === null)) {
      throw new Error('Nickename must be filled out');
    }
      return true;
  } 
    
  catch (formError) {
    alert(formError.message);
    return false;
  }
}



/* function gotoGame(){
    var myuser = document.getElementById("txtUsername").value
    if(myuser == '') {
        alert("You must enter a username")
    }
 /* else {
        window.location.href = "quiz.html example"
    }   */
// } 

// end of form new -user 


// Valiation of forms


// Validation of form







// set question number and question options
function getNewQuestions(){
	//set question number
	questionNumber.innerHTML = "Question " + (questionCounter +1) + " of " + quiz.length;
	// set question text
	//get random questions
	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.q;
	//get the position of 'questionIndex' from the availableQuestions array
	const index1 = availableQuestions.indexOf(questionIndex);
	// remove the questionIndex from the availableQuestions array, so that the question does not repeat
	availableQuestions.splice(index1,1);
	//console.log(questionIndex)
	//console.log(availableQuestions)


    //set options
    //get the length of options
   const optionLen =  currentQuestion.options.length
   //push options into availableOptions array
   for (let i=0; i<optionLen; i++){
   		availableOptions.push(i)
   }
 	optionContainer.innerHTML = '';
   let animationDelay = 0.15;
   //create options in html
   for(let i=0; i<optionLen; i++){
   		//random options
   		const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
   		//get the position of optionIndex from the availableOptions
   		const index2 = availableOptions.indexOf(optionIndex);
   		//remove the optionIndex from availableOptions
   		availableOptions.splice(index2,1);
   		const option = document.createElement("div");
   		option.innerHTML = currentQuestion.options[optionIndex];
   		option.id = optionIndex;
   		option.style.animationDelay= animationDelay + 's';
   		animationDelay = animationDelay + 0.15;
   		option.className = "option";
   		optionContainer.appendChild(option)
   		option.setAttribute("onclick", "getResult(this)");
   }
	questionCounter++
}
//get result of current attempt
function getResult(element){
	const id = parseInt(element.id);
	//get the answer by compairing the id of the options
	if (id === currentQuestion.answer){
		//set the green color to the correct option
		element.classList.add("correct");
		//add color to indector if answer is correct
		updateAnswerIndecator("correct");
		correctAnswers++;

	}else{
		//set the red color to the incorrect option
		element.classList.add("wrong");
		//add color to indector if answer is wrong
		updateAnswerIndecator("wrong");
	}
	attempt++;
	//unclickableOptions();
}

/*make all options unclickable once the user select
function unclickableOptions(){
	const optionLen = optionContainer.children.length;
	for(let i=0 ; i<optionLen ; i++){
		optionContainer.children[i].classList.add("aready-answered");
	}
}*/

function answerIndecator(){
	answerIndecatorContainer.innerHTML = '';
	const totalQuestion = quiz.length;
	for (let i=0 ; i<totalQuestion ; i++){
		const indecator = document.createElement("div");
		answerIndecatorContainer.appendChild(indecator);
	}
} function updateAnswerIndecator(markType){
	answerIndecatorContainer.children[questionCounter-1].classList.add(markType);
}

function next(){
	if (questionCounter === quiz.length){

		quizOver();
	}else{
		getNewQuestions();
	}
//

}

//Previous button
/*function previous(){
	if (questionCounter == 0) {
       questionCounter = quiz.length - 1;
     } // reset question
     else {
       questionCounter--;
     }
}
//  */
function quizOver(){
	//when the quiz is over, the  timer stops
// window.clearInterval(update);
clearInterval(countdownTimer);
  upgradeTime = "-";
	//show the registrer box
	registerBox.classList.remove("hide");
	//hide quiz box
	quizBox.classList.add("hide");

}

function register(){
	//show the result box
	resultBox.classList.remove("hide");
	//
	registerBox.classList.add("hide");
	quizResult();
}

////// Elapsed time - Users  ----------
/*
var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}
*/
// end of elapsed time ---------


// reset option

    function clearResult(){
  document.getElementById("countdown").value = ''
}

// reset option













//get the quiz result
function quizResult(){
	resultBox.querySelector(".total_question").innerHTML = quiz.length;
	resultBox.querySelector(".total_attempt").innerHTML = attempt;
	resultBox.querySelector(".total_correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total_wrong").innerHTML = attempt - correctAnswers;
	const persentage = (correctAnswers/quiz.length)*100;
	resultBox.querySelector(".persentage").innerHTML = persentage.toFixed(0) + "%";
	resultBox.querySelector(".total_score").innerHTML = correctAnswers + " / " + quiz.length;



 
}

function resetQuiz(){
	 questionCounter = 0;
	 correctAnswers = 0;
	 attempt = 0;
     quiz = 0;
}

//** function tryAgainQuiz(){
//**	//hide the resultBox
//**	resultBox.classList.add("hide");
//**	//show the quizBox
//**	quizBox.classList.remove("hide");

//**	resetQuiz();
//**	startQuiz();
//** }

function goToHome(){
	//hide the result box
	resultBox.classList.add("hide");
	//show home box
	homeBox.classList.remove("hide");

	resetQuiz();
}
//###Kick-Off Quiz###

function startQuiz() {
	//start timer
	upgradeTime = 15; // set time in seconds 
	seconds = upgradeTime;
	//hide home Box
	homeBox.classList.add("hide");
	//show the quiz box
	quizBox.classList.remove("hide");
	//first we set all questions in availableQuestions array
	setAvailableQuestions();
	//second we will call the getNewQuestions() funcrion
	getNewQuestions();
	//to create indecator of answers
	answerIndecator();

}
function timer() {
var days        = Math.floor(seconds/24/60/60);
var hoursLeft   = Math.floor((seconds) - (days*86400));
var hours       = Math.floor(hoursLeft/3600);
var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
var minutes     = Math.floor(minutesLeft/60);
var remainingSeconds = seconds % 60;
function pad(n) {
return (n < 10 ? "0" + n : n);
}
document.getElementById('countdown').innerHTML = "Time Remaining :" + pad(minutes) + ":" + pad(remainingSeconds);
if (seconds == 0) {
clearInterval(countdownTimer);
document.getElementById('countdown').innerHTML = "Time is Over";
quizBox.classList.add("hide");
registerBox.classList.remove("hide");

//show the result box
//*resultBox.classList.remove("hide");
//*quizResult();

} else {
seconds--;
}
}
var countdownTimer = setInterval('timer()', 1000);
window.onload = function (){
	homeBox.querySelector(".total_question").innerHTML = quiz.length;
}


























//array of objects
const quiz = [
	{
		q:'	Who is responsible for ethics in an organisation? ',
		options:['Employees','Employers','HR','All of the Above'],
		answer:3
	},
	{
		q:' Ethics & Law overlap. This is called in Business as… ',
        options:['Unknown - Grey Area','Drucker Principle - Red Area','Deming Principle - Yellow Area','Freud Principle - Dark'],
        answer:0
	},
	{
		q:'Ethical character traits include integrity, honesty, and justice. ',
		options:['True','Integrity & Honesty only','Honesty & Justice only','Justice and Integrity only'],
		answer:0
	},
	{
		q:' Which of the following is not the responsibilities of an Employee? ',
		options:['Comply with the Code','Make Declaration of Compliance to the Code','Continously promote high standard of business conduct and ethics','Keep abreast with latest update'],
		answer:2
	},
	{
		q:' What is the definition of ethics? ',
		options:['A set of classroom laws','Telling the truth 55% of the time','A set of moral principles','A set of criminal laws'],
		answer:3
	},
	{
		q:'Business Code of Ethics:',
		options:['Should provide a list that only new employees must follow','Should exempt upper management','Should change every week','Should provide a framework for professional responsibility'],
		answer:3
	}
]
