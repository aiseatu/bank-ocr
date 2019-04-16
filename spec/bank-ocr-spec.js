const ocr = require("../bank-ocr");

describe("convert", function(){

  it("should convert text", function() {
    
    expect(ocr.convertText(
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_|| || || || || |\n" +
      "  ||_  _|  ||_||_||_||_||_|\n" +
      "                           "
    )).toBe("123400000");
  });



});
