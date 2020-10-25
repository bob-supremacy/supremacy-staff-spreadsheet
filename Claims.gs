// Logs Current Claims To Claim Sheet
function claimLog(){
  // Defines x coordinate to start set value / Number of team members / y coordinate of get value
  const TEAMS = {
    7: {CELL: "M19", NAMESTART:  28}, // Yoshi
    10: {CELL: "M21", NAMESTART: 50}, // Ross
    //13: {CELL: "M18", NAMESTART: 17}, // swipz
    13: {CELL: "M20", NAMESTART: 39}, // Donny
    16: {CELL: "M17", NAMESTART: 6} // Bill
  }
  var currentWeek = staffClaimInfo.getRange("M23").getValue();
  var activeRow = 6 + 9 * (currentWeek - 1);
  var teamCounter = 7;
  var array = [];

  for(teamCounter in TEAMS){
    var result = new Array();
    var newValues = new Array();
    var newValues2 = new Array();
    // Get Names of Staff in Team and transform to 1D array
    var values = staffClaimInfo.getRange(TEAMS[teamCounter].NAMESTART,3,8,1).getValues();
    for(var i = 0; i < values.length; i++)
    {
      newValues = newValues.concat(values[i]);
    }
    // Get claims of Staff in Team and transform to 1D array
    var values2 = staffClaimInfo.getRange(TEAMS[teamCounter].NAMESTART,6,8,1).getValues();
    for(var i = 0; i < values2.length; i++)
    {
      newValues2 = newValues2.concat(values2[i]);
    }
    // Merges both 1D arrays and pushes to new Array
    result = newValues.map((item,index) => {return [item,newValues2[index]]})
    array.push(result)
    }
    // End result is a 3D array. First layer being teams, then colums, then rows. eg. [[[bob.,100],[bill, 120]],[[ros.,100],[tox, 120]]]


  var teamCounter = 4;
   for(var i = 0; i < 4; i++)
  { teamCounter += 3;
    for(var j = 0; j < 8; j++)
    {
      for(var f = 0; f < 2; f++)
      {
        // sets values to Claim Sheet
        sheetClaims.getRange(activeRow + j,teamCounter-2+(f*2)).setValue(array[i][j][f])
      }
    } 
  }
}

// Force Refreshes the importHTML function by updating its table reference between 0 and 1
function claimListRefresh(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var claimList = ss.getSheetByName('claimList')
  var range = claimList.getRange('E1')

  var value = range.getValue()
  Logger.log(value)
  if (value == '0'){
    number = "1";
  }else{ 
    number = '0';
    }
   range.setValue(number);
   forceRefreshSheetFormulas()
  }


// This stores all forumals in the range, clears them, then puts them back. It refreshes all of the queries
function forceRefreshSheetFormulas() {
  var range = staffClaimInfo.getRange('D6:F57');
  var numCols = range.getNumColumns();
  var numRows = range.getNumRows();
  var rowOffset = range.getRow();
  var colOffset = range.getColumn();
  var originalFormulas = range.getFormulas();
  
  for (row = 0; row < numRows ; row++){
    for(col = 0; col < numCols; col++){
      if (originalFormulas[row][col] != "") {
        staffClaimInfo.getRange(row+rowOffset, col+colOffset).setFormula("");
      }
    };
  };
  SpreadsheetApp.flush();
  for (row = 0; row < numRows ; row++){
    for(col = 0; col < numCols; col++){
      if (originalFormulas[row][col] != "") {
        staffClaimInfo.getRange(row+rowOffset, col+colOffset).setFormula(originalFormulas[row][col]);
      }
    };
  };
  SpreadsheetApp.flush();
};