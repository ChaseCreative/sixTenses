
var thirdPerSing = ["He", "She", "It"];

var verbsFirst = [["am", "loving"], ["st", "standing"],["labor", "working"], ["habit", "living"], ["cogit", "thinking"], ["cant", "singing"], ["d", "giving"],["laud", "praising"],["serv", "saving"],["voc", "calling"],["err", "wandering"], ["conserv", "preserving"]];

var verbsFirstPer = [["amav", "loved"], ["stet", "stood"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sung"], ["ded", "given"],["laudav", "praised"],["servav", "saved"],["vocav", "called"],["errav", "wandered"],["conservav", "preserved"]];

var perEndingsFirst = [["ō", "I am "], ["ās", "You are "], ["at", thirdPerSing[ran3PSIndex] + " is "], ["āmus", "We are "], ["ātis", "Ya'll are "], ["ant", "They are "]];

var perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", thirdPerSing[ran3PSIndex] + " was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

var perEndingsFirstPerfect = [["ī", "I have "], ["isti", "You have "], ["it", thirdPerSing[ran3PSIndex] + " has "], ["imus", "We have "], ["istis", "Ya'll have "], ["ērunt", "They have "]];

var pluPerEndingsFirstPerfect = [["eram", "I had "], ["eras", "You had "], ["erat", thirdPerSing[ran3PSIndex] + " had "], ["eramus", "We had "], ["eratis", "Ya'll had "], ["erant", "They had "]];

var futPerEndings = [["ero", "I will have "], ["eris", "You will have "], ["erit", thirdPerSing[ran3PSIndex] + " will have "], ["erimus", "We will have "], ["eritis", "Ya'll will have "], ["erint", "They will have "]];


var answers = ["serBtnA", "serBtnA1", "serBtnB", "serBtnB2", "serBtnC", "serBtnC3"];


var verbsFirstFuture = [["amā", "love"], ["sta", "stand"],["laborā", "work"], ["habitā", "live"], ["cogitā", "think"], ["cantā", "sing"], ["dā", "give"],["laudā", "praise"],["servā", "save"],["vocā", "call"],["errā", "wander"],["conservā", "preserve"]];

var verbsSecondFuture = [["vidē", "see"], ["terrē", "frighten"], ["habē", "have"], ["tenē", "hold"], ["monē", "warn"], ["sedē", "sit"],["timē", "fear"],["manē","remain"]];

var perEndingsFuture = [["bō", "I will "], ["bis", "You will "], ["bit", thirdPerSing[ran3PSIndex] + " will "], ["bimus", "We will "], ["bitis", "Ya'll will "], ["bunt", "They will "]];

var verbsThird = [["duc", "lead"], ["dīc", "say"], ["intelleg", "understand"],["mitt", "send"],["vīv", "live"],["curr", "run"], ["ag", "do"], ["scrīb", "write"], ["vinc", "conquer"],["trah", "drag"],["ger", "wear"]];

var perEndingsThirdFuture = [["am", "I will "], ["ēs", "You will "], ["et", thirdPerSing[ran3PSIndex] + " will "], ["ēmus", "We will "], ["ētis", "Ya'll will "], ["ent", "They will "]];

var verbsThirdIoAndFourth = [["faci", "make"], ["audi", "hear"], ["senti", "feel"],["dormi", "sleep"], ["accipi", "receive"], ["capi", "capture"], ["fugi", "flee"],["inveni", "find"],["veni", "come"]];

var perEndingsThirdIoAndFourthFuture = [["am", "I will "], ["ēs", "You will "], ["et", thirdPerSing[ran3PSIndex] + " will "], ["ēmus", "We will "], ["ētis", "Ya'll will "], ["ent", "They will "]];

var ran3PSIndex = Math.floor(Math.random() * 3);
var randIndex = Math.floor(Math.random() * 12);
var randPEIndex = Math.floor(Math.random() * 6);
var randVerbPickIndex = Math.floor(Math.random() * 4);
var rand6VerbPickIndex = Math.floor(Math.random() * 6);

//var futTV0 = verbsSecondFuture[randIndex][0] + perEndingsFuture[randPEIndex][0];
var futTV0 =  verbsFirstFuture[randIndex][0] + perEndingsFuture[randPEIndex][0];
//var futTV0 =  [verbsFirstFuture[randIndex][0] + perEndingsFuture[randPEIndex][0],verbsSecondFuture[randIndex][0] + perEndingsFuture[randPEIndex][0],];
var presTV1 = verbsFirst[randIndex][0] + perEndingsFirst[randPEIndex][0];
var impTV2 = verbsFirst[randIndex][0] + perEndingsFirstImp[randPEIndex][0];
var perTV3 = verbsFirstPer[randIndex][0] + perEndingsFirstPerfect[randPEIndex][0];
var pluPerTV4 = verbsFirstPer[randIndex][0] + pluPerEndingsFirstPerfect[randPEIndex][0];
var futPerTV5 = verbsFirstPer[randIndex][0] + futPerEndings[randPEIndex][0];


var randVerbPick = [pluPerTV4,presTV1,futPerTV5,perTV3];
var rand4TenseVerbPick = [pluPerTV4, presTV1,impTV2,perTV3];

var rand6TenseVerbPick =[futTV0, presTV1,impTV2, perTV3, pluPerTV4, futPerTV5];

//var randVerbPickEnglish0 = perEndingsFuture[randPEIndex][1] + verbsSecondFuture[randIndex][1];
var randVerbPickEnglish0 = perEndingsFuture[randPEIndex][1] + verbsFirstFuture[randIndex][1];
var randVerbPickEnglish1 = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1];
var randVerbPickEnglish2 = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1];
var randVerbPickEnglish3 = perEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
var randVerbPickEnglish4 = pluPerEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
var randVerbPickEnglish5 = futPerEndings[randPEIndex][1] + verbsFirstPer[randIndex][1];

var randVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish5,randVerbPickEnglish3];
var rand4TenseVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish2,randVerbPickEnglish3];
var rand6TenseVerbPickEnglsihArray = [randVerbPickEnglish0,randVerbPickEnglish1,randVerbPickEnglish2,randVerbPickEnglish3,randVerbPickEnglish4, randVerbPickEnglish5];



function resetVerb(){

	thirdPerSing = ["He", "She", "It"];

	verbsFirst = [["am", "loving"], ["st", "standing"],["labor", "working"], ["habit", "living"], ["cogit", "thinking"], ["cant", "singing"], ["d", "giving"],["laud", "praising"],["serv", "saving"],["voc", "calling"],["err", "wandering"], ["conserv", "preserving"]];

	verbsFirstPer = [["amav", "loved"], ["stet", "stood"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sung"], ["ded", "given"],["laudav", "praised"],["servav", "saved"],["vocav", "called"],["errav", "wandered"],["conservav", "preserved"]];

	perEndingsFirst = [["ō", "I am "], ["ās", "You are "], ["at", thirdPerSing[ran3PSIndex] + " is "], ["āmus", "We are "], ["ātis", "Ya'll are "], ["ant", "They are "]];

	perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", thirdPerSing[ran3PSIndex] + " was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

	perEndingsFirstPerfect = [["ī", "I have "], ["isti", "You have "], ["it", thirdPerSing[ran3PSIndex] + " has "], ["imus", "We have "], ["istis", "Ya'll have "], ["ērunt", "They have "]];

	pluPerEndingsFirstPerfect = [["eram", "I had "], ["eras", "You had "], ["erat", thirdPerSing[ran3PSIndex] + " had "], ["eramus", "We had "], ["eratis", "Ya'll had "], ["erant", "They had "]];

	futPerEndings = [["ero", "I will have "], ["eris", "You will have "], ["erit", thirdPerSing[ran3PSIndex] + " will have "], ["erimus", "We will have "], ["eritis", "Ya'll will have "], ["erint", "They will have "]];

	answers = ["serBtnA", "serBtnA1", "serBtnB", "serBtnB2", "serBtnC", "serBtnC3"];




	verbsFirstFuture = [["amā", "love"], ["sta", "stand"],["laborā", "work"], ["habitā", "live"], ["cogitā", "think"], ["cantā", "sing"], ["dā", "give"],["laudā", "praise"],["servā", "save"],["vocā", "call"],["errā", "wander"],["conservā", "preserve"]];

	verbsSecondFuture = [["vidē", "see"], ["terrē", "frighten"], ["habē", "have"], ["tenē", "hold"], ["monē", "warn"], ["sedē", "sit"],["timē", "fear"],["manē","remain"]];

	perEndingsFuture = [["bō", "I will "], ["bis", "You will "], ["bit", thirdPerSing[ran3PSIndex] + " will "], ["bimus", "We will "], ["bitis", "Ya'll will "], ["bunt", "They will "]];

	verbsThird = [["duc", "lead"], ["dīc", "say"], ["intelleg", "understand"],["mitt", "send"],["vīv", "live"],["curr", "run"], ["ag", "do"], ["scrīb", "write"], ["vinc", "conquer"],["trah", "drag"],["ger", "wear"]];

	perEndingsThirdFuture = [["am", "I will "], ["ēs", "You will "], ["et", thirdPerSing[ran3PSIndex] + " will "], ["ēmus", "We will "], ["ētis", "Ya'll will "], ["ent", "They will "]];

	verbsThirdIoAndFourth = [["faci", "make"], ["audi", "hear"], ["senti", "feel"],["dormi", "sleep"], ["accipi", "receive"], ["capi", "capture"], ["fugi", "flee"],["inveni", "find"],["veni", "come"]];

	perEndingsThirdIoAndFourthFuture = [["am", "I will "], ["ēs", "You will "], ["et", thirdPerSing[ran3PSIndex] + " will "], ["ēmus", "We will "], ["ētis", "Ya'll will "], ["ent", "They will "]];

  ran3PSIndex = Math.floor(Math.random() * 3);
	randIndex = Math.floor(Math.random() * 12);
	randPEIndex = Math.floor(Math.random() * 6);
	randVerbPickIndex = Math.floor(Math.random() * 4);
	rand6VerbPickIndex = Math.floor(Math.random() * 6);

	//futTV0 = verbsSecondFuture[randIndex][0] + perEndingsFuture[randPEIndex][0];

	//futTV0 =  [verbsFirstFuture[randIndex][0] + perEndingsFuture[randPEIndex][0],verbsSecondFuture[randIndex][0] + perEndingsFuture[randPEIndex][0],];

	futTV0 =  verbsFirstFuture[randIndex][0] + perEndingsFuture[randPEIndex][0];
	presTV1 = verbsFirst[randIndex][0] + perEndingsFirst[randPEIndex][0];
	impTV2 = verbsFirst[randIndex][0] + perEndingsFirstImp[randPEIndex][0];
	perTV3 = verbsFirstPer[randIndex][0] + perEndingsFirstPerfect[randPEIndex][0];
	pluPerTV4 = verbsFirstPer[randIndex][0] + pluPerEndingsFirstPerfect[randPEIndex][0];
	futPerTV5 = verbsFirstPer[randIndex][0] + futPerEndings[randPEIndex][0];


	randVerbPick = [pluPerTV4,presTV1,futPerTV5,perTV3];
	rand4TenseVerbPick = [pluPerTV4, presTV1,impTV2,perTV3];
	rand6TenseVerbPick =[futTV0, presTV1,impTV2, perTV3, pluPerTV4, futPerTV5];

	//randVerbPickEnglish0 = perEndingsFuture[randPEIndex][1] + verbsSecondFuture[randIndex][1];
	randVerbPickEnglish0 = perEndingsFuture[randPEIndex][1] + verbsFirstFuture[randIndex][1];
	randVerbPickEnglish1 = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1];
	randVerbPickEnglish2 = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1];
	randVerbPickEnglish3 = perEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
	randVerbPickEnglish4 = pluPerEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
	randVerbPickEnglish5 = futPerEndings[randPEIndex][1] + verbsFirstPer[randIndex][1];

	randVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish5,randVerbPickEnglish3];
	rand4TenseVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish2,randVerbPickEnglish3];
	rand6TenseVerbPickEnglsihArray = [randVerbPickEnglish0,randVerbPickEnglish1,randVerbPickEnglish2,randVerbPickEnglish3,randVerbPickEnglish4, randVerbPickEnglish5];

