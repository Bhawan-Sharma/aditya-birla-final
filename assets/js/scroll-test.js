    var shownDefault = 7
var numShown = shownDefault; // Initial rows shown & index
var $table = $('.tbls').find('tbody');  // tbody containing all the rows
var numRows = $table.find('tr').length; // Total # rows

var moretext = "Show more";
var lesstext = "Show less";

$(document).ready(function () {
    $table.find('tr:gt(' + (numShown - 1) + ')').hide()                      
    $('#btns').click(function() {
        if (numShown === numRows) {
          // since we show all rows node, hiding some
        	numShown = shownDefault;
          $table.find('tr:gt(' + (numShown - 1) + ')').hide()
          $('#btns').text(moretext)                              
        } else {
        	numShown = numRows;
          $('#btns').text(lesstext)                    
        }        
        $table.find('tr:lt(' + numShown + ')').show();
    });        
});