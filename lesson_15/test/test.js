function sayName(name) {
    let message = "my name is" + name
    return message
}

let arr = [5,3,2,5,6,2,3,2,5,3,2,-2];
let result = arr.reduce(function(sum, elem) {
    return sum + elem;
})


let assert = require('chai').assert

describe("sayName", function() {
    it("Получаем фразу с новым именем", function() {
        assert.typeOf(sayName("sergey"), 'string')
    })
})
describe("arr", function() {
    it("Получаем сумму чисел массива", function() {
        assert.equal(result, 36)
    })
})