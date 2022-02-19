
const countries = require('./../resources/countries.json');

exports.getCountriesList = () => {
    return countries;
}

exports.getCountryByCode = (countryCode) => {
    return countries.filter((country) => country.code === countryCode)[0];
}
