//Add dynamic skybox to match the Weather API weather description based on location
//Add dynamic skybox for timezones based on location query
//Add stars to skybox for night time
//Add clouds to skybox

//Variables
var _0x5ee6=['0150d4e1ced151f01453d36ea729ff66'];(function(_0x274bcd,_0x5ee657){var _0x2405ec=function(_0xf167c3){while(--_0xf167c3){_0x274bcd['push'](_0x274bcd['shift']());}};_0x2405ec(++_0x5ee657);}(_0x5ee6,0x1ae));var _0x2405=function(_0x274bcd,_0x5ee657){_0x274bcd=_0x274bcd-0x0;var _0x2405ec=_0x5ee6[_0x274bcd];return _0x2405ec;};var _0x3cdbac=_0x2405,apiKey=_0x3cdbac('0x0');
var userLocation = document.querySelector("#locationInput")
var locationText = document.querySelector("#locationID")
var tempText = document.querySelector("#tempID")
var weatherIcon = document.querySelector("#weatherIcon")
var descID = document.querySelector("#descID")
var windSpeedID = document.querySelector("#windSpeedID")
var windDegreeID = document.querySelector("#windDegreeID")
var timeID = document.querySelector("#time")
var body = document.querySelector("body")
var title = document.querySelector("#title")
weatherIcon.style.display="none";


