# shorthandurl


URL shortener app

This app consists of a website that displays an input box, once a url is inserted and submitted, it will show a shortened url, example:

User inserts the a long url in the input: https://www.youtube.com/watch?v=SlYcnGW0NEg&list=RDSlYcnGW0NEg&start_radio=1&ab_channel=TitoSakuraba

App returns the shortened url: http://localhost:8943/Asde84

When a user navigates to http://localhost:8943/AsdF84 it will be redirected to https://www.youtube.com/watch?v=SlYcnGW0NEg&list=RDSlYcnGW0NEg&start_radio=1&ab_channel=TitoSakuraba
If a user navigates to http://localhost:8943/I_DO_NOT_EXIST then the user will be presented with a clear not found message
If a user navigates to http://localhost:8943/HeMan then the user will be presented with a HeMan image, one from https://giphy.com/explore/he-man-and-the-masters-of-the-universe

Functional requirements:
<!-- - The input must only accept valid urls -->
- The input will return the same shortened url if submitted/accessed multiple times at least once during the past 30 seconds
- The output or shortened url, will be a random generated base64 encoded string
- The output or shortened url, must always redirect to the same website if generated or accessed during the past 30 seconds
- The not found page, must be shown if the user attempts to access an unknown/expired shortened url


Technical requirements divided:
- Must have AT LEAST 10 commits, as a minimum, each corresponding to the requirement specified below
- Frontend will display a single input box, the placeholder is 'Insert your long url here...'
- Frontend will display a green button with text 'Shorten!', the button will have a bootstrap glyphicon to the right side of the text
- Frontend will use bootstrap
- Frontend will perform http requests with JQuery, NO VANILLA JS
- Frontend when shorten button is clicked, it will perform a PUT request to the /shorten endpoint and display the shortened url returned from the backend

- Backend will use expressjs
- Backend will listen on port 8943
- Backend will store all urls in an in-memory map NO EXTERNAL DATABASE/NODE MODULES/ETC
- Backend will have an in-memory map that will act as a database, with the following structure:
  { 
  "<LONG URL KEY>": { "shortened": "<SHORTENED URL VALUE>, "lastAccessedAt": "<TIME URL LAST ACCESSED>" },
  "<LONG URL KEY 2>": { "shortened": "<SHORTENED URL VALUE 2>, "lastAccessedAt": "<TIME URL LAST ACCESSED>" },
  ... }
- Backend will expose a PUT /shorten endpoint where the json body is { "longUrl": "<LONG URL FROM INPUT BOX>" }
  - 1.- Check if long url exists in-memory map by doing the following:
    - a.- If exist, return <SHORTENED URL VALUE> and update lastAccessedAt with current time 
    - b.- Else, create a new record:
      - I.- <SHORTENED URL VALUE> is random 6-letter base64 enconded string
      - II.- lastAccessedAt is the current timestamp
      - III.- <LONG URL KEY> is the long url supplied as input to the endpoint
    - c.- Scan all entries in the in-memory map and delete the entries that are more than 30 seconds old

- Backend will expose a GET /<SHORTENED URL> endpoint, when accessed it will perform a lookup on the in-memory database
  - 1.- Check if shortened version exists
    - a.- If exists, return a moved permantently http code (google it up) to the long url, it must redirect the browser. It must also refresh lastAccessedAt with the current time
    - b.- Else, will return a not found http code (also google it up), it must show a clear not found error

- Backend will expose a GET /HeMan endpoint, when accessed it will return a HeMan image, any image from https://giphy.com/explore/he-man-and-the-masters-of-the-universe