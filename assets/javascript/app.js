/**
 * Created by Hyungwu Pae on 2/10/17.
 */

import {results} from './trivia.json';

console.log(results[0].correct_answer);
export class TriviaGame {

  constructor(qnas) {}

  start() {
    console.log(results[0].correct_answer);
  }
}