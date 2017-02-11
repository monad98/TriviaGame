/**
 * Created by Hyungwu Pae on 2/10/17.
 */

import {
  results
} from './trivia.json';
import '../css/style.css';
import $ from 'jquery';
// import jQuery from 'jquery';

export class App {

  // constructor(qnas) {}

  start() {
    console.log(results[0]);

    // $("#question").html("This is queston");
  }
}

$(document).ready(() => {
  const app = new App();
  app.start();
  $("#question").text("This is queston");
});
