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
// import "rxjs/add/operator/share";


export class App {


  // problemNo = 1;
  // totalProblems = problems.length;


  constructor(view) {
    this.view = view;
    console.log("App Created!");

    //click stream
    this.clickChoice$ = Observable.fromEventPattern((h) => {
      $("#multiple-box").on("click", ".choice", h);
    });


    //answer stream
    this.answer$ = this.clickChoice$
      .map(e => $(e.target).data("isAnswer"));

    //30 sec timer stream
    this.timerForThirtySec$ = Observable.timer(0, 1000)
      .map(t => 30-t)
      .take(31) // for 30 seconds
      .takeUntil(this.clickChoice$);


    //whole game timer
    this.timer$ = this.timerForThirtySec$
      .repeatWhen((completed) =>
        completed.delay(3000)
          .scan((acc) => acc+1, 1)
          .do(acc=> {
            console.log("30 SECONDS COMPLETED");
            return this.view.renderProblem(problems[acc]);
          })
      ); // repeat [number of problems] times

    //timer subscription
    this.timerSub = this.timer$.subscribe(() => console.log("GAME COMPLETED"));

    //answer subscription
    this.answerSub = this.answer$.subscribe((isAnswer) => {
      console.log(isAnswer);
      // correct answer
      if(isAnswer) {
        $("#correct-msg").show('slow', () => {
          setTimeout(() => $("#correct-msg").hide('slow'), 3000);
        });
      }
      // wrong answer
      else {
        $("#wrong-msg").show('slow', () => {
          setTimeout(() => $("#wrong-msg").hide('slow'), 3000);
        });
      }


    });


    // this.correctSub =

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
  app.start();

});

