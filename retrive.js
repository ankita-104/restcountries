let peru = "https://restcountries.com/v3.1/name/peru"
fetch(peru)
    .then(response => response.json())
    .then(data => console.log(data));
let usa = "https://restcountries.com/v3.1/name/united states of america"
fetch(usa)
    .then(response => response.json())
    .then(data => console.log(data));
let japan = "https://restcountries.com/v3.1/name/japan"
fetch(japan)
    .then(response => response.json())
    .then(data => console.log(data));
let southkorea = "https://restcountries.com/v3.1/name/south korea"
fetch(southkorea)
    .then(response => response.json())
    .then(data => console.log(data));
let india = "https://restcountries.com/v3.1/name/india"
fetch(india)
    .then(response => response.json())
    .then(data => console.log(data));