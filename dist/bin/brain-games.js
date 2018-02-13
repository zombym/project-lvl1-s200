#!/usr/bin/env node
'use strict';

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Welcome to the brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
var name = _readlineSync2.default.question('May I have your name? ');
console.log('Hello ' + name + '!');
var count = 0;
for (var i = 0; i < 3; i += 1) {
  var a = Math.floor(Math.random() * 100);
  var b = '';
  console.log('Question: ' + a + '!');
  var answer = _readlineSync2.default.question('Your answer: ');
  a % 2 === 0 ? b = 'yes' : b = 'no';
  if (answer === b) {
    console.log('Correct!');
    count += 1;
  } else console.log('\'' + answer + '\' is wrong answer ;(. Correct answer was \'' + b + '\'\nLet\'s try again, ' + name);
}
if (count === 3) console.log('Congratulations, ' + name);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZ2FtZXMuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm5hbWUiLCJxdWVzdGlvbiIsImNvdW50IiwiaSIsImEiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJiIiwiYW5zd2VyIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7QUFFQUEsUUFBUUMsR0FBUixDQUFZLG9GQUFaO0FBQ0EsSUFBTUMsT0FBTyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBYjtBQUNBSCxRQUFRQyxHQUFSLFlBQXFCQyxJQUFyQjtBQUNBLElBQUlFLFFBQVEsQ0FBWjtBQUNBLEtBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxLQUFLLENBQTVCLEVBQStCO0FBQzdCLE1BQU1DLElBQUlDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixHQUEzQixDQUFWO0FBQ0EsTUFBSUMsSUFBSSxFQUFSO0FBQ0FWLFVBQVFDLEdBQVIsZ0JBQXlCSyxDQUF6QjtBQUNBLE1BQU1LLFNBQVMsdUJBQWFSLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjtBQUNDRyxNQUFJLENBQUosS0FBVSxDQUFYLEdBQWdCSSxJQUFJLEtBQXBCLEdBQTRCQSxJQUFJLElBQWhDO0FBQ0EsTUFBSUMsV0FBV0QsQ0FBZixFQUFrQjtBQUNoQlYsWUFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQUcsYUFBUyxDQUFUO0FBQ0QsR0FIRCxNQUdPSixRQUFRQyxHQUFSLFFBQWdCVSxNQUFoQixvREFBbUVELENBQW5FLDhCQUEyRlIsSUFBM0Y7QUFDUjtBQUNELElBQUlFLFVBQVUsQ0FBZCxFQUFpQkosUUFBUUMsR0FBUix1QkFBZ0NDLElBQWhDIiwiZmlsZSI6ImJyYWluLWdhbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgYnJhaW4gR2FtZXMhIFxcbkFuc3dlciBcInllc1wiIGlmIG51bWJlciBldmVuIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLlxcbicpO1xuY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuY29uc29sZS5sb2coYEhlbGxvICR7bmFtZX0hYCk7XG5sZXQgY291bnQgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgY29uc3QgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gIGxldCBiID0gJyc7XG4gIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHthfSFgKTtcbiAgY29uc3QgYW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG4gIChhICUgMiA9PT0gMCkgPyBiID0gJ3llcycgOiBiID0gJ25vJztcbiAgaWYgKGFuc3dlciA9PT0gYikge1xuICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIGNvdW50ICs9IDE7XG4gIH0gZWxzZSBjb25zb2xlLmxvZyhgJyR7YW5zd2VyfScgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyR7Yn0nXFxuTGV0J3MgdHJ5IGFnYWluLCAke25hbWV9YCk7XG59XG5pZiAoY291bnQgPT09IDMpIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX1gKTtcbiJdfQ==