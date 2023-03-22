const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



/*cost of living */
// const form = document.querySelector('form');
// const resultDiv = document.querySelector('#result');
// const resultHeading = document.querySelector('#result-heading');

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// })
// 	const city1 = document.querySelector('#city1').value;
// 	const city2 = document.querySelector('#city2').value;

// 	if (city1 === '' || city2 === '') {
// 		alert('Please enter both cities to compare');
// 	} else {
// 		fetch(`https://api.teleport.org/api/cost-of-living/v1/compare/?city1=${city1}&city2=${city2}`)
// 		.then(response => response.json())
// 		.then(data => {
// 			resultDiv.innerHTML = `
// 				<p>Average cost of living index in ${data.comparison[0].place.name}: ${data.comparison[0].index}</p>
// 				<p>Average cost of living index in ${data.comparison[1].place.name}: ${data.comparison[1].index}</p>
// 			`;
// 			resultHeading.scrollIntoView();
// 			document.querySelector('#comparison-result').style.display = 'block';
// 		})
  
// 		.catch(error => {
// 			alert('An error occurred while fetching data. Please try again later.');
// 			console.error(error);
// 		});



// fetch('https://cost-of-living-and-prices.p.rapidapi.com/cities', options)

// (`https://api.numbeo.com/api/country_prices?api_key=YOUR_API_KEY&country1=${country1}&country2=${country2}`)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



/******** */

// function compareCostOfLiving() {
//     var country1 = document.getElementById("country1").value;
//     var country2 = document.getElementById("country2").value;
  
//     if (country1 && country2) {
//       var url = "https://api.numbeo.com/api/country_prices?api_key=YOUR_API_KEY&country1=" + country1 + "&country2=" + country2;
  
//       fetch(url)
//         .then(response => response.json())
//         .then(data => {
//           var result = document.getElementById("result");
//           result.innerHTML = "";
  
//           if (data["name"]) {
//             result.style.display = "block";
  
//             var table = "<table>";
//             table += "<tr><th>Item</th><th>" + data["name"] + "</th><th>"
  



/*First js for compare with rapid api*/
// const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '87e772cf14mshb5f9f239a1b4c36p1ac014jsn9c7b7e4bd007',
  //     'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
  //   }
  // };
  
  // fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));








/* Js filr for comparing cities*/
  let firstCountry = document.getElementById("country1");
  let secondCountry = document.getElementById("country2");
  let formcompare = document.getElementById("compare-form");

const searchCostOfLiving = (city, country)=>{
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '87e772cf14mshb5f9f239a1b4c36p1ac014jsn9c7b7e4bd007',
        'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
      }
    };
    
    fetch(`https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${country}&city=${city}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

}

searchCostOfLiving("accra", "ghana");


formcompare.addEventListener("submit", async (event) => {
  // prevent form from submitting and refreshing page on submission
  event.preventDefault();

  // extract city and country info from input fields
  const countryOne = firstCountry.value.toLowerCase().split("/")[1];
  const cityOne = firstCountry.value.toLowerCase().split("/")[0];
  const countryTwo = secondCountry.value.toLowerCase().split("/")[1];
  const cityTwo = secondCountry.value.toLowerCase().split("/")[0];

  // using the fetch function to retrieve data from the two input fields
  let cityOneData =  searchCostOfLiving(cityOne, countryOne);
  let cityTwoData =  searchCostOfLiving(cityTwo, countryTwo);

  console.log(cityOneData);
  console.log(cityTwoData);

});










