import {Helper} from "./helper";
import $ from 'jquery';
import hljs from 'highlight.js';

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
  }

  //render problem with problem object
  renderProblem(problemObj) {
    const problem = problemObj.problem;
    const currentNum = problemObj.counter;
    console.log(currentNum + ":   " + problem.q);
    // timer set, question title, code update, current question number
    this.remainingTimeEl.text("30");
    this.questionEl.text(problem.q);
    this.codeEl.html(problem.code); //TODO: Recreate every time
    this.currentNum.text(currentNum);
    hljs.initHighlighting();

    //merge correct choice and incorrect choices into new array
    const correctIndex = Helper.randomIndex(problem.incorrect.length); // index where correct choice is put(?) at
    const choices = [ ...problem.incorrect.slice(0, correctIndex), problem.correct, ...problem.incorrect.slice(correctIndex)];

    //delete previous multiple elements
    $(".choice").remove();

    //create new choices and append to multiple box div
    choices.forEach((choice, i) => {
      $("<button>").addClass("choice btn btn-primary btn-block").text(choice).data("correct", i === correctIndex)
        .appendTo(this.multipleBoxEl);
    })
  }

  updateRemainingTime(t) {
    this.remainingTimeEl.text(t);
    this.timeBarEl.css("width", (t / 30 * 100) + "%"); //decrease time bar length
  }

  showResultMsg(gameStat) {

    this.container.animate({ opacity: 0.3 });

    // correct answer
    if(gameStat.isCurrentCorrect) {
      this.numCorrectEl.text(gameStat.correct);
      this.correctMsg.show('slow', () => {
        setTimeout(() => {
          this.correctMsg.hide('slow');
          this.container.animate({ opacity: 1 });
        }, 1000);
      });
    }
    // wrong answer
    else {
      this.numWrongEl.text(gameStat.wrong);
      this.wrongMsg.show('slow', () => {
        setTimeout(() => {
          this.wrongMsg.hide('slow');
          this.container.animate({ opacity: 1 });
        }, 1000);
      });
    }
  }

  hideStartUI() {
    this.startUI.hide("slow");
    this.container.animate({ opacity: 1 });
  }

  setTotalProblemCount(numOfQuestion) {
    this.totalNum.text(numOfQuestion);
  }


}