resetColors();

}


var randomNounIndex = 0;
var randomObjectIndex = 0;
var randomVerbIndex = 0;
var ranIndex = 0;




var randomSerpensAIndex = 0;
var correctAnswer = 0;
var wrongAnswer = 0;




var randomSerpensBIndex = 0;
var correctAnswer1 = 0;
var wrongAnswer1 = 0;



var randomSerpensCIndex = 0;
var correctAnswer2 = 0;
var wrongAnswer2 = 0;

var num_questions = 5;
var count = 0;




function incrementCount(){
	count++;
}


function setRandomSerpIndices(){

	randomSerpensAIndex = Math.floor(Math.random() * 2);
	correctAnswer = randomSerpensAIndex;
	wrongAnswer = randomSerpensAIndex;

	randomSerpensBIndex = Math.floor(Math.random() * 2);
	correctAnswer1 = randomSerpensBIndex;
	wrongAnswer1 = randomSerpensBIndex;

	randomSerpensCIndex = Math.floor(Math.random() * 2);
	correctAnswer2 = randomSerpensCIndex;
	wrongAnswer2 = randomSerpensCIndex;
}



//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var serBtnA = get(answers[0]);
    var serBtnB = get(answers[2]);
    var serBtnC = get(answers[4]);

    var serBtnA1 = get(answers[1]);
    var serBtnB2 = get(answers[3]);
    var serBtnC3 = get(answers[5]);



    var responseButton = get("responseButton");
    var responseNext = get("responseNext");





