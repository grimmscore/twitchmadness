$(function() {

  // access from data-math="row-totalMatches" (or "above-totalMatches", "below-totalMatches", or "col-totalMatches")
  $.tablesorter.equations['totalMatches'] = function(arry) {
    // a + b
let totalMatches = arry[0] + arry[1] + arry[3] + arry[4]; 
    return totalMatches;
  };

  $.tablesorter.equations['singlesWinrate'] = function(arry) {
    // Винрейт 1 на 1
let singlesTotalWins = arry[0] + arry[1];
let singlesWin = Math.ceil(arry[0] / singlesTotalWins * 100);
if (singlesTotalWins === 0) { singlesWin = 0} 
    return singlesWin + '%';
  };
  
  $.tablesorter.equations['multiWinrate'] = function(arry) {
    // Многосторонний винрейт
let multiTotalWins = arry[3] + arry[4];
let multiWin = Math.ceil(arry[3] / multiTotalWins * 100);
if (multiTotalWins === 0) { multiWin = 0} 
    return multiWin + '%';
  };

  $.tablesorter.equations['allMatchWinrate'] = function(arry) {
    // Общий винрейт
let everyMatchWin = arry[0] + arry[3];
let totalMatchesTwo = arry[0] + arry[1] + arry[3] + arry[4]; 
let everyWin = Math.ceil(everyMatchWin / totalMatchesTwo * 100);
if (totalMatchesTwo === 0) { everyWin = 0} 
    return everyWin + '%';
  };


  $('#players').tablesorter({
    delayInit: true,
    widgets: ['zebra', 'math', 'stickyHeaders'],
    widgetOptions: {
	  stickyHeaders : 'one',
      math_data     : 'math', // data-math attribute
      math_ignore   : [0],
      math_mask     : '',
      math_complete : function($cell, wo, result) {
        return result;
      }
    }
  });

});