//Capital first letters callback funtion
function capital_letters(str){
    str=str.split(" ");
    for (var i=0, x = str.length; i < x; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

//Gets current time and changes skybox color accordingly
function skyBox() {
    var today = new Date();
    var time = today.getHours();
    time.toString();

    for(morning=0; morning < 6; morning++){
        morning.toString();
        console.log(morning)
        if(time == morning){
            title.style.color="white";
            body.style.background="linear-gradient(179.8017454988008deg, rgba(0, 89, 255,1) -3.841025641025631%,rgba(0, 157, 255,1) 25.799999999999997%,rgba(255, 255, 255,1) 55.44102564102564%)"
            console.log("Yes")
            console.log("The time is: " + time)
            
        }
    } 


    for(day=6; day < 19; day++){
        day.toString();
        console.log(day)
        if(time == day){
            title.style.color="white";
            body.style.background="linear-gradient(181.12934041606366deg, rgba(133, 222, 255,1) -1.7384615384615287%,rgba(255, 255, 255,1) 55.49230769230769%)"
            console.log("Yes")
            console.log("The time is: " + time)
            
        }
    } 

    for(evening=19; evening < 21; evening++){
        evening.toString();
        console.log(evening)
        if(time == evening){
            title.style.color="white";
            body.style.background="linear-gradient(180.39377922608685deg, rgba(0, 8, 69,1) -3.8512820512820483%,rgba(255, 145, 0,1) 39.052564102564105%,rgba(255, 255, 255,1) 55.841025641025645%)"
            console.log("Yes")
            console.log("The time is: " + time)
        }
    }

    for(night=21; night < 25; night++){
        night.toString();
        console.log(night)
        if(time == night){
            title.style.color="white";
            body.style.background="linear-gradient(180.61938970321808deg, rgba(0, 8, 69,1) -1.4230769230769198%,rgba(255, 255, 255,1) 55.5%)"
            console.log("Yes")
            console.log("The time is: " + time)
        }
    }

    
}
skyBox();


//Get weather icons
function weatherIcons() {
    url="https://api.openweathermap.org/data/2.5/weather?lat=39.107693&lon=-76.80315&units=imperial&appid="+apiKey
}

//Function that gathers geolocation data from user.
function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positionData);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    function positionData(position){
        url ="https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&units=imperial&appid="+apiKey

        fetch(url)
        .then(response => response.json())
        .then(data => {
            //Append the json data from the API to the locationText innerHTML 
            locationText.innerHTML = "Location: " + (data["name"])+", "+(data["sys"]["country"]) 

            //If a location does not have a country listed in the json (data.sys.country) then just print the location name (data.name)
            if((!data["sys"]["country"])){
                locationText.innerHTML = "Location: " + (data["name"])
            }

            //API icon conversion

            //DayIcons
            if((data["weather"][0]["icon"] == "01d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fday.svg?v=1601345889313"
            }
            else if((data["weather"][0]["icon"] == "02d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-day-1.svg?v=1601345890489"
            }
            else if((data["weather"][0]["icon"] == "03d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-day-3.svg?v=1601345890577"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "04d" || "04n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy.svg?v=1601345890468"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "09d" || "09n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Frainy-7.svg?v=1601345889872"
            }
            else if((data["weather"][0]["icon"] == "10d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Frainy-3.svg?v=1601345889647"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "11d" || "11n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fthunder.svg?v=1601345890341"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "13d" || "13n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fsnowy-6.svg?v=1601345890295"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "50d" || "50n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fwindy.gif?v=1601345890435"
            }


            //NightIcons
            if((data["weather"][0]["icon"] == "01n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fnight.svg?v=1601345889294"
            }
            else if((data["weather"][0]["icon"] == "02n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-night-1.svg?v=1601345889164"
            }
            else if((data["weather"][0]["icon"] == "03n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-night-3.svg?v=1601345889332"
            }
            else if((data["weather"][0]["icon"] == "10n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Frainy-5.svg?v=1601345889771"
            }


            //Converts fahrenheit to celcius and displays temps
            var celcius = (data["main"]["temp"] - 32) * (5 / 9)
            tempText.innerHTML = "Temp: " + Math.floor((data["main"]["temp"])) + " F / " + Math.floor(celcius) + " C"

            //Displays icons
            weatherIcon.setAttribute("src", icon)

            //Displays weather description
            descID.innerHTML = "Description: " + capital_letters((data["weather"][0]["description"]))

            //Displays wind info
            windDegreeID.innerHTML = "Degree: " + (data["wind"]["deg"]) + "°"
            windSpeedID.innerHTML = "Degree: " + (data["wind"]["speed"]) + " mph"

            //Centers icon
            weatherIcon.style.display="inline";

            //Console.log here
            console.log(data)
        })
        
        .catch(error => alert("Error. Geolocation request declined or an extension is preventing the API from making requests."))
        userLocation.value = ""
    }      
}
geolocation();


//Function that handles location data from input form
function locationSubmission (key, position) {
    if (key.keyCode == 13) {
        /*
        URL variable gets the location value from the input field and appends it to the url 
        go to https://openweathermap.org/current for documentation on url formatting.
        */
        url="https://api.openweathermap.org/data/2.5/weather?q="+userLocation.value+"&units=imperial&appid="+apiKey
        
       
       
       
        fetch(url)
        .then(response => response.json())
        .then(data => {
            //Append the json data from the API to the locationText innerHTML 
            locationText.innerHTML = "Location: " + (data["name"])+", "+(data["sys"]["country"]) 

            //If a location does not have a country listed in the json (data.sys.country) then just print the location name (data.name)
            if((!data["sys"]["country"])){
                locationText.innerHTML = "Location: " + (data["name"])
            }



            //API icon conversion

            //DayIcons
            if((data["weather"][0]["icon"] == "01d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fday.svg?v=1601345889313"
            }
            else if((data["weather"][0]["icon"] == "02d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-day-1.svg?v=1601345890489"
            }
            else if((data["weather"][0]["icon"] == "03d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-day-3.svg?v=1601345890577"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "04d" || "04n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy.svg?v=1601345890468"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "09d" || "09n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Frainy-7.svg?v=1601345889872"
            }
            else if((data["weather"][0]["icon"] == "10d")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Frainy-3.svg?v=1601345889647"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "11d" || "11n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fthunder.svg?v=1601345890341"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "13d" || "13n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fsnowy-6.svg?v=1601345890295"
            }
            //Day and Night
            else if((data["weather"][0]["icon"] == "50d" || "50n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fwindy.gif?v=1601345890435"
            }


            //NightIcons
            if((data["weather"][0]["icon"] == "01n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fnight.svg?v=1601345889294"
            }
            else if((data["weather"][0]["icon"] == "02n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-night-1.svg?v=1601345889164"
            }
            else if((data["weather"][0]["icon"] == "03n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Fcloudy-night-3.svg?v=1601345889332"
            }
            else if((data["weather"][0]["icon"] == "10n")){
                icon="https://cdn.glitch.com/724a6072-d689-409f-968e-dbe699e01ab7%2Frainy-5.svg?v=1601345889771"
            }


            //Converts fahrenheit to celcius and displays temps
            var celcius = (data["main"]["temp"] - 32) * (5 / 9)
            tempText.innerHTML = "Temp: " + Math.floor((data["main"]["temp"])) + " F / " + Math.floor(celcius) + " C"

            //Displays icons
            weatherIcon.setAttribute("src", icon)

            //Displays weather description
            descID.innerHTML = "Description: " + capital_letters((data["weather"][0]["description"]))

            //Displays wind info
            windDegreeID.innerHTML = "Degree: " + (data["wind"]["deg"]) + "°"
            windSpeedID.innerHTML = "Degree: " + (data["wind"]["speed"]) + " mph"

            //Centers icon
            weatherIcon.style.display="inline";

            //Console.log here
            console.log(data)


        })
        
        .catch(error => alert("Error. Either location was entered incorrectly (correct input: City, State or Country...) or an extension is preventing the API from making requests."))
        userLocation.value = ""
    }

}
