#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nod = exports.random = exports.check = undefined;

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

var nod = exports.nod = function nod(n, m) {
  if (m > 0) {
    var k = n % m;
    return nod(m, k);
  } else return Math.abs(n);
};

exports.default = welcomScreen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3ZWxjb21TY3JlZW4iLCJuYW1lIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJhbnN3ZXIiLCJyZXoiLCJjbnQiLCJTdHJpbmciLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJub2QiLCJuIiwibSIsImsiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDekIsTUFBTUMsT0FBTyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBYjtBQUNBQyxVQUFRQyxHQUFSLFlBQXFCSCxJQUFyQjtBQUNBLFNBQU9BLElBQVA7QUFDRCxDQUpEOztBQU1PLElBQU1JLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWNOLElBQWQsRUFBb0JPLEdBQXBCLEVBQTRCO0FBQy9DLE1BQUlGLFdBQVdHLE9BQU9GLEdBQVAsQ0FBZixFQUE0QjtBQUMxQkosWUFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQUksV0FBTyxDQUFQO0FBQ0QsR0FIRCxNQUdPTCxRQUFRQyxHQUFSLFFBQWdCRSxNQUFoQixvREFBbUVDLEdBQW5FLDhCQUE2Rk4sSUFBN0Y7QUFDUCxTQUFPTyxHQUFQO0FBQ0QsQ0FOTTs7QUFRQSxJQUFNRSwwQkFBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWNDLEtBQUtDLEtBQUwsQ0FBWUQsS0FBS0gsTUFBTCxNQUFpQkUsTUFBTUQsR0FBdkIsQ0FBRCxHQUFnQ0EsR0FBM0MsQ0FBZDtBQUFBLENBQWY7O0FBRUEsSUFBTUksb0JBQU0sU0FBTkEsR0FBTSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMzQixNQUFJQSxJQUFJLENBQVIsRUFBVztBQUNULFFBQU1DLElBQUlGLElBQUlDLENBQWQ7QUFDQSxXQUFPRixJQUFJRSxDQUFKLEVBQU9DLENBQVAsQ0FBUDtBQUNELEdBSEQsTUFHTyxPQUFPTCxLQUFLTSxHQUFMLENBQVNILENBQVQsQ0FBUDtBQUNSLENBTE07O2tCQVFRaEIsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3Qgd2VsY29tU2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbyAke25hbWV9IWApO1xuICByZXR1cm4gbmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVjayA9IChhbnN3ZXIsIHJleiwgbmFtZSwgY250KSA9PiB7XG4gIGlmIChhbnN3ZXIgPT09IFN0cmluZyhyZXopKSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgY250ICs9IDE7XG4gIH0gZWxzZSBjb25zb2xlLmxvZyhgJyR7YW5zd2VyfScgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyR7cmV6fSdcXG5MZXQncyB0cnkgYWdhaW4sICR7bmFtZX1gKTtcbiAgcmV0dXJuIGNudDtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW4pO1xuXG5leHBvcnQgY29uc3Qgbm9kID0gKG4sIG0pID0+IHtcbiAgaWYgKG0gPiAwKSB7XG4gICAgY29uc3QgayA9IG4gJSBtO1xuICAgIHJldHVybiBub2QobSwgayk7XG4gIH0gZWxzZSByZXR1cm4gTWF0aC5hYnMobik7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdlbGNvbVNjcmVlbjtcbiJdfQ==