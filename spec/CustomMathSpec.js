var CustomMath = require("../src/CustomMath");

describe("Sum two numbers 2 and 3", function(){

    let customMath = new CustomMath();
    it('should return 5 when we calculate parameter', function(){
        expect(customMath.sum(2,3)).toBe(5);
    })

})