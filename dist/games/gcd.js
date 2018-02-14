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

var gcd = function gcd() {
  var name = (0, _index2.default)();
  var count = 0;
  for (var i = 0; i < 3; i += 1) {
    var a = (0, _index.random)(0, 100);
    var b = (0, _index.random)(0, 100);
    console.log('Question: ' + a + ' ' + b + '!');
    var answer = _readlineSync2.default.question('Your answer: ');
    var rez = (0, _index.nod)(a, b);
    count = (0, _index.check)(answer, rez, name, count);
  }
  if (count === 3) console.log('Congratulations, ' + name);
};

exports.default = gcd;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QuanMiXSwibmFtZXMiOlsiZ2NkIiwibmFtZSIsImNvdW50IiwiaSIsImEiLCJiIiwiY29uc29sZSIsImxvZyIsImFuc3dlciIsInF1ZXN0aW9uIiwicmV6Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixNQUFNQyxPQUFPLHNCQUFiO0FBQ0EsTUFBSUMsUUFBUSxDQUFaO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEtBQUssQ0FBNUIsRUFBK0I7QUFDN0IsUUFBTUMsSUFBSSxtQkFBTyxDQUFQLEVBQVUsR0FBVixDQUFWO0FBQ0EsUUFBTUMsSUFBSSxtQkFBTyxDQUFQLEVBQVUsR0FBVixDQUFWO0FBQ0FDLFlBQVFDLEdBQVIsZ0JBQXlCSCxDQUF6QixTQUE4QkMsQ0FBOUI7QUFDQSxRQUFNRyxTQUFTLHVCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQWY7QUFDQSxRQUFNQyxNQUFNLGdCQUFJTixDQUFKLEVBQU9DLENBQVAsQ0FBWjtBQUNBSCxZQUFRLGtCQUFNTSxNQUFOLEVBQWNFLEdBQWQsRUFBbUJULElBQW5CLEVBQXlCQyxLQUF6QixDQUFSO0FBQ0Q7QUFDRCxNQUFJQSxVQUFVLENBQWQsRUFBaUJJLFFBQVFDLEdBQVIsdUJBQWdDTixJQUFoQztBQUNsQixDQVpEOztrQkFjZUQsRyIsImZpbGUiOiJnY2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgd2VsY29tU2NyZWVuLCB7IHJhbmRvbSwgY2hlY2ssIG5vZCB9IGZyb20gJy4uL2luZGV4JztcblxuY29uc3QgZ2NkID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gd2VsY29tU2NyZWVuKCk7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgY29uc3QgYSA9IHJhbmRvbSgwLCAxMDApO1xuICAgIGNvbnN0IGIgPSByYW5kb20oMCwgMTAwKTtcbiAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7YX0gJHtifSFgKTtcbiAgICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgICBjb25zdCByZXogPSBub2QoYSwgYik7XG4gICAgY291bnQgPSBjaGVjayhhbnN3ZXIsIHJleiwgbmFtZSwgY291bnQpO1xuICB9XG4gIGlmIChjb3VudCA9PT0gMykgY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfWApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2NkO1xuIl19