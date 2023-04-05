function getInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=268727a0902faebd527cff52103807af')
.then(response => response.json())
.then(data => {
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min).toFixed(2)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" +Number(data.list[i].main.temp_max).toFixed(2)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
    }
    console.log(data)
})

.catch(err => alert("Something went wrong..."))

}

function defaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    getInfo();
}

const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];

function checkDay(day){
    if(day + d.getDay()>6){
        return day + d.getDay()-7;
    }
    else{
        return day + d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[checkDay(i)];
}

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && pasword == "admin"){
        window.location.assign("index.html");
        alert("Login Successful");
    }
    else{
        alert("Invalid Information");
        return;
    }
}