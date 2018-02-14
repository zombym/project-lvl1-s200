#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var evengame = function evengame() {
  console.log('Welcome to the brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
  var name = _readlineSync2.default.question('May I have your name? ');
  console.log('Hello ' + name + '!');
  var count = 0;
  for (var i = 0; i < 3; i += 1) {
    var a = Math.floor(Math.random() * 100);
    console.log('Question: ' + a + '!');
    var answer = _readlineSync2.default.question('Your answer: ');
    var b = a % 2 === 0 ? 'yes' : 'no';
    if (answer === b) {
      console.log('Correct!');
      count += 1;
    } else console.log('\'' + answer + '\' is wrong answer ;(. Correct answer was \'' + b + '\'\nLet\'s try again, ' + name);
  }
  if (count === 3) console.log('Congratulations, ' + name);
};

exports.default = evengame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJldmVuZ2FtZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicXVlc3Rpb24iLCJjb3VudCIsImkiLCJhIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYW5zd2VyIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCQyxVQUFRQyxHQUFSLENBQVksb0ZBQVo7QUFDQSxNQUFNQyxPQUFPLHVCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFiO0FBQ0FILFVBQVFDLEdBQVIsWUFBcUJDLElBQXJCO0FBQ0EsTUFBSUUsUUFBUSxDQUFaO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0IsUUFBTUMsSUFBSUMsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEdBQTNCLENBQVY7QUFDQVQsWUFBUUMsR0FBUixnQkFBeUJLLENBQXpCO0FBQ0EsUUFBTUksU0FBUyx1QkFBYVAsUUFBYixDQUFzQixlQUF0QixDQUFmO0FBQ0EsUUFBTVEsSUFBS0wsSUFBSSxDQUFKLEtBQVUsQ0FBWCxHQUFnQixLQUFoQixHQUF3QixJQUFsQztBQUNBLFFBQUlJLFdBQVdDLENBQWYsRUFBa0I7QUFDaEJYLGNBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FHLGVBQVMsQ0FBVDtBQUNELEtBSEQsTUFHT0osUUFBUUMsR0FBUixRQUFnQlMsTUFBaEIsb0RBQW1FQyxDQUFuRSw4QkFBMkZULElBQTNGO0FBQ1I7QUFDRCxNQUFJRSxVQUFVLENBQWQsRUFBaUJKLFFBQVFDLEdBQVIsdUJBQWdDQyxJQUFoQztBQUNsQixDQWhCRDs7a0JBa0JlSCxRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zdCBldmVuZ2FtZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIGJyYWluIEdhbWVzISBcXG5BbnN3ZXIgXCJ5ZXNcIiBpZiBudW1iZXIgZXZlbiBvdGhlcndpc2UgYW5zd2VyIFwibm9cIi5cXG4nKTtcbiAgY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8gJHtuYW1lfSFgKTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICBjb25zdCBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7YX0hYCk7XG4gICAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gICAgY29uc3QgYiA9IChhICUgMiA9PT0gMCkgPyAneWVzJyA6ICdubyc7XG4gICAgaWYgKGFuc3dlciA9PT0gYikge1xuICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH0gZWxzZSBjb25zb2xlLmxvZyhgJyR7YW5zd2VyfScgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyR7Yn0nXFxuTGV0J3MgdHJ5IGFnYWluLCAke25hbWV9YCk7XG4gIH1cbiAgaWYgKGNvdW50ID09PSAzKSBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVuZ2FtZTtcbiJdfQ==