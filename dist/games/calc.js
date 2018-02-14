#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calc = function calc() {
  var name = (0, _index2.default)();
  var count = 0;
  var rez = 0;
  for (var i = 0; i < 3; i += 1) {
    var a = (0, _index.random)(0, 100);
    var b = (0, _index.random)(0, 100);
    var mv = (0, _index.random)(1, 4);
    switch (mv) {
      case 1:
        console.log('Question: ' + a + ' + ' + b + '!');
        rez = a + b;
        break;
      case 2:
        rez = a - b;
        console.log('Question: ' + a + ' - ' + b + '!');
        break;
      case 3:
        rez = a * b;
        console.log('Question: ' + a + ' * ' + b + '!');
        break;
      default:
    }
    var answer = _readlineSync2.default.question('Your answer: ');

    count = (0, _index.check)(answer, rez, name, count);
  }
  if (count === 3) console.log('Congratulations, ' + name);
};

exports.default = calc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbImNhbGMiLCJuYW1lIiwiY291bnQiLCJyZXoiLCJpIiwiYSIsImIiLCJtdiIsImNvbnNvbGUiLCJsb2ciLCJhbnN3ZXIiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUEsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDakIsTUFBTUMsT0FBTyxzQkFBYjtBQUNBLE1BQUlDLFFBQVEsQ0FBWjtBQUNBLE1BQUlDLE1BQU0sQ0FBVjtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxLQUFLLENBQTVCLEVBQStCO0FBQzdCLFFBQU1DLElBQUksbUJBQU8sQ0FBUCxFQUFVLEdBQVYsQ0FBVjtBQUNBLFFBQU1DLElBQUksbUJBQU8sQ0FBUCxFQUFVLEdBQVYsQ0FBVjtBQUNBLFFBQU1DLEtBQUssbUJBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBWDtBQUNBLFlBQVFBLEVBQVI7QUFDRSxXQUFLLENBQUw7QUFDRUMsZ0JBQVFDLEdBQVIsZ0JBQXlCSixDQUF6QixXQUFnQ0MsQ0FBaEM7QUFDQUgsY0FBTUUsSUFBSUMsQ0FBVjtBQUNBO0FBQ0YsV0FBSyxDQUFMO0FBQ0VILGNBQU1FLElBQUlDLENBQVY7QUFDQUUsZ0JBQVFDLEdBQVIsZ0JBQXlCSixDQUF6QixXQUFnQ0MsQ0FBaEM7QUFDQTtBQUNGLFdBQUssQ0FBTDtBQUNFSCxjQUFNRSxJQUFJQyxDQUFWO0FBQ0FFLGdCQUFRQyxHQUFSLGdCQUF5QkosQ0FBekIsV0FBZ0NDLENBQWhDO0FBQ0E7QUFDRjtBQWJGO0FBZUEsUUFBTUksU0FBUyx1QkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFmOztBQUVBVCxZQUFRLGtCQUFNUSxNQUFOLEVBQWNQLEdBQWQsRUFBbUJGLElBQW5CLEVBQXlCQyxLQUF6QixDQUFSO0FBQ0Q7QUFDRCxNQUFJQSxVQUFVLENBQWQsRUFBaUJNLFFBQVFDLEdBQVIsdUJBQWdDUixJQUFoQztBQUNsQixDQTVCRDs7a0JBOEJlRCxJIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgd2VsY29tU2NyZWVuLCB7IHJhbmRvbSwgY2hlY2sgfSBmcm9tICcuLi9pbmRleCc7XG5cblxuY29uc3QgY2FsYyA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IHdlbGNvbVNjcmVlbigpO1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgcmV6ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICBjb25zdCBhID0gcmFuZG9tKDAsIDEwMCk7XG4gICAgY29uc3QgYiA9IHJhbmRvbSgwLCAxMDApO1xuICAgIGNvbnN0IG12ID0gcmFuZG9tKDEsIDQpO1xuICAgIHN3aXRjaCAobXYpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke2F9ICsgJHtifSFgKTtcbiAgICAgICAgcmV6ID0gYSArIGI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXogPSBhIC0gYjtcbiAgICAgICAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke2F9IC0gJHtifSFgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJleiA9IGEgKiBiO1xuICAgICAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7YX0gKiAke2J9IWApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuXG4gICAgY291bnQgPSBjaGVjayhhbnN3ZXIsIHJleiwgbmFtZSwgY291bnQpO1xuICB9XG4gIGlmIChjb3VudCA9PT0gMykgY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfWApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FsYztcbiJdfQ==