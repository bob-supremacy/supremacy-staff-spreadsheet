var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet1 = ss.getSheetByName("playerList");
var sheet2 = ss.getSheetByName("claimList");


function getClaimListArray(){
  var url = "https://ratty.pythonanywhere.com/for_nerd_bob"
  var list = UrlFetchApp.fetch(url).getContentText()
  // Takes string from UrlFetchApp and turns it to an object.
  var arr = eval("[" + list + "]");
  // Get number of values in array and set values to claimList
  var rownum = Object.keys(arr).length;
  sheet2.getRange(1,1,rownum,4).setValues(arr)
}

function getPlayerListArray(){
  var url = "https://ratty.pythonanywhere.com/time"
  var list = UrlFetchApp.fetch(url).getContentText()
  // Takes string from UrlFetchApp and turns it to an object.
  var arr = eval("[" + list + "]");
  // Get number of values in array and set values to claimList
  var rownum = Object.keys(arr).length;
  sheet1.getRange(1,1,120,2).clearContent()
  sheet1.getRange(1,1,rownum,2).setValues(arr)
}
