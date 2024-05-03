/* how export and import modules in COMMON JS (cs js = native js) */ 

function GenerateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

module.exports = GenerateRandomNumber;






