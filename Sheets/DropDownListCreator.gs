class DropDownListCreator
{
  constructor() {}

  CreateDropDownForRange(sheetId, dropDownSheetName, dropDownValues, rangeForDropDown)
  {
    var dropDownRule = SpreadsheetApp.newDataValidation().requireValueInRange(SpreadsheetApp.openById(sheetId)
                                                                                            .getSheetByName(dropDownSheetName)
                                                                                            .getRange(dropDownValues)).build();
    var rangeWithDropDownOption = SpreadsheetApp.openById(sheetId).getRange(rangeForDropDown);
    rangeWithDropDownOption.setDataValidation(dropDownRule);
  }
}
