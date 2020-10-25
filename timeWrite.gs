var ss = SpreadsheetApp.getActiveSpreadsheet();
var rank_sheet = ss.getSheetByName("staffList");   

// Defines row starts and ends and triggers the funtion
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
      currentTime.setValue(currentTime.getValue() + 1/(24*6));   
    }     
  }
}

// Time Scripts
// Resets all Timers
function resetTime(){
  resetTimeSS()
  resetTimeSA()
  resetTimeFS()
}

// Resets Server Staffs Timers
function resetTimeSS(){
  var yIndex = 9
  while(yIndex <= 52 && (staffInfoB.getRange(yIndex,4).isBlank() != true)){
    staffInfoB.getRange(yIndex,11).setValue('0.00');
    yIndex++;
  }  
}

// Resets Forum Staffs Timers
function resetTimeFS(){
  var yIndex = 56
  while(yIndex <= 60 && (staffInfoB.getRange(yIndex,4).isBlank() != true)){
    staffInfoB.getRange(yIndex,11).setValue('0.00');
    yIndex++;
  }  
}

// Resets Staff Applicants Timers
function resetTimeSA(){
  var yIndex = 64
  while(yIndex <= 73 && (staffInfoB.getRange(yIndex,4).isBlank() != true)){
    staffInfoB.getRange(yIndex,11).setValue('0.00');
    yIndex++;
  }  
}

