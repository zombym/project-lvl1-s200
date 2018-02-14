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

var evengame = function evengame() {
  var name = (0, _index2.default)();
  var count = 0;
  for (var i = 0; i < 3; i += 1) {
    var a = (0, _index.random)(0, 100);
    console.log('Question: ' + a + '!');
    var answer = _readlineSync2.default.question('Your answer: ');
    var rez = a % 2 === 0 ? 'yes' : 'no';
    count = (0, _index.check)(answer, rez, name, count);
  }
  if (count === 3) console.log('Congratulations, ' + name);
};

exports.default = evengame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbImV2ZW5nYW1lIiwibmFtZSIsImNvdW50IiwiaSIsImEiLCJjb25zb2xlIiwibG9nIiwiYW5zd2VyIiwicXVlc3Rpb24iLCJyZXoiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLE1BQU1DLE9BQU8sc0JBQWI7QUFDQSxNQUFJQyxRQUFRLENBQVo7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsS0FBSyxDQUE1QixFQUErQjtBQUM3QixRQUFNQyxJQUFJLG1CQUFPLENBQVAsRUFBVSxHQUFWLENBQVY7QUFDQUMsWUFBUUMsR0FBUixnQkFBeUJGLENBQXpCO0FBQ0EsUUFBTUcsU0FBUyx1QkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFmO0FBQ0EsUUFBTUMsTUFBT0wsSUFBSSxDQUFKLEtBQVUsQ0FBWCxHQUFnQixLQUFoQixHQUF3QixJQUFwQztBQUNBRixZQUFRLGtCQUFNSyxNQUFOLEVBQWNFLEdBQWQsRUFBbUJSLElBQW5CLEVBQXlCQyxLQUF6QixDQUFSO0FBQ0Q7QUFDRCxNQUFJQSxVQUFVLENBQWQsRUFBaUJHLFFBQVFDLEdBQVIsdUJBQWdDTCxJQUFoQztBQUNsQixDQVhEOztrQkFhZUQsUSIsImZpbGUiOiJldmVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuaW1wb3J0IHdlbGNvbVNjcmVlbiwgeyByYW5kb20sIGNoZWNrIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBldmVuZ2FtZSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IHdlbGNvbVNjcmVlbigpO1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IGEgPSByYW5kb20oMCwgMTAwKTtcbiAgICBjb25zb2xlLmxvZyhgUXVlc3Rpb246ICR7YX0hYCk7XG4gICAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gICAgY29uc3QgcmV6ID0gKGEgJSAyID09PSAwKSA/ICd5ZXMnIDogJ25vJztcbiAgICBjb3VudCA9IGNoZWNrKGFuc3dlciwgcmV6LCBuYW1lLCBjb3VudCk7XG4gIH1cbiAgaWYgKGNvdW50ID09PSAzKSBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVuZ2FtZTtcbiJdfQ==