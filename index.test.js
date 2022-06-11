const index = require("./index")
const capitalize = index.capitalize;
const reverse = index.reverse;
const calculator = index.calculator;
const caesarCipher = index.caesarCipher;

describe("String tests", () => {
    it('first letter capital', () => { 
        expect(capitalize("hello")).toBe("Hello");
     });
    
     it('reverse string', () => {
        expect(reverse("car")).toBe("rac");
     });

     it('calculator add', () => {
      expect(calculator.add(1, 1)).toBe(2);
     })

     it('calculator subtract', () => {
      expect(calculator.subtract(2,1)).toBe(1);
     })
     
     it('calculator multiply', () => {
      expect(calculator.multiply(2,2)).toBe(4);
     })

     it('calculator divide', () => {
      expect(calculator.divide(4,2)).toBe(2);
     })

     it('caeser cipher all lowercase', () => {
      expect(caesarCipher("hello", 17)).toBe("yvccf");
     })

     it('caesar cipher all uppercase', () => {
      expect(caesarCipher("HELLO", 17)).toBe("YVCCF");
     })

     it('caesar cipher space', () => {
      expect(caesarCipher("hel lo", 17)).toBe("yvc cf");
     })

})