//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "sixTenses";}

function gameTitle() {get("startButton").innerHTML = "Start the Game!";}





//This loads the names of the games

    appName();
    //gameTitle();


function resetColors(){

		serBtnA.style.backgroundColor = "white";
		serBtnA.style.border = "white";
		serBtnA.style.color = "black";
		serBtnA.disabled =false;
		document.getElementById(answers[0]).style.backgroundColor = "white";

		serBtnA1.style.color = "black";
		serBtnA1.style.backgroundColor = "white";
		serBtnA1.style.border = "white";
		serBtnA1.disabled = false;
		document.getElementById(answers[1]).style.backgroundColor = "white";



		serBtnB.style.backgroundColor = "white";
		serBtnB.style.border = "white";
		serBtnB.style.color = "black";
		serBtnB.disabled =false;
		document.getElementById(answers[2]).style.backgroundColor = "white";

		serBtnB2.style.color = "black";
		serBtnB2.style.backgroundColor = "white";
		serBtnB2.style.border = "white";
		serBtnB2.disabled = false;
		document.getElementById(answers[3]).style.backgroundColor = "white";


		serBtnC.style.backgroundColor = "white";
		serBtnC.style.border = "white";
		serBtnC.style.color = "black";
		serBtnC.disabled =false;
		document.getElementById(answers[4]).style.backgroundColor = "white";

		serBtnC3.style.color = "black";
		serBtnC3.style.backgroundColor = "white";
		serBtnC3.style.border = "white";
		serBtnC3.disabled = false;
		document.getElementById(answers[5]).style.backgroundColor = "white";

		responseButton.innerHTML = "";
		responseButton.style.color = "";

		document.getElementById("serpensA").style.backgroundColor = "white";
		document.getElementById("serpensA1").style.backgroundColor = "white";
		document.getElementById("serpensB").style.backgroundColor = "white";
		document.getElementById("serpensB2").style.backgroundColor = "white";
		document.getElementById("serpensC").style.backgroundColor = "white";
		document.getElementById("serpensC3").style.backgroundColor = "white";

}


var correctAns = 0;
var correctAnswerTotal = 1;








//Score variables and functions



    var points = 0;

    var pointsPerCorrectAnswer = 10;



    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }


 //Timer variables
	var timeleft = 20;
	var countdown = setInterval(x,1000);



 	function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			resetColors();
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
    			correctAns = 0;


  }

}



function stopTimer() {


	clearInterval(countdown);


}


function resetTimer(){

	if (correctAns >= 3){
	resetColors();
	stopTimer();
	timeleft = 20;
	document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;

    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Optime!"
    			responseButton.style.color = "yellow";
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
	correctAns = 0;
}
}

function resetOnCorrectAnswer(){


	//resetColors();

	stopTimer();
	timeleft = 20;
	document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;

    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Optime!"
    			responseButton.style.color = "yellow";

}



function enableButtons(){

	serBtnA.disabled = false;
	serBtnB.disabled = false;
	serBtnC.disabled = false;

	serBtnA1.disabled = false;
	serBtnB2.disabled = false;
	serBtnC3.disabled = false;


}

function disableButtons(){
	serBtnA.disabled = true;
	serBtnB.disabled = true;
	serBtnC.disabled = true;

	serBtnA1.disabled = true;
	serBtnB2.disabled = true;
	serBtnC3.disabled = true;
}




