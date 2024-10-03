
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.input').value = 'Nitra';
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    const city = document.querySelector('.input').value;
    const APIKey = '74e8047dfa82b32c9ff02a39ac0e8858';
    if(city === '') {
        return
    }    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(data => {
        // .then( function (response) { 
        //     return response.json() 
        // })
        // .then( function(data) {
        //     console.log(data.name);
        // })
        const cityName = document.querySelector('.city');
        const temp = document.querySelector('.temp');
        const descr = document.querySelector('.descr');
        const windSpeed = document.querySelector('.wind-speed');
        const icon = document.querySelector('.icon');
        const pressure = document.querySelector('.pressure');
        const windDeg = document.querySelector('.wind');


        cityName.textContent = data.name;
        temp.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
        descr.textContent = data.weather[0].description;
        pressure.innerHTML = `${data.main.pressure} <span>hPa</span>`;
        windDeg.innerHTML = `${data.wind.deg} <span>°</span>`;
        windSpeed.innerHTML = `${data.wind.speed} <span>meter/sec</span>`;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">` 
    console.log(data);                
        });                
    });
});

/*Если значение по умолчанию через JavaScript не добавляется на страницу, возможно, скрипт выполняется до того, как DOM (Document Object Model) загрузился. Чтобы исправить это, убедитесь, что код, который задает значение по умолчанию для поля ввода, выполняется только после полной загрузки страницы.

Для этого можно воспользоваться событием DOMContentLoaded, которое срабатывает, когда весь HTML-документ загружен и разобран:
Что происходит:
document.addEventListener('DOMContentLoaded', ...) гарантирует, что код выполняется только после полной загрузки HTML-документа.
После загрузки страницы в поле ввода автоматически устанавливается значение "Nitra".*/