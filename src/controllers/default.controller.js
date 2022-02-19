const defaultController = require('express').Router();

const defaultService = require('./../services/default.service');

defaultController.get('/get-countries-list', (req, res) => {
    let countriesList = defaultService.getCountriesList();
    console.log(countriesList);
    res.setHeader('Content-Type', 'application/json');
    res.send(countriesList);
});

defaultController.get('/get-country/:countryCode', (req, res) => {
    let countryCodeParam = req.params.countryCode;
    let country = defaultService.getCountryByCode(countryCodeParam);
    console.log(country);
    res.setHeader('Content-Type', 'application/json');
    if(!country){
        res.send({ 'err' : 'Invalid Country Code'});
    }
    else{
        res.send(country);
    }
})

module.exports = defaultController;
