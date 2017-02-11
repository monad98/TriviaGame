(function (exports) {
'use strict';

var results = [{ "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Which of the following sports is not part of the triathlon?", "correct_answer": "Horse-Riding", "incorrect_answers": ["Cycling", "Swimming", "Running"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "At which bridge does the annual Oxford and Cambridge boat race start?", "correct_answer": "Putney", "incorrect_answers": ["Hammersmith", "Vauxhall ", "Battersea"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "How many times did Martina Navratilova win the Wimbledon Singles Championship?", "correct_answer": "Nine", "incorrect_answers": ["Ten", "Seven", "Eight"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?", "correct_answer": "Jordan", "incorrect_answers": ["Benetton", "Ferrari", "Mercedes"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which German sportswear company&#039;s logo is the &#039;Formstripe&#039;?", "correct_answer": "Puma", "incorrect_answers": ["Nike", "Adidas", "Reebok"] }, { "category": "Sports", "type": "multiple", "difficulty": "hard", "question": "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?", "correct_answer": "Hammer", "incorrect_answers": ["Wrench", "Drill", "Screwdriver"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "In golf, what name is given to a hole score of two under par?", "correct_answer": "Eagle", "incorrect_answers": ["Birdie", "Bogey", "Albatross"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "What cricketing term denotes a batsman being dismissed with a score of zero?", "correct_answer": "Duck", "incorrect_answers": ["Bye", "Beamer", "Carry"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which of these teams isn&#039;t a member of the NHL&#039;s &quot;Original Six&quot; era?", "correct_answer": "Philadelphia Flyers", "incorrect_answers": ["New York Rangers", "Toronto Maple Leafs", "Boston Bruins"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Who was the British professional wrestler Shirley Crabtree better known as?", "correct_answer": "Big Daddy", "incorrect_answers": ["Giant Haystacks", "Kendo Nagasaki", "Masambula"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "What is the nickname of Northampton town&#039;s rugby union club?", "correct_answer": "Saints", "incorrect_answers": ["Harlequins", "Saracens", "Wasps"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Which English football club has the nickname &#039;The Foxes&#039;?", "correct_answer": "Leicester City", "incorrect_answers": ["Northampton Town", "Bradford City", "West Bromwich Albion"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "How many soccer players should be on the field at the same time?", "correct_answer": "22", "incorrect_answers": ["20", "24", "26"] }, { "category": "Sports", "type": "boolean", "difficulty": "easy", "question": "Manchester United won the 2013-14 English Premier League.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "In what sport is a &quot;shuttlecock&quot; used?", "correct_answer": "Badminton", "incorrect_answers": ["Table Tennis", "Rugby", "Cricket"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Which team won the 2015-16 English Premier League?", "correct_answer": "Leicester City", "incorrect_answers": ["Liverpool", "Cheslea", "Manchester United"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "A stimpmeter measures the speed of a ball over what surface?", "correct_answer": "Golf Putting Green", "incorrect_answers": [" Football Pitch", "Cricket Outfield", "Pinball Table"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which Formula One driver was nicknamed &#039;The Professor&#039;?", "correct_answer": "Alain Prost", "incorrect_answers": ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "How many scoring zones are there on a conventional dart board?", "correct_answer": "82", "incorrect_answers": ["62", "42", "102"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "In a game of snooker, what colour ball is worth 3 points?", "correct_answer": "Green", "incorrect_answers": ["Yellow", "Brown", "Blue"] }, { "category": "Sports", "type": "multiple", "difficulty": "hard", "question": "With which doubles partner did John McEnroe have most success?", "correct_answer": "Peter Fleming", "incorrect_answers": ["Mark Woodforde", "Michael Stich", "Mary Carillo"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "In baseball, how many fouls are an out?", "correct_answer": "0", "incorrect_answers": ["5", "3", "2"] }, { "category": "Sports", "type": "boolean", "difficulty": "medium", "question": "Soccer player Cristiano Ronaldo opened a museum dedicated to himself.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "The F1 season of 1994 is remembered for what tragic event?", "correct_answer": "Death of Ayrton Senna (San Marino)", "incorrect_answers": ["The Showdown (Australia)", "Verstappen on Fire (Germany)", "Schumacher&#039;s Ban (Britain)"] }, { "category": "Sports", "type": "boolean", "difficulty": "easy", "question": "Peyton Manning retired after winning Super Bowl XLIX.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "What is the highest belt you can get in Taekwondo?", "correct_answer": "Black", "incorrect_answers": ["White", "Red", "Green"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?", "correct_answer": "August 21", "incorrect_answers": ["August 23", "August 19", "August 17"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Which country will host the 2020 Summer Olympics?", "correct_answer": "Japan", "incorrect_answers": ["China", "Australia", "Germany"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Which country is hosting the 2018 FIFA World Cup?", "correct_answer": "Russia", "incorrect_answers": ["Germany", "United States", "Saudi Arabia"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which country is hosting the 2022 FIFA World Cup?", "correct_answer": "Qatar", "incorrect_answers": ["Uganda", "Vietnam", "Bolivia"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Who won the 2015 Formula 1 World Championship?", "correct_answer": "Lewis Hamilton", "incorrect_answers": ["Nico Rosberg", "Sebastian Vettel", "Jenson Button"] }, { "category": "Sports", "type": "boolean", "difficulty": "medium", "question": "Skateboarding will be included in the 2020 Summer Olympics in Tokyo.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Sports", "type": "boolean", "difficulty": "medium", "question": "Tennis was once known as Racquetball.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Which driver has been the Formula 1 world champion for a record 7 times?", "correct_answer": "Michael Schumacher", "incorrect_answers": ["Ayrton Senna", "Fernando Alonso", "Jim Clark"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?", "correct_answer": "7 - 1", "incorrect_answers": ["0 - 1", "3 - 4", "16 - 0"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which team was the 2015-2016 NBA Champions?", "correct_answer": "Cleveland Cavaliers", "incorrect_answers": ["Golden State Warriors", "Toronto Raptors", "Oklahoma City Thunders"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which team was the 2014-2015 NBA Champions?", "correct_answer": "Golden State Warriors", "incorrect_answers": ["Cleveland Cavaliers", "Houston Rockets", "Atlanta Hawks"] }, { "category": "Sports", "type": "multiple", "difficulty": "hard", "question": "Where was the Games of the XXII Olympiad held?", "correct_answer": "Moscow", "incorrect_answers": ["Barcelona", "Tokyo", "Los Angeles"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Josh Mansour is part of what NRL team?", "correct_answer": "Penrith Panthers", "incorrect_answers": ["Melbourne Storm", "Sydney Roosters", "North Queensland Cowboys"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which car manufacturer won the 2016 24 Hours of Le Mans?", "correct_answer": "Porsche", "incorrect_answers": ["Toyota", "Audi", "Ferrari"] }, { "category": "Sports", "type": "multiple", "difficulty": "hard", "question": "Which car company is the only Japanese company which won the 24 Hours of Le Mans?", "correct_answer": "Mazda", "incorrect_answers": ["Toyota", "Subaru", "Nissan"] }, { "category": "Sports", "type": "boolean", "difficulty": "medium", "question": "The Olympics tennis court is a giant green screen.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Sports", "type": "multiple", "difficulty": "hard", "question": "Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?", "correct_answer": "Pelle", "incorrect_answers": ["Insigne", "Barzagli", "Giaccherini"] }, { "category": "Sports", "type": "multiple", "difficulty": "hard", "question": "Which male player won the gold medal of table tennis singles in 2016 Olympics Games?", "correct_answer": "Ma Long (China)", "incorrect_answers": ["Zhang Jike (China)", "Jun Mizutani (Japan)", "Vladimir Samsonov (Belarus)"] }, { "category": "Sports", "type": "multiple", "difficulty": "hard", "question": "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?", "correct_answer": "DING Ning (China)", "incorrect_answers": ["LI Xiaoxia (China)", "Ai FUKUHARA (Japan)", "Song KIM (North Korea)"] }, { "category": "Sports", "type": "boolean", "difficulty": "easy", "question": "Roger Federer is a famous soccer player.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which soccer team won the Copa Am&eacute;rica 2015 Championship ?", "correct_answer": "Chile", "incorrect_answers": ["Argentina", "Brazil", "Paraguay"] }, { "category": "Sports", "type": "multiple", "difficulty": "medium", "question": "Which soccer team won the Copa Am&eacute;rica Centenario 2016?", "correct_answer": "Chile", "incorrect_answers": ["Argentina", "Brazil", "Colombia"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Which team won 2014 FIFA World Cup in Brazil?", "correct_answer": "Germany", "incorrect_answers": ["Argentina", "Brazil", "Netherlands"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "How many points did LeBron James score in his first NBA game?", "correct_answer": "25", "incorrect_answers": ["19", "69", "41"] }];

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * Created by Hyungwu Pae on 2/10/17.
 */

console.log(results[0].correct_answer);
var TriviaGame = function () {
  function TriviaGame(qnas) {
    classCallCheck(this, TriviaGame);
  }

  createClass(TriviaGame, [{
    key: 'start',
    value: function start() {
      console.log(results[0].correct_answer);
    }
  }]);
  return TriviaGame;
}();

exports.TriviaGame = TriviaGame;

}((this['trivia-game'] = this['trivia-game'] || {})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hc3NldHMvamF2YXNjcmlwdC9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEh5dW5nd3UgUGFlIG9uIDIvMTAvMTcuXG4gKi9cblxuaW1wb3J0IHtyZXN1bHRzfSBmcm9tICcuL3RyaXZpYS5qc29uJztcblxuY29uc29sZS5sb2cocmVzdWx0c1swXS5jb3JyZWN0X2Fuc3dlcik7XG5leHBvcnQgY2xhc3MgVHJpdmlhR2FtZSB7XG5cbiAgY29uc3RydWN0b3IocW5hcykge31cblxuICBzdGFydCgpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRzWzBdLmNvcnJlY3RfYW5zd2VyKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsImNvcnJlY3RfYW5zd2VyIiwiVHJpdmlhR2FtZSIsInFuYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFJQSxBQUVBQSxRQUFRQyxHQUFSLENBQVlDLFFBQVEsQ0FBUixFQUFXQyxjQUF2QjtBQUNBLElBQWFDLFVBQWI7c0JBRWNDLElBQVosRUFBa0I7Ozs7Ozs0QkFFVjtjQUNFSixHQUFSLENBQVlDLFFBQVEsQ0FBUixFQUFXQyxjQUF2Qjs7Ozs7Ozs7In0=
