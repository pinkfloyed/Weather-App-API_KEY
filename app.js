const api = {
    key: "a445d915f2fa242786c340f724e7c6a5",
    base: "https://api.openweathermap.org/data/2.5/"
}

const box=document.querySelector('.box');
box.addEventListener('keypress',setQuery);

function setQuery(e)
{
    if(e.keyCode==13)
    {
        result(box.value);
    }
}

function  result(qu)
{
    fetch(`${api.base}weather?q=${qu}&units=metric&APPID=${api.key}`).then(weather=>
        {
            return weather.json();

        }).then(display);
}

function display(weather)
{
    let a=document.querySelector('.location .city');
    a.innerHTML=`${weather.name},${weather.sys.country}`;

    let d=new Date();
    let date=document.querySelector('.location .date');
    date.innerHTML=dateBuilder(d);

    let x=document.querySelector('.current .temp');
    x.innerHTML=`${Math.round(weather.main.temp)}<span>°c</span>`;

    let w=document.querySelector('.current .weather');
    w.innerText=weather.weather[0].main;

    let h=document.querySelector('.hilow');
    h.innerText=`${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;


}

function dateBuilder(r)
{
    let m=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    let date=r.getDate();
    let da=day[r.getDay()];
    let mo=m[r.getMonth()];
    let y=r.getFullYear();
    return `${da}${date}${mo}${y}`;
}