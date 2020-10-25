var ss = SpreadsheetApp.getActiveSpreadsheet();
var rank_sheet = ss.getSheetByName("staffList");   

function timeRewrite(){   
  var startRow = 9;
  var endRow = 52;
  timeAdder(startRow, endRow);
  startRow = 56;
  endRow = 60;
  timeAdder(startRow, endRow);
  startRow = 64;
  endRow = 73; 
  timeAdder(startRow, endRow);
}

// Adds Time to Online players
function timeAdder(startRow,endRow){
  for(var counter = startRow; counter <= endRow; counter++){  
    var onlineCheck = rank_sheet.getRange(counter,14).getValue(); 
    if (onlineCheck=="Online"){
      var currentTime = rank_sheet.getRange(counter,11);
      currentTime.setValue(currentTime.getValue()+ 0.166667);   
    }     
  }
}