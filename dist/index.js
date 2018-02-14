#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.check = undefined;

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var welcomScreen = function welcomScreen() {
  var name = _readlineSync2.default.question('May I have your name? ');
  console.log('Hello ' + name + '!');
  return name;
};

var check = exports.check = function check(answer, rez, name, cnt) {
  if (answer === String(rez)) {
    console.log('Correct!');
    cnt += 1;
  } else console.log('\'' + answer + '\' is wrong answer ;(. Correct answer was \'' + rez + '\'\nLet\'s try again, ' + name);
  return cnt;
};

var random = exports.random = function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

exports.default = welcomScreen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWxjb21TY3JlZW4iLCJuYW1lIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJhbnN3ZXIiLCJyZXoiLCJjbnQiLCJTdHJpbmciLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDekIsTUFBTUMsT0FBTyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBYjtBQUNBQyxVQUFRQyxHQUFSLFlBQXFCSCxJQUFyQjtBQUNBLFNBQU9BLElBQVA7QUFDRCxDQUpEOztBQU1PLElBQU1JLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWNOLElBQWQsRUFBb0JPLEdBQXBCLEVBQTRCO0FBQy9DLE1BQUlGLFdBQVdHLE9BQU9GLEdBQVAsQ0FBZixFQUE0QjtBQUMxQkosWUFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQUksV0FBTyxDQUFQO0FBQ0QsR0FIRCxNQUdPTCxRQUFRQyxHQUFSLFFBQWdCRSxNQUFoQixvREFBbUVDLEdBQW5FLDhCQUE2Rk4sSUFBN0Y7QUFDUCxTQUFPTyxHQUFQO0FBQ0QsQ0FOTTs7QUFRQSxJQUFNRSwwQkFBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWNDLEtBQUtDLEtBQUwsQ0FBWUQsS0FBS0gsTUFBTCxNQUFpQkUsTUFBTUQsR0FBdkIsQ0FBRCxHQUFnQ0EsR0FBM0MsQ0FBZDtBQUFBLENBQWY7O2tCQUVRWCxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zdCB3ZWxjb21TY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvICR7bmFtZX0hYCk7XG4gIHJldHVybiBuYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrID0gKGFuc3dlciwgcmV6LCBuYW1lLCBjbnQpID0+IHtcbiAgaWYgKGFuc3dlciA9PT0gU3RyaW5nKHJleikpIHtcbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICBjbnQgKz0gMTtcbiAgfSBlbHNlIGNvbnNvbGUubG9nKGAnJHthbnN3ZXJ9JyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnJHtyZXp9J1xcbkxldCdzIHRyeSBhZ2FpbiwgJHtuYW1lfWApO1xuICByZXR1cm4gY250O1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdlbGNvbVNjcmVlbjtcbiJdfQ==