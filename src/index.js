import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { countryInfo, countryList, markupCountryCard, markupCountryList } from './render';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(doSearchBox, DEBOUNCE_DELAY));

function doSearchBox(event) {
  event.preventDefault();
  const country = event.target.value.trim();

  if (country !== '') {
    clearMarkup();
    fetchCountries(country)
      .then(countries => {
        if (countries.length >= 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        }
        if (countries.length < 10 && countries.length > 2) {
          markupCountryList(countries);
        } else {
          markupCountryCard(countries);
        }
      })
      .catch(error => {
        Notify.failure(error.message);
      });
  }
  clearMarkup();
}

function clearMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}