function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }


								 //This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
								 	var currentIndex = array.length;
								 	var temporaryValue;
								 	//var randIndex;

								 	while (currentIndex > 0){
								 		randomIndex = Math.floor(Math.random() * currentIndex);
								 		currentIndex --;

								 		temporaryValue = array[currentIndex];
								 		array[currentIndex] = array[randomIndex];
								 		array[randomIndex] = temporaryValue;
								 	}
								 		return array;
}





function serpens132() {


								//shuffle(sixBoxes);

								resetVerb();
								 countDownTimer();
								 timeleft = 20;
								 countdown = setInterval(countDownTimer,1000);


								 resetColors();
								 setRandomSerpIndices();
								 enableButtons();
								 startButton.disabled = true;





								 class Noun{

								  constructor(nounForms){
								  this.nounForm = nounForms;
								  }
								 }



								 //This sets the correct subject in serpensA
								 var subjectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["poeta", "poet", "poet"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
								 var randomNounIndex = Math.floor(Math.random() * subjectArray.length);

								 newSubject = new Noun(subjectArray[randomNounIndex][0]);

								 //subject = newSubject.nounForm;
								 //var subject = verbsFirstFuture[randIndex][0] + perEndingsFuture[randPEIndex][0];
								 var subject = perEndingsFuture[randPEIndex][1] + verbsFirstFuture[randIndex][1];
								 get(answers[0]).innerHTML = subject;

								 //This sets the false subject in serpensA1
								 falseSubject = new Noun(subjectArray[randomNounIndex][1]);


								 //fakeSubject = falseSubject.nounForm + accPE1;
								 fakeSubject = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1];
								 get(answers[1]).innerHTML = fakeSubject;

								 //This randomizes the serpensA and serpensA1


/*
								 if (randomSerpensAIndex == 0) {
								  get(answers[0]).innerHTML = subject;
								  get(answers[1]).innerHTML = fakeSubject;

								 } else {
								  get(answers[1]).innerHTML = subject;
								  get(answers[0]).innerHTML = fakeSubject;

								 }

*/



								 //This sets the correct subject in serpensB
								 var objectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["filia", "fili", "daughter"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
								 var randomObjectIndex = Math.floor(Math.random() * objectArray.length);
								 newObject = new Noun(objectArray[randomObjectIndex][1]);

								 //object = newObject.nounForm +accPE1;
								 object = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1];
								 get(answers[2]).innerHTML = object;


								 //This sets the fake object in serpensB2
								 falseObject = new Noun(objectArray[randomObjectIndex][0]);

								 //fakeObject = falseObject.nounForm;
								 fakeObject = perEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
								 get(answers[3]).innerHTML = fakeObject;


								 //This randomizes serpensB and serpensB2

/*
								 if (randomSerpensBIndex == 0) {
								  get(answers[2]).innerHTML = object;
								  get(answers[3]).innerHTML = fakeObject;
								 } else {
								  get(answers[3]).innerHTML = object;
								  get(answers[2]).innerHTML = fakeObject;
								 }

*/


								 class Verb{
								  constructor(verbForms){
								 	 this.verbForm = verbForms;
								  }
								 }

								 //The sets the correct verb in serpensC
								 var verbArray = [["amo", "ama", "love"], ["pugno", "pugna", "fight"], ["servo", "serva", "save"], ["specto", "specta", "watche"]];
								 var randomVerbIndex = Math.floor(Math.random() * verbArray.length);
								 newVerb = new Verb(verbArray[randomVerbIndex][1]);
								 verb = pluPerEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
								 //verb = newVerb.verbForm + pres3rdSing;
								 get (answers[4]).innerHTML = verb;

								 //This sets the fake verb in serpensC3
								 falseVerb = new Verb(verbArray[randomVerbIndex][1]);

								 fakeVerb = futPerEndings[randPEIndex][1] + verbsFirstPer[randIndex][1];
								 //fakeVerb = falseVerb.verbForm + pres3rdPl;
								 get (answers[5]).innerHTML = fakeVerb;

/*
								 if (randomSerpensCIndex == 0) {
								  get(answers[4]).innerHTML = verb;
								  get(answers[5]).innerHTML = fakeVerb;
								 } else {
								  get(answers[5]).innerHTML = verb;
								  get(answers[4]).innerHTML = fakeVerb;
								 }

*/

								 //This prints the correct subject in the sentence
								 subjectTranslation = new Noun(subjectArray[randomNounIndex][2]);
								 subjectTranslation = subjectTranslation.nounForm;


								 //This sets the correc verb translaiton in the sentence
								 verbTranslation = new Verb(verbArray[randomVerbIndex][2]);
								 verbTranslation = verbTranslation.verbForm;

								 //This prints the direct object in the sentence
								 objectTranslation = new Noun(objectArray[randomObjectIndex][2]);
								 objectTranslation = objectTranslation.nounForm;








								 function sentence(){
									get("startButton").innerHTML =  rand6TenseVerbPick[rand6VerbPickIndex];
								  //get("startButton").innerHTML = "The " + subjectTranslation + " " +verbTranslation + "s " + "the " + objectTranslation + ".";
								 }

								 sentence();

								 incrementCount();



								 //responseButton.innerHTML = count;

								 if (count > num_questions) {
								  resetColors();
								  serBtnA.innerHTML = "";
								  serBtnB.innerHTML = "";
								  serBtnC.innerHTML = "";

								  serBtnA1.innerHTML = "";
								  serBtnB2.innerHTML = "";
								  serBtnC3.innerHTML = "";


								  startButton.innerHTML = "Click to play again!"
								  startButton.disabled = false;
								  count = 0;
								  document.getElementById("boxThree").innerHTML = "Score";
								  responseButton.innerHTML = "Try to beat your score of " + points + " points!";
								 	 points = 0;

								  stopTimer();
								  document.getElementById("boxOne").innerHTML = "Timer";

								 }




								 }








