fetch('https://api.openweathermap.org/data/2.5/onecall?lat=59.92&lon=30.24&exclude=minutely,hourly,alerts&units=metric&appid=bfcf2363b5c23a34f80856241d2918f7').then((data)=>{
//    console.log(data);
      return data.json();
}).then((completedata)=>{
//    console.log(completedata.daily[0].dt);
    let data1 = "";
    completedata.daily.map((daily)=>{
        let unix_timestamp = daily.dt;
        var date = new Date(unix_timestamp * 1000);
        var convert = Math.round(daily.temp.day);

        data1 += ` <div class = "days_cards"> <h1 class="title">${date}</h1>
        <img src="http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png" alt="img" class="images">
        <p>${daily.weather[0].description}</p><p class="temprature">${convert} °C</p></div>`
        
    });
    document.getElementById("days").innerHTML = data1;

  
    var convert1 = Math.round(completedata.current.temp);
    var data2 = ` <div class = "days_cards"> <h1 class="title">Current weather</h1>
    <img src="http://openweathermap.org/img/wn/${completedata.current.weather[0].icon}@2x.png" alt="img" class="images">
    <p>${completedata.current.weather[0].description}</p><p class="temprature">${convert1} °C</p></div>`

    document.getElementById("current").innerHTML = data2;

}).catch((err)=>{
    console.log(err);
})
