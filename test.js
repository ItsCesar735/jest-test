test("One euro should be 1.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})
test("One Yen should be 0.8 Pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(2)).toBe(1.6); 
})
test("One Dollar should be 127.9 Yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(5)).toBe(639.5); 
})