/*Script for Header section*/
const hamburger = document.querySelector('.mobile-view');
const navMenu = document.querySelector('.navigation-list');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".navigation-field").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



//script displaying country's details
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById('result');
const cuntriesMap = (lat, long, country ) =>{
    var map = L.map('map').setView([lat, long], 5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([lat, long]).addTo(map)
        .bindPopup(`${country}`)
        .openPopup();
}
searchBtn.addEventListener("click", () => {
  result.classList.add('d-none');
  let countryName = countryInp.value;
  console.log(countryName);
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {

    console.log(data[0].borders);

    result.classList.remove("d-none");   
    result.innerHTML = `
        <div class="search">
            <div class="left">
                <h2>${data[0].name.common}</h2>
                <img src="${data[0].flags.svg}" class="flag-img">
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital City: <span>${data[0].capital[0]}</span></h4> 
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent: <span>${data[0].continents[0]}</span></h4>     
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages:<span>${Object.values(data[0].languages)
                          .toString()
                          .split(",")
                          .join(", ")}</span>
                          </h4> 
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population: <span>${data[0].population}</span></h4>     
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency: <span>${
                          data[0].currencies[Object.keys(data[0].currencies)].name
                          } - ${Object.keys(data[0].currencies)[0]}</span></h4>  
                    </div>
                </div>
                <div class="data-wrapper">
                    <h4>Coat Of Arms:</h4>
                    <img src="${data[0].coatOfArms.svg}" class="flag-img">
                </div> 
            </div>
            
          <div class="right">
             <div class="wrapper">
             <div class="data-wrapper">
               <h4>Total Land Area: <span>${data[0].area}</span></h4>
             </div>
           </div>
           <div class="wrapper">
               <div class="data-wrapper">
               <h4>Start of Week: <span>${data[0].startOfWeek}</span></h4>
               
               </div>
           </div>
           <div class="wrapper">
               <div class="data-wrapper">
               <h4>Latitude: <span>${data[0].latlng[0]}</span></h4>
               </div>
           </div>
           <div class="wrapper">
               <div class="data-wrapper">
               <h4>Longitude: <span>${data[0].latlng[1]}</span></h4>      
               </div>
           </div>
           <div class="wrapper">
               <div class="data-wrapper">
               <h4>Timezones: <span>${data[0].timezones[0]}</span></h4>
               
               </div>
           </div>
           <div class="wrapper">
               <div class="data-wrapper">
               <h4>Subregion: <span>${data[0].subregion}</span></h4>
               
               </div>
           </div>

            <div class="wrapper ${data[0].borders ? "d-block" : "d-none"}">
                    <div class="data-wrapper">
                        <h4>Borders with other countries: <span>${data[0].borders &&
                          Object.values(data[0].borders).toString()
                          .split(",")
                          .join(", ")}</span>
                          </h4>  
                    </div>
            </div>

            <div class="wrapper">
                    <div class="data-wrapper">
                    <h4>Location on the map:</h4>
                        <div id="map"> </div>
                    </div>
            </div>
                
            </div>
        </div>   
      `;
      cuntriesMap(data[0].latlng[0], data[0].latlng[1], data[0].capital[0]);
    })
    .catch((error) => {
      console.log(error);
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    // hide the error after 3 seconds
    setTimeout(() => {
      result.classList.add('d-none');
     }, 3000);
    });
});

/*Script for bar chart for chart js API*/
// Defines the API endpoint to fetch the data
 const url = 'https://restcountries.com/v3.1/all';
 // Fetches the data using Fetch API
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const continents = {};
    let out ='';
    data.forEach(country => {
      out += `<option value=${country.name.common}>  ${country.name.common}</option>  `


      const continent = country.region;
      if (continent in continents) {
        continents[continent] += 1;
      } else {
        continents[continent] = 1;
      }
    });
    document.getElementById('countries').innerHTML = out;
    const chartData = {
      labels: Object.keys(continents),
      datasets: [{
        label: 'Total Number of Countries per Continent',
        data: Object.values(continents),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
    const chartOptions = {
      scales: {
        y: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      barThickness: 30 // Adjust the bar thickness as needed
    };
    const chart = new Chart(document.getElementById('chart'), {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  /*Code for subscribe us button */
  let subInput = document.getElementById('sub-text');
  let subButton = document.getElementById('sub-btn');
  let SuccessMessage = document.querySelector('.subscribe');

  subButton.addEventListener("click", () => {
      if (subInput.value!=""){
          SuccessMessage.classList.remove('d-none');
          subInput.value="";

      setTimeout(() =>
        {SuccessMessage.classList.add("d-none")}, 2000);
      }
      
  } )