/**
 * Created by Hyungwu Pae on 2/10/17.
 */

import {problems} from './js-trivia.json';
import $ from 'jquery';
import {View} from './view'
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEventPattern";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/observable/timer";
import "rxjs/add/observable/from";
import "rxjs/add/observable/of";
import "rxjs/add/operator/take";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/repeat";
import "rxjs/add/operator/repeatWhen";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/do";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/share";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/zip";
import "rxjs/add/operator/concat";
import "rxjs/add/operator/throttleTime";


export class App {

  constructor(view) {
    console.log("App Created!");

    this.view = view;

    this.start$  //difficulty button submit, quiz start!
      = Observable.fromEvent($(".start-button"), "click")
      .do(() => this.view.hideStartUI()) // side effect: view update
      .share();

    //start event -> problems stream
    this.problems$
      = this.start$
      .take(1)
      .map(ev => $(ev.target).text().toLowerCase())
      .map(difficulty => {  // easy, medium, hard
        // filter only problems that has selected difficulty
        const selectedProblems = problems.filter(problem => problem.difficulty === difficulty);
        const numberOfProblems = selectedProblems.length;
        return {selectedProblems, numberOfProblems};
      })
      .do(({_, numberOfProblems}) => this.view.setTotalProblemCount(numberOfProblems)) // render total number of question. This is excuted only 1 time when user select difficulty
      .switchMap(({selectedProblems, numberOfProblems}) =>
        Observable
          .from(selectedProblems)
          .concat(Observable.of({
            q: "You Completed All The Quizzes. Bonus Quiz: What is printed in the console?",
            code: "var howCanIStudyJavascript = \"Study All Night.\"\nfunction howManyDaysShouldIStudyJavascript() {\n    return howCanIStudyJavascript + \"For 3" +
            " Years\";\n}\nhowManyDaysShouldIStudyJavascript();",
            incorrect: ["Study All Night For 3 Months", "Study All Night For 3 Centuries"],
            correct: "Study All Night For 3 Years",
          })) // Show "Complete quizzes" message and bonus quiz
          .scan((acc, problem) => { // counting current question number;
            const count = acc.counter + 1;
            return {counter: count, problem: problem};
          },{counter: 0, problem:null})
      );


    //30 sec timer stream
    // timer is started when use choose one of difficulty buttons
    this.timer$
      = this.start$
      .switchMap(() =>
        Observable.timer(0, 1000)
          .map(t => 30-t)
          .take(31) // for 30 seconds for solving problem
          .takeUntil(this.clickChoice$)
          .do(t => this.view.updateRemainingTime(t)) // side effect: update remaining time UI
          .repeatWhen((completed) =>
            completed.delay(2000) // 2 secs delay for correct/wrong message.
              .do(() => {
                console.log("Answered or 30 seconds passed.");
              })
          )
      );


    //click stream
    this.clickChoice$ = Observable.fromEventPattern((h) => {
      $("#multiple-box").on("click", ".choice", h); // if one of multiple is clicked
    })
      .throttleTime(2000 + 100) // while showing the result message (correct, wrong), restrict click again.
      .share();

    //no-click within 30 secs stream
    this.noAnswer$
      = this.timer$
      .filter(t => t === 0) // when time's up
      .mapTo(false); // because user didn't pick answer, consider answer for this question wrong


    //answer stream: Observable<boolean>, not clicked answer within 30secs   +    clicked answer
    this.answer$
      = this.clickChoice$
      .map(e => $(e.target).data("correct")) // is answer correct? true or false
      .merge(this.noAnswer$) // no click within 30 sec is considered as false answer
      .scan((acc, isCorrect) => { // game stats and whether current answer is correct
        isCorrect ? acc.correct++ : acc.wrong++;
        return { correct: acc.correct, wrong: acc.wrong, isCurrentCorrect: isCorrect}
      }, { correct:0, wrong:0, isCurrentCorrect: false });


    // stream that contain pairs of problem and answer
    this.problemsAndAnswers$
      = this.answer$
      .startWith({}) // fake answer for the first problem feed
      .zip(this.problems$); // take while problem is not completed, Every 33 sec, receive new problem


    //restart game button click event stream(try again)
    Observable.fromEvent($("#try-again"), "click")
      .subscribe(() => {
        this.view.tryAgainClicked();
        this.start();
      })


  }

  start() {

    if(this.triviaSub) this.triviaSub.unsubscribe(); //just for safe

    //problems subscription
    //Mostly don't need to unsubscribe, because when there is no more problems, it is completed.
    this.triviaSub
      = this.problemsAndAnswers$.subscribe(
      ([answerObj, problemObj]) => {
        // this is real answer (not the first fake one)
        if(answerObj.hasOwnProperty("isCurrentCorrect")) {
          // After we show the result of user's answer , we wait 2 sec before we show another problem to user
          this.view.showResultMsg(answerObj);
          setTimeout(() => {
            this.view.renderProblem(problemObj);
          }, 2000);
        } else { //this is a fake answer, so just show problem (not the result)
          this.view.renderProblem(problemObj);
        }
      },
      () => { console.log("Something went wrong.")}, // error
      () => {  // complete : Quiz is completed, so we are going to show game ending view.
        console.log("Trivia Quiz Completed!");

        //after 2000ms of showing result of this problem, show overall game result
        setTimeout(() => this.view.renderGameEndView(), 2000);
      }
    );
  }
}

$(document).ready(() => {
  const app = new App(new View());
  app.start();
});

