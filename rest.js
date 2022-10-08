const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountries(data));
}
const displaycountries = countries => {
    // console.log(countries);
    const CountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(CountriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join('  ');
}

const getCountryHTML = ({ name, population, region, flags, capital }) => {
    return `
     <div class="country">
     <h2>${name.common}</h2>
     <h4>Capital: ${capital} </h4>
     <p> Population: ${population} </p>
     <p> Region: ${region} </p>
     <img src="${flags.png}">
     </div>
     `
}

loadcountries();