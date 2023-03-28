class Constants
{
  constructor() {
      if (this instanceof Constants) {
        throw Error('A static class cannot be instantiated.');
    }
  }
}

Constants.payrollId = "1EEFNUDYR7BVwOwkdLyzFwqvUpiZ-izF3x4f0SOyFH08";
Constants.payrollMainListName = "Штатка";

Constants.veryFirstCell = "A1";
Constants.firstColumnRange = "A:A";
Constants.wholeColumnRange = "A:I";
Constants.jobTitleColumnRange = "G:G";
Constants.payrollImportSheetName = "payrollImport";

Constants.customHeaders = [[ "Причина відсутності", "Місце знаходження", "Дата вибуття", "Запланована дата прибуття", "Примітки" ]];

Constants.pibCoordinates = "A1";
Constants.beforePIBHeadersCoordinates = "G1";
Constants.afterPIBHeadersCoordinates = "I1";
Constants.mainInfoPibCoordinates = "A2";
Constants.infoBeforePibCoordinates = "G2";
Constants.infoAfterPibCoordinates = "I2";

Constants.rangeWithPidHeader = "E1:E1";
Constants.rangeBeforePibHeader = "C1:D1";
Constants.rangeAfterPibHeader = "F1:K1";
Constants.customColumnHeadersCoordinates = "B1:F1";

Constants.rangeWithPidInfo = "E:E";
Constants.rangeWithDivisionCodeInfo = "B:B";
Constants.rangeBeforePibInfo = "C:D";
Constants.rangeAfterPibInfo = "F:K";

Constants.significantDivisionCodeLength = 6;

Constants.militaryCommunicationSplatoonCode = "1.0.1.";

Constants.dropDownValues = "A1:A6";
Constants.dropDownSheetName = "dropDownCriteria";
Constants.externalDependenciesTableId = "1eW_OPpzlel3BWHsoHqc9L5AeHIDexYxtsbV261WyPfM";

Constants.rangeForDropDown = "B2:B1000";

Constants.protectedRangeHeader = "A1:N1";
Constants.protectedRangePibInfo = "A2:A";
Constants.protectedRangeAdditionalInfo = "G2:N";

Constants.rangeForDateValidation = "E2:E1000";
Constants.validationColor = "#FF0000";

Constants.offsetAfterPibLastRow = 2;
Constants.headerRangeLength = 1;
Constants.secondedDescription = "Прикомандованні:";
