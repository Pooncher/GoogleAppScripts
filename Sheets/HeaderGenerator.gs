class HeaderGenerator{
    constructor(spreadSheetId)
    {
      this.spreadSheetId = spreadSheetId;
    }
  
    GenerateHeaders()
    {
      var templateSheet = SpreadsheetApp.openById(this.spreadSheetId);
      templateSheet.setFrozenColumns(1);

      var pibColumnHeader = templateSheet.getRange(Constants.pibCoordinates);

      var formulaImportPib = this.BuildImportFormula(Constants.rangeWithPidHeader);
      pibColumnHeader.setFormula(formulaImportPib);

      var customColumnHeaders = templateSheet.getRange(Constants.customColumnHeadersCoordinates);
      customColumnHeaders.setValues(Constants.customHeaders);

      var additionalInfoColumnHeaders = templateSheet.getRange(Constants.beforePIBHeadersCoordinates);
      var formulaImportBeforePib = this.BuildImportFormula(Constants.rangeBeforePibHeader);
      additionalInfoColumnHeaders.setFormula(formulaImportBeforePib);

      additionalInfoColumnHeaders = templateSheet.getRange(Constants.afterPIBHeadersCoordinates);
      var formulaImportAfterPib = this.BuildImportFormula(Constants.rangeAfterPibHeader);
      additionalInfoColumnHeaders.setFormula(formulaImportAfterPib);
    }

    /*private*/ BuildImportFormula(range)
    {
      return new FormulaBuilder().AppendFunctionName("IMPORTRANGE")
                                .AppendFunctionParameter(`\"https://docs.google.com/spreadsheets/d/${Constants.payrollId}\"`)
                                .AppendFunctionParameter(`\"${Constants.payrollMainListName}!${range}\"`)
                                .BuildFormula();
    }
}
