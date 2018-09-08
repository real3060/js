function modal() {
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
}
modal();
// export default modal;