// # Day 63 — Project Scenarios
// API example (OpenWeatherMap):
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
// ----------------------------------

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).
// ### Requirements
// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.
// ### Suggested tasks
// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.


// what is api => api ek url hota hai jo ki data deta hai 

// for solving scenario 1 we have two approach : 1) using .then       2) using async await
// 1) .then 

// function getWeather(city){
//     let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`; 
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//     .then(rawData => rawData.json())
//     .then(data => {
//         console.log(data);
//     });
// }

// getWeather("London");



// 2) async await 

async function getWeather(city){
    try{
        let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

        let weatherRawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);

        if(!weatherRawData.ok){
            throw new Error("City not Found,Try Something Else...");
        }

        let weatherData = await weatherRawData.json();

        if(weatherData.main.temp < 10){
            console.warn(`Too Cold There ...    ${weatherData.main.temp}°C`);
        }
        else if(weatherData.main.temp > 25){
            console.warn(`Too Hot There ...    ${weatherData.main.temp}°C`);
        }
        else{
            console.log(weatherData.main.temp);
        }

    }catch(err){
        console.log(err.message);
    }
}

getWeather("Mahad");



// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).
// ### Requirements
// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).
// ### Suggested tasks
// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.
// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.


const users = ['anuragkawade3618@gmail.com','anurag.workzone@gmail.com','anuragcourse@gmail.com'];

function sentEmail(email){
    return new Promise((resolve,reject) => {

        let time = Math.floor(Math.random()*3);
        
        setTimeout(function(){
            let probability = Math.floor(Math.random()*10);
            if(probability <= 5) reject("Email not send");
            else resolve("Email successfully sent ...");
        },time * 1000);
    });
}

async function sentEmails(userLists){
    let responses = userLists.map(function(email){
        return sentEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    });

    let ans = await Promise.all(responses);

    ans.forEach(function(answer,index){
        console.log(`${index}:${answer}`);
    });

}

sentEmails(users);