window.addEventListener("DOMContentLoaded", function() {
    let closeButton= document.querySelectorAll(".popup_close");
let modal = document.querySelector('.popup_engineer');
let popup = document.querySelector('.popup');
let page = document.getElementsByTagName('html')[0];


// вызов кнопкой модалки
let callButton = document.querySelector('.header_btn');
callButton.addEventListener('click', function() {
    
    modal.style.display = "block"; 
    page.style.overflow = 'hidden'
    

});


//кнопка заказать звонок
let modalCallback = function () {
    let callbackButton = document.querySelectorAll('.phone_link');
    for (let i=0; i < callbackButton.length; i++){
        callbackButton[i].addEventListener('click', function(){
            popup.style.display = 'block';
            page.style.overflow = 'hidden'
            // document.body.style.position = 'fixed';
            
        })
    }
    
}
modalCallback();

// крестик
var close = function() {
        for(let i = 0; i< closeButton.length; i++) {
            closeButton[i].addEventListener('click', function() {
                modal.style.display = 'none';
                popup.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.position = '';
                page.style.overflow = ''
                            
        })
    }
}
close();
})
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

//tab
function tab() {
    var tabContainer = document.getElementsByClassName('glazing_slider')[0];
    var tab = document.getElementsByClassName('glazing_block');
    var glazing = document.getElementsByClassName('glazing')[0];
    var tabs = glazing.getElementsByClassName('row');

    function hideTabContent(a) {
        for (var i = a; i<tabs.length; i++){
            tabs[i].classList.remove('show');
            tabs[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if(tabs[b].classList.contains('hide')) {
            hideTabContent(0);
            tabs[b].classList.remove('hide');
            tabs[b].classList.add('show');
        }
    }
    tabContainer.addEventListener('click', function(event) {
        var target = event.target;
        for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
            for (var i = 0; i < tab.length; i++){
                if(target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    }
    })

}
tab();