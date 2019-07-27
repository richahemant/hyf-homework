const resultDiv = document.getElementById('resultDiv');

document.getElementById('getLoc')
.addEventListener("click", geoNav);

function geoNav(){
    resultDiv.innerHTML = '';

    if('geolocation' in navigator){
        console.log('geolocation present');

        new Promise(function(resolve, reject){
            navigator.geolocation.getCurrentPosition(
                //Successful operation returns an object position
                function(position){
                    let coordinates = {
                        lat : position.coords.latitude,
                        lng : position.coords.longitude
                    }
                    resolve(coordinates);

                },
                //Failure returns an error object
                function(error){
                    reject(error);
                }
            );

        
        })
        //Deal with the successful operation. Works with the resolve value, resolve(coordinates)
        .then(function(latlong){
            console.log(latlong);    
            let plat = document.createElement('p');
            let plng = document.createElement('p');
            
            plat.innerHTML = "Latitude: " + latlong.lat;
            plng.innerHTML = "Longitude: " + latlong.lng;

            resultDiv.appendChild(plat);
            resultDiv.appendChild(plng);

        })
        //Deal with the Failure operation. Works with the reject value, reject(error)
        .catch(function(msg){
            console.log(msg);
            let errorMsg = document.createElement('p');
            errorMsg.innerHTML = msg.message;
            resultDiv.appendChild(errorMsg);
        })

    } else{
        console.log('You need to enable geolocation');
    }

}
