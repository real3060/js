// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

let assert = require('chai').assert

describe("sum", function() {
    it("Получаем тип данных строка", function() {
        assert.typeOf(sum(2,15), 'boolean')
    })
})

// Переменная num должна быть равна 5. Проверить на соответствие.

let array = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = array[1][1];


describe("array", function() {
	it("Проверка что массив равен 5", function() {
		assert.equal(num, 5)
	})
})

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

describe("startArr", function() {
    it("Получаем результат функции startarr", function() {
        assert.typeOf(each(arr, myFunc), 'array')
    });
    it('Проверяем что длинна равна 5', function() {
        assert.lengthOf(each(arr, myFunc), 5)
    })

})