'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            
        }else{
            inputUsd.value = " что то пошло не так";
        }
    });
});

inputUsd.addEventListener('input', () => {
    const request2 = new XMLHttpRequest();
    request2.open('GET', 'js/current.json');
    request2.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request2.send();

    request2.addEventListener('load', () => {
        if(request2.readyState === 4 && request2.status === 200){
            console.log(request2.response);
            const data2 = JSON.parse(request2.response);
            inputRub.value = ( (+inputUsd.value) * (data2.current.usd)).toFixed(2);

        } else {
            inputRub.value = " что то пошло не так";
        }
    });
});