function serpensShuffle(){


	var mixUp = [serpens, serpens2BPlural];
	var randomSerpIndex = Math.floor(Math.random() * mixUp.length);

	mixUp[randomSerpIndex]();

}







function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }







   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";



}











function clickedButton1(){


	if (document.getElementById(answers[0]).innerHTML == rand6TenseVerbPickEnglsihArray[rand6VerbPickIndex]){
		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnA.style.backgroundColor = "yellow";
		serBtnA.style.border = "yellow";
		document.getElementById("serpensA").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

resetOnCorrectAnswer();
		//resetTimer();


	} else {

		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";


	}





}


function clickedButton2(){


if (document.getElementById(answers[1]).innerHTML == rand6TenseVerbPickEnglsihArray[rand6VerbPickIndex]){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		responseButton.innerHTML = correctAns;
		document.getElementById("boxThree").innerHTML = points;


		serBtnA1.style.backgroundColor = "yellow";
		serBtnA1.style.border = "yellow";
		document.getElementById("serpensA1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

resetOnCorrectAnswer();
		//resetTimer();

	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}



}






function clickedButton3(){

	if (document.getElementById(answers[2]).innerHTML == rand6TenseVerbPickEnglsihArray[rand6VerbPickIndex]){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB.style.backgroundColor = "yellow";
		serBtnB.style.border = "yellow";
		document.getElementById("serpensB").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

resetOnCorrectAnswer();
		//resetTimer();

	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton4(){



if (document.getElementById(answers[3]).innerHTML == rand6TenseVerbPickEnglsihArray[rand6VerbPickIndex]){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB2.style.backgroundColor = "yellow";
		serBtnB2.style.border = "yellow";
		document.getElementById("serpensB2").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

resetOnCorrectAnswer();
		//resetTimer();
	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;


		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}







function clickedButton5(){

	if (document.getElementById(answers[4]).innerHTML == rand6TenseVerbPickEnglsihArray[rand6VerbPickIndex]){

		correctAnswerAudio();
		//clickedCorrectAnswerFiveAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;

		document.getElementById("boxThree").innerHTML = points;

		serBtnC.style.backgroundColor = "yellow";
		serBtnC.style.border = "yellow";
		document.getElementById("serpensC").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";


		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

resetOnCorrectAnswer();

		//resetTimer();
	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton6(){

if (document.getElementById(answers[5]).innerHTML == rand6TenseVerbPickEnglsihArray[rand6VerbPickIndex]){

		correctAnswerAudio();
		//clickedCorrectAnswerSixAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;


		document.getElementById("boxThree").innerHTML = points;

		serBtnC3.style.backgroundColor = "yellow";
		serBtnC3.style.border = "yellow";
		document.getElementById("serpensC3").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

    resetOnCorrectAnswer();


		//resetTimer();
	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
