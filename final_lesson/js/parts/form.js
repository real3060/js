// functon ajax
function ajax() {
    // объявление переменной message
    var message = new Object();
    message.loading = "Загрузка данных...";
    message.success = "С вами свяжутся!";
    message.error = "Ошибка отправки данных!";
    // поиск инпута на странице
    var input = document.getElementsByTagName('input');
    // вывод статуса на страницу в div
    var statusMessage = document.createElement("div");
    statusMessage.classList.add('status');
    // создание формы
    var form = document.getElementsByTagName('form');
    for(let i = 0; i< form.length; i++) {
        form[i];
        
        //добавление обработчика событий на форму
        form[i].addEventListener("submit", function(event) {
            event.preventDefault();
            this.appendChild(statusMessage); //добавление в форму статуса
            //AJAX
            var request = new XMLHttpRequest();
            request.open("POST", 'server.php');
            request.setRequestHeader("Content-type", "Application/x-www-form-urlencoded");
            var data = new FormData(form[i]);
            request.send(data);
    
            //проверка статуса сообщения
            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    statusMessage.textContent = message.loading;
                } else if (request.readyState === 4){
                    if(request.status === 200 && request.status < 300){
                        statusMessage.textContent = message.success;
                    } else {
                        //тут можно показать анимацию или текст
                        statusMessage.textContent = message.failure;
                    }
                }
            }
            for ( var i = 0; i<input.length; i++) {
                input[i].value = ''; //очистка инпута
            }
    
        })
        var formNumber = form[i].getElementsByTagName('input')[1];
        // console.log(formNumber);

        formNumber.onkeyup = function() {
            return this.value = this.value.replace(/[\D]/g, '')
        }
    };

    


}
ajax();