import $ from 'jquery';
import hljs from 'highlight.js';
import { randomIndex, putElementAtIndex, switchClass } from './helper';
export class View {

  constructor() {
    this.container = $(".container");

    // DOM elements related to game stats
    this.numCorrectEl = $("#num-correct");
    this.numWrongEl = $("#num-wrong");
    this.remainingTimeEl = $("#remaining-time");
    this.timeBarEl = $("#time-bar");

    // Elements related to problem view
    this.questionEl = $("#question");
    this.codeEl = $("#code-box");
    this.multipleBoxEl = $("#multiple-box");

    // Elements related to correct or wrong Message view
    this.correctMsg = $("#correct-msg");
    this.wrongMsg = $("#wrong-msg");

    // start UI with difficulty choose buttons
    this.startUI = $("#start-ui");

    //number of question counter
    this.totalNum = $("#totalNum");
    this.currentNum = $("#currentNum");

    //game result
    this.gameEndBoxEl = $("#game-end");

  }

  //render problem view with problem object
  renderProblem(problemObj) {
    const problem = problemObj.problem;
    const currentNum = problemObj.counter;

    // timer set, question title, code update, current question number
    this.remainingTimeEl.text("30");
    this.questionEl.text(problem.q);
    this.codeEl.html(problem.code); //TODO: Recreate every time

    //update current question number except last question
    if (this.currentNum.text() === "-" || +this.totalNum.text() > +this.currentNum.text()) this.currentNum.text(currentNum);

    //code highlight
    hljs.highlightBlock(this.codeEl[0]);

    //merge correct choice and incorrect choices into new array
    const correctIndex = randomIndex(problem.incorrect.length); // index where correct choice is put(?) at
    const choices = putElementAtIndex(problem.incorrect, problem.correct, correctIndex);

    //delete previous multiple elements
    $(".choice").remove();

    //create new choices and append to multiple box div
    choices.forEach((choice, i) => {
      $("<button>").addClass("choice btn btn-primary btn-block").text(choice).data("correct", i === correctIndex)
        .appendTo(this.multipleBoxEl);
    })
  }

  // method for updating timer
  updateRemainingTime(t) {
    this.remainingTimeEl.text(t);
    this.timeBarEl.css("width", (t / 30 * 100) + "%"); //decrease time bar length
  }

  // for Each user input(click), show the message whether it's correct or wrong
  // gameStat is object which has 3 properties (correct: number of correct answer, wrong, isCurrentCorrect: boolean which checks user answer is correct or not
  showResultMsg(gameStat) {

    this.container.animate({opacity: 0.6});

    // correct answer
    if (gameStat.isCurrentCorrect) {
      this.numCorrectEl.text(gameStat.correct);
      $("#multiple-box button.choice").each(function() { // show correct answer
        if($(this).data("correct")) switchClass($(this), "btn-primary", "btn-success");
      });
      this.correctMsg.show('slow', () => {
        setTimeout(() => {
          this.correctMsg.hide('slow');
          this.container.animate({opacity: 1});
        }, 1500);
      });
    }
    // wrong answer
    else {
      this.numWrongEl.text(gameStat.wrong);
      $("#multiple-box button.choice").each(function() { // show correct answer
        if($(this).data("correct")) switchClass($(this), "btn-primary", "btn-danger");
      });
      this.wrongMsg.show('slow', () => {
        setTimeout(() => {
          this.wrongMsg.hide('slow');
          this.container.animate({opacity: 1});
        }, 1500);
      });
    }
  }


  // After user select difficulty, hide "difficulty select UI"
  hideStartUI() {
    this.startUI.hide("slow");
    this.container.animate({opacity: 1});
  }

  // Number of total problems. It depends on the difficulty user selected
  setTotalProblemCount(numOfQuestion) {
    this.totalNum.text(numOfQuestion);
  }

  // Method for rendering game ending
  renderGameEndView() {
    const score = Math.round((+this.numCorrectEl.text()) / (+this.totalNum.text()) * 100);
    this.gameEndBoxEl.find("h1 span.label").text("Score: " + score + "%");
    if (score > 80) {
      this.gameEndBoxEl.find("h2").text("Great Job!!");
      this.gameEndBoxEl.find("img").attr("src", "assets/images/great.png");
    } else if (score > 50) {
      this.gameEndBoxEl.find("h2").text("Good!");
      this.gameEndBoxEl.find("img").attr("src", "assets/images/ok.png");
    } else {
      this.gameEndBoxEl.find("h2").text("Oooops!");
      this.gameEndBoxEl.find("img").attr("src", "assets/images/bad.png");
    }

    //Show game ending view
    this.gameEndBoxEl.show("slow");
  }

  // User want to try again, so initialize view;
  tryAgainClicked() {
    this.gameEndBoxEl.hide("slow");
    this.startUI.show("slow");
    this.currentNum.text("-");
    this.totalNum.text("-");
    this.numCorrectEl.text("0");
    this.numWrongEl.text("0");
    this.container.animate({opacity: 0.6});

  }


}