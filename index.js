//Destructuring Assignment with Nested Objects

//We can also use destructuring assignments, to assign variables
//from nested objects.

const LOCAL_FORECAST =
{
    //We have this nested object right here -- the LOCAL_FORECAST
    today: {min: 72, max: 83}, //We have some nested objects -- we have the forecast from today
    tomorrow: {min: 73.3, max: 84.6} //We have some forecasts from tomorrow 
};

function getMaxOfTomorrow(forecast)

{
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast; //We're trying to use destructuring, to figure out the maxoftomorrow, so it's equal to that.

    return maxOfTomorrow;
}

console.log(getMaxOfTomorrow(LOCAL_FORECAST));


function getMinOfTomorrow(forecast)

{
    "use strict";

    const { tomorrow : { min : minOfTomorrow }} = forecast; //We're trying to use destructuring, to figure out the maxoftomorrow, so it's equal to that.

    return minOfTomorrow;
}

console.log(getMinOfTomorrow(LOCAL_FORECAST));