export const countryInfo = document.querySelector(".country-info");

export const countryList = document.querySelector('.country-list');

export function markupCountryCard(countries) {
  const markupCountryCard = countries
    .map(({ flags, name, capital, population, languages }) => {
      return `<div class="wrap"><img src=${
        flags.svg
} alt="flag" width="50"/><h2>${
        name.common
      }</h2></div><p><strong>Capital:</strong> ${capital}</p><p><strong>Population:</strong> ${population}</p><p><strong>Languages:</strong> ${Object.values(
        languages
      )}</p>`;
    })
    .join('');
  countryInfo.insertAdjacentHTML('beforeend', markupCountryCard);
};


export function markupCountryList(countries) {
  const markupCountryList = countries
    .map(({ flags, name }) => {
      return `<li><div class="wrap"><img src=${flags.svg} alt="flag" width="40"/><h3>${name.common}</h3></div></li>`;
    })
    .join('');
  countryList.insertAdjacentHTML('beforeend', markupCountryList);
};