/**
 * Created by Hyungwu Pae on 2/10/17.
 */

import {problems} from './js-trivia.json';
import $ from 'jquery';
import {View} from './view'
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEventPattern";
import "rxjs/add/observable/timer";
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


export class App {

  constructor(view) {
    console.log("App Created!");

    this.view = view;
    this.view.renderProblem(problems[0]);

    //start event -> problems stream
    this.start$
      = Observable.fromEvent($("#start-button"), "click") //radio button submit
      .take(1)
      .switchMap(difficulty => // easy, normal, hard
        Observable.of(problems)
          .filter(problem => problem.difficulty === difficulty) // filter only problems that has selected difficulty
      );

    //click stream
    this.clickChoice$ = Observable.fromEventPattern((h) => {
      $("#multiple-box").on("click", ".choice", h);
    });


    //30 sec timer stream
    this.timerForThirtySec$ = Observable.timer(0, 1000)
      .map(t => 30-t)
      .take(31) // for 30 seconds
      .takeUntil(this.clickChoice$)
      .do((t)=>console.log("timerForThirtySec$ stream: " + t))
      .do(t => this.view.updateRemainingTime(t))
      .repeatWhen((completed) =>
        completed.delay(3000) // 3 secs delay for correct/wrong message.
          .scan((acc) => acc+1, 1) // increase problem number (index of problems array)
          .do(acc=> {
            console.log("30 SECONDS COMPLETED");
            return this.view.renderProblem(problems[acc]);
          })
      ) // repeat [number of problems] times
      // .share();


    //no-click within 30 secs
    this.noAnswer$
      = this.timerForThirtySec$
      .do((t)=>console.log("no answer stream: " + t))
      .filter(t => t === 0)
      .mapTo(false); // answer is wrong


    //answer stream
    this.answer$ = this.clickChoice$
      .map(e => $(e.target).data("correct")) // is answer correct? true or false
      .merge(this.noAnswer$)
      .scan((acc, isCorrect) => {
        isCorrect ? acc.correct++ : acc.wrong++;
        return { correct: acc.correct, wrong: acc.wrong, isCurrentCorrect: isCorrect}
      }, { correct:0, wrong:0, isCurrentCorrect: false });


    //answer subscription
    this.answerSub
      = this.answer$.subscribe(gameStat => this.view.showResultMsg(gameStat));
  }

  nextProblem() {
    this.view.renderProblem(problems[15]);
  }

  start() {
    //TODO: initial view

    this.nextProblem();
  }
}
$(document).ready(() => {
  const app = new App(new View());

});

