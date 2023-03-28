//"=IMPORTRANGE(\"https://docs.google.com/spreadsheets/d/1EEFNUDYR7BVwOwkdLyzFwqvUpiZ-izF3x4f0SOyFH08\"; \"Штатка!E1:E1\")"
//`string text ${expression} string text`
class FormulaBuilder
{
  constructor() {
    this.formula = "";
    this.paramCount = 0;
    this.condition = false;
  }

  AppendFunctionName(name)
  {
    this.formula += name;
    this.formula += "(";
    return this;
  }

  AppendFunctionParameter(param)
  {
    if (this.paramCount > 0)
      this.formula += ";";

    this.formula += param;
    this.paramCount++;
    return this;
  }

  AppendConditionEquality(leftParam, rightParam)
  {
    this.formula += leftParam;
    this.formula += "=";
    this.formula += rightParam;
    this.condition = true;
    return this;
  }

  BuildFormula()
  {
    if (!this.condition)
      this.formula += ")";
    
    var result = this.formula;

    this.formula = "";
    this.paramCount = 0;

    return result;
  }
}
