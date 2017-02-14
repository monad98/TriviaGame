import {Helper} from "./helper";
import $ from 'jquery';
import hljs from 'highlight.js';

export class View {

  constructor() {
    this.numCorrectEl = $("#num-correct");
    this.numWrongEl = $("#num-wrong");
    this.remainingTimeEl = $("#remaining-time");
    this.questionEl = $("#question");
    this.codeEl = $("#code-box");
    this.multipleBoxEl = $("#multiple-box");
  }

  //render problem with problem object
  renderProblem(problem) {
    console.log(problem);

    // timer set, question title, code update
    this.remainingTimeEl.text("30");
    this.questionEl.text(problem.q);
    this.codeEl.text(problem.code); //TODO: Recreate every time
    hljs.initHighlighting();
    // hljs.highlightBlock(this.codeEl);

    //merge correct choice and incorrect choices into new array
    const correctIndex = Helper.randomIndex(problem.incorrect.length); // index where correct choice is put(?) at
    const choices = [ ...problem.incorrect.slice(0, correctIndex), problem.correct, ...problem.incorrect.slice(correctIndex)];

    //delete
    $(".choice").remove();

    //create new choices and append to multiple box div
    choices.forEach((choice, i) => {
      $("<button>").addClass("choice btn btn-primary btn-block").text(choice).attr("data-isAnswer", i === correctIndex)
        .appendTo(this.multipleBoxEl);
    })


  }




}