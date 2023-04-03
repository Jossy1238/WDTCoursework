const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/*js for ccountries information*/
// let searchBtn = document.getElementById("search-btn");
// let countryInp = document.getElementById("country-inp");
// searchBtn.addEventListener("click", () =>{
//     let countryName = "India";
//     let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//     console.log(finalURL);
//     fetch(finalURL)
//      .then((Response) => Response.json())
//      .then((data) =>{
//         console.log(data[0]);
//         console.log()
//     });
// });





let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
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
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);

    result.classList.remove("hidden");
        
    result.innerHTML = `
        <div class="search">
            <div class="left">
                <img src="${data[0].flags.svg}" class="flag-img">
                <h2>${data[0].name.common}</h2>

                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital:</h4>
                        <div id="map"> </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
            </div>

             <div class="right">
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency:</h4>
                        <span>${
                        data[0].currencies[Object.keys(data[0].currencies)].name
                        } - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages:</h4>
                        <span>${Object.values(data[0].languages)
                        .toString()
                        .split(",")
                        .join(", ")}</span>
                    </div>
                </div>
            </div>
        </div>

        
      `;

      cuntriesMap(data[0].latlng[0], data[0].latlng[1]);





    // result.innerHTML =`

    //         <h2 class="text-heading text-3xl font-bold">${data[0].name.common}</h2>
    //         <div class="main">
    //             <div class="country_search_left">
    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                         <h4>Map:</h4>
    //                         <div id="map"></div>
    //                     </div>  
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Latitude:</h4>
    //                     <span>${data[0].latlng[0]}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Longitude:</h4>
    //                     <span>${data[0].latlng[1]}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Timezones:</h4>
    //                     <span>${data[0].timezones[0]}</span>
    //                     </div>
    //                 </div>

    //                 <div class="data-wrapper">
    //                     <h4>Coat Of Arms:</h4>
    //                     <img src="${data[0].coatOfArms.svg}" class="flag-img">
    //                 </div>

    //             </div>

    //             <div class="country_search_right">
    //                 <img src="${data[0].flags.svg}" class="flag-img">

    //                 <div class="data-wrapper">
    //                     <h4>Official Name:</h4>
    //                     <span>${data[0].name.official}</span>
    //                 </div>
                    
    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Capital:</h4>
    //                     <span>${data[0].capital[0]}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Continent:</h4>
    //                     <span>${data[0].continents[0]}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Population:</h4>
    //                     <span>${data[0].population}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Independent:</h4>
    //                     <span>${data[0].independent}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Start of Week:</h4>
    //                     <span>${data[0].startOfWeek}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Subregion:</h4>
    //                     <span>${data[0].subregion}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Currency:</h4>
    //                     <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>Common Language:</h4>
    //                     <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
    //                     </div>
    //                 </div>

    //                 <div class="wrapper">
    //                     <div class="data-wrapper">
    //                     <h4>UN Member:</h4>
    //                     <span>${data[0].unMember}</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         `;
    //     loadMap(data[0].latlng[0], data[0].latlng[1], data[0].name.common);

    //     countryInp.value = "";
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});





/*Js for chart*/
// Define the API endpoint to fetch the data
// const url = 'https://restcountries.com/v3.1/all';

// Fetch the data using Fetch API
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
    // Process the data to get the total number of countries in each continent
    // const continentMap = new Map();
    // data.forEach(country => {
    //   const continent = country.region;
    //   if (continent in continentMap) {
    //     continentMap[continent]++;
    //   } else {
    //     continentMap[continent] = 1;
    //   }
    // });

    // Create a new chart using Chart.js
  //   const ctx = document.getElementById('chart').getContext('2d');
  //   const chart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: Object.keys(continentMap),
  //       datasets: [{
  //         label: 'Total number of countries per continent',
  //         data: Object.values(continentMap),
  //         backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //         borderColor: 'rgba(54, 162, 235, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }
  //       }
  //     }
  //   });
  // });



  /*Js for chart*/
// Define the API endpoint to fetch the data
 const url = 'https://restcountries.com/v3.1/all';

 // Fetch the data using Fetch API
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const continents = {};
    data.forEach(country => {
      const continent = country.region;
      if (continent in continents) {
        continents[continent] += 1;
      } else {
        continents[continent] = 1;
      }
    });
    const chartData = {
      labels: Object.keys(continents),
      datasets: [{
        label: 'Total Number of Countries by Continent',
        data: Object.values(continents),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
    const chartOptions = {
      scales: {
        yAxes: [{
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
