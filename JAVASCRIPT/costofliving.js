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

/* Js scripts for comparing cities*/
let firstCountry = document.getElementById("country1");
let secondCountry = document.getElementById("country2");
let formcompare = document.getElementById("compare-form");
let result = document.getElementById("result");
let loader = document.getElementById("loader");

formcompare.addEventListener("submit", async (event) => {
  // prevent form from submitting and refreshing page on submission
  event.preventDefault();
  result.classList.add("d-none");
  loader.classList.remove("d-none");
  loader.innerHTML=`<h2>Loading...</h2>`;

  // extract city and country info from input fields
  const countryOne = firstCountry.value.toLowerCase().split("/")[1];
  const cityOne = firstCountry.value.toLowerCase().split("/")[0];
  const countryTwo = secondCountry.value.toLowerCase().split("/")[1];
  const cityTwo = secondCountry.value.toLowerCase().split("/")[0];

  // using the fetch function to retrieve data from the two input fields
  let cityOneData = await searchCostOfLiving(cityOne, countryOne); // added await
  let cityTwoData = await searchCostOfLiving(cityTwo, countryTwo); // added await

  // console.log(cityOneData);
  // console.log(cityTwoData);
  loader.classList.add("d-none");
  result.classList.remove("d-none");

  firstCountry.value = "";
  secondCountry.value = "";

  // update the result div
  result.innerHTML = `
  <div class="d-flex flex-row justify-content-around">
    <div class="p-3">
      <h2>${cityOne.toUpperCase()}, ${countryOne.toUpperCase()}</h2>
      ${cityOneData}
    </div>
    <div class="p-3">
      <h2>${cityTwo.toUpperCase()}, ${countryTwo.toUpperCase()}</h2>
      ${cityTwoData}
    </div>
  </div>
`;

});

const searchCostOfLiving = (city, country) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '87e772cf14mshb5f9f239a1b4c36p1ac014jsn9c7b7e4bd007',
      'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
    }
  };
  return fetch(`https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${country}&city=${city}`, options)
    .then(response => response.json())
    .then(data => {
      const {Status, Success, Version, ...countryInfo} = data;
      let result = `
      <div>`;
      for (let key in countryInfo) {

        if (countryInfo.hasOwnProperty(key)) {

          // console.log(data[key])
          // console.log(typeof data[key] === 'object')

          let computedValue = [];

          if(typeof countryInfo[key] === 'object'){
            computedValue = countryInfo[key].map((el)=>`${el.Cost} : ${el.Value}`);

          }

          // console.log(computedValue.toString());
          // console.log(computedValue);

          // computedValue.map((value) => {
          //   const itemName = value.split(":")[0];
          //   const itemValue = value.split(":")[1];
          //   console.log({itemName, itemValue});
          // })

          result += `
            ${typeof countryInfo[key] === 'object' ? `
              <div class="mb-5">
                <h5 class="mb-1 fw-bold">${key}</h5>
                  <table class="table table-striped table-bordered border-secondary">
                      <thead>
                        <tr>
                          <th scope="col">Item</th>
                          <th scope="col">Value</th>
                        </tr>
                      </thead>
                  ${computedValue.map(item => (
                    `<tbody>
                        <tr>
                          <td>${item.split(":")[0]}</td>
                          <td>${item.split(":")[1]}</td>
                        </tr>
                      </tbody>`
                  )).join(" ")}
                  </table>
              </div>
            ` :  
            `<div>
                <h6 class="pe-1 mb-2">${key} : ${countryInfo[key]}</h6>
              </div>`
            }
          `;
        }
      }
      result += '</div>';
      return result;
    })
    .catch(err => console.error(err));
};












