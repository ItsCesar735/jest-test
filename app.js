const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

module.exports = {fromEuroToDollar};

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}

module.exports = { fromEuroToDollar,fromYenToPound};   

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

module.exports = {fromEuroToDollar, fromYenToPound, fromDollarToYen};