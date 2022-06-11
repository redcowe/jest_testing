const index = require("./index")
const capitalize = index.capitalize
const reverse = index.reverse

describe("String tests", () => {
    it('first letter capital', () => { 
        expect(capitalize("hello")).toBe("Hello");
     });
    
     it('reverse string', () => {
        expect(reverse("car")).toBe("rac");
     });
})
