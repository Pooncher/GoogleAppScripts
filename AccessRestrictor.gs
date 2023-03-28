class AccessRestrictor
{
  constructor() {}

  RestrictAccessToRange(sheetId)
  {
    var sheet = SpreadsheetApp.openById(sheetId);

    this.RemoveAllRestrictions(sheet);

    this.RestrictAccessToHeader(sheet);

    var range = sheet.getRange("A:A");
    var lastRowIndex = getFirstEmptyRow(range) - 1;

    this.RestrictAccessToPib(lastRowIndex, sheet);
    this.RestrictAccessToAdditionalInfo(lastRowIndex, sheet);
  }

  /*private*/ RestrictAccessToHeader(sheet)
  {
    this.RestrictAccessToRangeImpl(Constants.protectedRangeHeader, "Restriction to headers", sheet);
  }

  /*private*/ RestrictAccessToPib(lastRowIndex, sheet)
  {
    var protectedRange = Constants.protectedRangePibInfo + lastRowIndex.toString();
    this.RestrictAccessToRangeImpl(protectedRange, "Restriction to Pib", sheet);
  }

  /*private*/ RestrictAccessToAdditionalInfo(lastRowIndex, sheet)
  {
    var protectedRange = Constants.protectedRangeAdditionalInfo + lastRowIndex.toString();
    this.RestrictAccessToRangeImpl(protectedRange, "Restriction to additional info", sheet);
  }

  /*private*/ RestrictAccessToRangeImpl(rangeCoordinates, ruleName, sheet)
  {
    var range = sheet.getRange(rangeCoordinates);
    var protection = range.protect().setDescription(ruleName);

    var me = Session.getEffectiveUser();
    protection.addEditor(me);
    protection.removeEditors(protection.getEditors());
    if (protection.canDomainEdit()) {
      protection.setDomainEdit(false);
    }
  }

  /*private*/ RemoveAllRestrictions(sheet)
  {
    var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
    for (var i = 0; i < protections.length; i++) {
      var protection = protections[i];
      if (protection.canEdit()) {
        protection.remove();
      }
    }
  }
}
