class RangeImporter
{
  constructor(spreadSheetId, splatoonCode)
  {
    this.splatoonCode = splatoonCode;
    this.spreadSheetId = spreadSheetId;
  }

  ImportMainInfo()
  {
    this.ImportPib();
    this.ImportInfoBeforePib();
    this.ImportInfoAfterPib();
  }

  /*private*/ ImportPib()
  {
    this.ImportInfoFromRangeIntoCell(Constants.rangeWithPidInfo,Constants.mainInfoPibCoordinates);
  }

  /*private*/ ImportInfoBeforePib()
  {
    this.ImportInfoFromRangeIntoCell(Constants.rangeBeforePibInfo,Constants.infoBeforePibCoordinates);
  }

  /*private*/ ImportInfoAfterPib()
  {
    this.ImportInfoFromRangeIntoCell(Constants.rangeAfterPibInfo,Constants.infoAfterPibCoordinates);
  }

  /*private*/ ImportInfoFromRangeIntoCell(fromRange, intoCell)
  {
      var templateSheet = SpreadsheetApp.openById(this.spreadSheetId);
      var pibListRange = templateSheet.getRange(intoCell);
      
      var formulaImportPibBuilder = this.BuildImportFormula(fromRange);
      var formulaImportDivisionCodeBuilder = this.BuildImportFormula(Constants.rangeWithDivisionCodeInfo);
      var formulaFilterCriteriaBuilder = new FormulaBuilder().AppendFunctionName("LEFT")
                                                        .AppendFunctionParameter(formulaImportDivisionCodeBuilder)
                                                        .AppendFunctionParameter(Constants.significantDivisionCodeLength.toString());

      var formulaFilterCriteriaEqualityBuilder = new FormulaBuilder().AppendConditionEquality(formulaFilterCriteriaBuilder.BuildFormula(),
                                                                                              `\"${this.splatoonCode}\"`);

      var formulaFilterSplatoon = new FormulaBuilder().AppendFunctionName("FILTER")
                                            .AppendFunctionParameter(formulaImportPibBuilder)
                                            .AppendFunctionParameter(formulaFilterCriteriaEqualityBuilder.BuildFormula())
                                            .BuildFormula();

      pibListRange.setFormula(formulaFilterSplatoon);
  }

  /*private*/ BuildImportFormula(range)
  {
    return new FormulaBuilder().AppendFunctionName("IMPORTRANGE")
                              .AppendFunctionParameter(`\"https://docs.google.com/spreadsheets/d/${Constants.payrollId}\"`)
                              .AppendFunctionParameter(`\"${Constants.payrollMainListName}!${range}\"`)
                              .BuildFormula();
  }
}
