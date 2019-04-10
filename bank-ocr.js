const convertText = function(text){
  let entries = [];
  let lines = text.split("\n");
  for(let entryNum = 0; entryNum < lines.length; entryNum = entryNum + 4){
    let entry = "";
    for(let lineNum = 0; lineNum < 4; lineNum ++){
      entry += lines[entryNum + lineNum] + "\n";
    }
    entries.push(entry);
  }
  console.log(entries);
  return entries.map((entry) => {
    let lines = entry.split("\n");
    let chars = [];
    for(let charNum = 0; charNum < 27; charNum = charNum + 3){
      let char = "";
      for(let lineIndex = 0; lineIndex < 3; lineIndex ++){
        char = char + lines[lineIndex].substr(charNum, 3);
      }
      chars.push(char);
    }
    console.log(chars);
    const numbers = [
      [" _ ",
       "| |",
       "|_|"],
      ["   ",
       "  |",
       "  |"]
    ]
    let digits = [];
    chars.map((char) => {
      //console.log(char);

      //console.log(numbers[0].join(""));
      //console.log(numbers[1].join(""));
      if(char === numbers[0].join("")){
        digits.push(0);
      } else if(char === numbers[1].join("")){
        digits.push(1);
      }
    });
    //console.log(digits);
    return digits.join("");
  });

}

module.exports = {convertText}
