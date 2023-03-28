class EndDateValidator
{
  constructor() {}

  SetValidationForRange(sheetId)
  {
    var spreadsheet = SpreadsheetApp.openById(sheetId);
    var rangeForValidation = spreadsheet.getRange(Constants.rangeForDateValidation);

    var today = new Date();
    var rule = SpreadsheetApp.newConditionalFormatRule()
        .whenDateBefore(today)
        .setBackground(Constants.validationColor)
        .setRanges([rangeForValidation])
        .build();

    var firstSheet = spreadsheet.getSheets()[0];
    var rules = firstSheet.getConditionalFormatRules();
    
    this.ClearAllConditionalFormating(rules);

    rules.push(rule);
    firstSheet.setConditionalFormatRules(rules);
  }

  /*private*/ ClearAllConditionalFormating(rules)
  {
    while (rules.pop()) {}
  }
}
