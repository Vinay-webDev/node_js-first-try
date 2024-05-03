/* how export and import modules in COMMON JS (cs js = native js) */ 

function GenerateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

module.exports = {GenerateRandomNumber, celciusToFahrenheit};






