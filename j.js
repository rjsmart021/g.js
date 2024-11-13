//1. Exploring Asynchronous JavaScript
//Task 1: Obtaining API Key and Configuration
http(s)://gateway.marvel.com/
Request Url: http://gateway.marvel.com/v1/public/comics
Request Method: GET
Params: {
  "apikey": "your api key",
  "ts": "a timestamp",
  "hash": "your hash"
}
Headers: {
  Accept: */*
}
Status Code: 200
Access-Control-Allow-Origin: *
Date: Wed, 18 Dec 2013 22:00:55 GMT
Connection: keep-alive
ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
Content-Length: 54943
Content-Type: application/json
Request Url: http://gateway.marvel.com/v1/public/comics
Request Method: GET
Params: {
  "apikey": "your api key",
  "ts": "a timestamp",
  "hash": "your hash"
}
Headers: {
  Accept: */*
  If-None-Match: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
}
Status Code: 304
Access-Control-Allow-Origin: *
Date: Wed, 18 Dec 2013 22:03:20 GMT
Connection: keep-alive
ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
Request: GET http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY
Response:
{
  "code": 200,
  "status": "Ok",
  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
  "data": {
  … [other data points]
}
Request: GET http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY&callback=callback_param
Response:
callback_param({
  "code": 200,
  "status": "Ok",
  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
  "data": {
  … [other data points]
})
//Task 2: Fetching Characters Using Fetch API
//Implement a function to fetch Marvel Comics characters asynchronously from the API endpoint using the Fetch API and promises. Utilize the API key and configurations obtained in Task 1. Log the fetched characters to the console.
async function fetchMarvelCharacters() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.results; // Returns the array of characters
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Example usage
fetchMarvelCharacters().then(characters => {
    console.log(characters);
});
//Task 3: Updating User Interface Dynamically
//Write a function to dynamically update the user interface with the fetched characters' information. Utilize promises and the Fetch API to ensure that the UI updates only after the characters are successfully fetched.
const [state, setState] = useState(initialState);
useEffect(() => {
    // Effect code here
    return () => {
        // Cleanup code here (optional)
    };
}, [dependencies]);
/* RandomUserData.js */

import React,
{
    useState,
    useEffect
} from 'react';

function RandomUserData() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('http://gateway.marvel.com/v1/public/comics')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);


    return (
        <div>
            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>
                        Name:
                        {userData.first_name}
                        {userData.last_name}
                    </p>
                    <p>
                        Email: {userData.email}
                    </p>
                    {/* Add more user data fields as needed */}
                </div>
            )}
        </div>
    );
}

export default RandomUserData;
 .then(response => {
    // Handle Fetch response here.
  })
  .catch(error => {
    // If there's an error, handle it here
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => console.log(response))
  .catch(error => console.log(error));

  })
//2. Implementing Timers in JavaScript
//Task 1: Countdown Timer
//Create a countdown timer that starts from a user-defined duration (in seconds) and updates every second until it reaches zero. Use setInterval to update the timer display.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
</head>
<body>
    <h1>Countdown Timer</h1>
    <input type="number" id="duration" placeholder="Enter duration in seconds">
    <button onclick="startTimer()">Start</button>
    <div id="timerDisplay"></div>

    <script>
        function startTimer() {
            let duration = document.getElementById('duration').value;
            let timerDisplay = document.getElementById('timerDisplay');
            let timeRemaining = duration;

            const interval = setInterval(() => {
                if (timeRemaining > 0) {
                    timeRemaining--;
                    timerDisplay.textContent = `Time remaining: ${timeRemaining} seconds`;
                } else {
                    clearInterval(interval);
                    timerDisplay.textContent = "Time's up!";
                }
            }, 1000);
        }
    </script>
</body>
</html>
//Task 2: Delayed Notification
//Implement a function that displays a notification after a specified delay (in milliseconds) using setTimeout.

function showNotification(message, delay) {
    setTimeout(() => {
        alert(message);
    }, delay);
}

// Example usage:
showNotification("This is your notification!", 3000); // Displays the alert after 3 seconds
//Task 3: Repeat Notification
//Develop a function that repeatedly displays a notification at fixed intervals until the user dismisses it. Use setInterval to schedule the notifications.
function showNotification() {
    if (Notification.permission === 'granted') {
        const notification = new Notification('Reminder', {
            body: 'This is your scheduled notification!',
            icon: 'path/to/icon.png' // Optional: Add an icon
        });

        notification.onclick =

