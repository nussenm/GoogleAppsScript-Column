//The Main Run Function
function onOpen(e) {
  var ss = SpreadsheetApp.getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  var namePrompt = ui.prompt("Name", "Enter Last Name:", ui.ButtonSet.OK);
  var name = namePrompt.getResponseText();
  var row = findRow(name);
  var colPrompt = ui.prompt("Column", "Enter Column Name:", ui.ButtonSet.OK);
  var col = colPrompt.getResponseText();
  var column = getByName(col, row);
  ui.alert(column);
}

// Find Row
function findRow(name){
var sheet = SpreadsheetApp.openById("1bZEVmod4tOP228HRvy1U2PAdK876yRCn5nyet6uD5N4");
var range = sheet.getRange('B1:B');
var values = range.getValues();
var rowIndex = (function(){
  for (var i = 0; i < values.length; i++){
    if (values[i] == name){
      return i+1;
      }
  }
})();
return rowIndex;
}

//Find Column
function getByName(colName, row) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var col = data[0].indexOf(colName);
  if (col != -1) {
    return data[row-1][col];
  }
}
