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
})
