'use strict';
const getCountry = function(country){
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener('load',function (){

const [data] = JSON.parse(this.responseText);

var firstEntry =Object.values(data.currencies)[0];
var secondENtry = Object.values(data.languages)[0];
console.log(data)
const html =` <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000) > 1000 ? 
                ((+data.population / 1000000000).toFixed(2)) + " billion" : 
                ((+data.population / 1000000).toFixed()) + " million"} </p>
            <p class="country__row"><span>🗣️</span>${secondENtry}</p>
            <p class="country__row"><span>💰</span>${firstEntry.name}</p>
          </div>
        </article>`
        countriesContainer.insertAdjacentHTML('beforeend',html)
    countriesContainer.style.opacity = 1;
    })}
    getCountry('Nepal');
    getCountry('usa');
    getCountry('poland');
    getCountry('india');
    
  