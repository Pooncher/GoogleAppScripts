function getFirstEmptyRow(range)
{
  var values = range.getValues();
  var i = 0;
  while ( values[i] && values[i][0] != "" ) {
    i++;
  }
  return (i+1);
}

function columnToLetter(column)
{
  //if upper case
  //column += 32;
  var temp, letter = '';
  while (column > 0)
  {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}

function letterToColumn(letter)
{
  var column = 0, length = letter.length;
  for (var i = 0; i < length; i++)
  {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
                //if upper case
  return column/*- 32*/;
}
