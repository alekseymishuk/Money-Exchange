// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    if (currency < 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    const denominationArray = [
        {key: "H", value: 50},
        {key: "Q", value: 25},
        {key: "D", value: 10},
        {key: "N", value: 5},
        {key: "P", value: 1}
    ];

    let total = {};
    let currentCoin = 0;

    while(currency > 0 && currentCoin < 5) {
        const count = getCountOfCoins(currency, denominationArray[currentCoin].value);
        if (count !== 0) total[denominationArray[currentCoin].key] = count;
        currency = currency - count * denominationArray[currentCoin].value;
        currentCoin++;
    }
    return total;
}

function getCountOfCoins(currency, denomination) {
    return Math.floor(currency/denomination);
}