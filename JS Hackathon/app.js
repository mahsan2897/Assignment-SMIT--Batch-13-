var weatherData=[
    {
        city:'karachi',
        temperature:32,
        condition:'Sunny',
        humidity:60,
        windSpeed:10
    },
    {
        city:'lahore',
        temperature:28,
        condition:'Cloudy',
        humidity:70,
        windSpeed:8
    },
    {
        city:'islamabad',
        temperature:25,
        condition:'Rainy',
        humidity:80,
        windSpeed:5
    },
    {
        city:'peshawar',
        temperature:35,
        condition:'Sunny',
        humidity:55,
        windSpeed:7
    },
    {
        city:'quetta',
        temperature:20,
        condition:'Cloudy',
        humidity:65,
        windSpeed:11
    }
]
var getBtn=document.querySelector('.btn')
var getNav=document.querySelector('.nav')
var getAbc=document.querySelectorAll('.abc')
var getSearch=document.querySelector('.searchbar')
var getItems=document.querySelectorAll('.items')
function theme(){
    if (getBtn.innerHTML=='Dark Mode'){
        document.body.style.backgroundColor='black'
getBtn.style.backgroundColor='white'
getBtn.style.color='black'
getNav.style.backgroundColor='white'
getSearch.style.backgroundColor='blue'
getBtn.innerHTML='Light Mode'
for(i=0;i<getAbc.length;i++){
getAbc[i].style.color='black'
}
for(j=0;j<getItems.length;j++){
    getItems[j].style.backgroundColor='white'
}
    }
    else{
        document.body.style.backgroundColor='transparent'
        getBtn.style.backgroundColor='black'
        getBtn.style.color='white'
        getNav.style.backgroundColor='black'
        getSearch.style.backgroundColor='rgb(62, 227, 47)'
        getBtn.innerHTML='Dark Mode'
        for(i=0;i<getAbc.length;i++){
        getAbc[i].style.color='white'
        }
        for(j=0;j<getItems.length;j++){
            getItems[j].style.backgroundColor='rgb(62, 227, 47)'
        }
    }
}
var getInp=document.getElementById('inp')
var filteredData
var scr1=document.getElementById('screen1')
var scr2=document.getElementById('screen2')
var scr3=document.getElementById('screen3')
var scr4=document.getElementById('screen4')
var scr5=document.getElementById('screen5')
function searchIcon(){
    filteredData=weatherData.filter((a)=>{
        return a.city==getInp.value.toLowerCase()
    })
    if (filteredData.length==0){
        scr1.innerText='City Not Found'
        scr2.innerText='00'
        scr3.innerText='00'
        scr4.innerText='00'
        scr5.innerText='00'
    }
    else{
        scr1.innerText=filteredData[0].city[0].toUpperCase()+filteredData[0].city.slice(1)
        scr2.innerText=filteredData[0].temperature+' C'
        scr3.innerText=filteredData[0].condition
        scr4.innerText=filteredData[0].humidity+' %'
        scr5.innerText=filteredData[0].windSpeed+' m/s'
    }
}