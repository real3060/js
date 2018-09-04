describe("Таймер", function() {
    it("Возвращает ли функция объект?", function () {
        assert.typeOf(getTimeRemaining(), 'object')
    })

    it("Устанавливаем таймер обратного отсчета", function() {
        assert.typeOf(setClock('timer', deadLine), 'string')
    })
}
)