require('math.scss');
// var f = require('js/vendor/square.js');
var f = require('square');

$(document).ready(function(){
  $('.btn').click(function(){
    var num = $('input[type="text"]').val();
    alert(f(num));
  });
});
