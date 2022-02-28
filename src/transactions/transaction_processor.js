// changed transActions to transactions - one word therefore camel case inappropriate
function processTransactions(transactions) {
     // change to one line and move to top
    if (!validateTransactions(transactions)) throw new Error("Undefined collection of transactions");

    // changed from global to local variable
    const txr = [];

    let txCount = {}

    // TODO: required?  if so, use directly.
    const numberOfTransactions = transactions.length;

    // TODO: change to declarative
    for(var i = 0; i < numberOfTransactions; i++) {
        const transaction = transactions[i];
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    }

    // TODO: ? re-assign to new
    txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returning
    Object.keys(txCount).forEach(function (key, index) {
        txr[index] = `${key} ${txCount[key]}`;
    });

    return txr;
}

function sortByAmountThenName(txCount) {

    // changed  - create function expression to use as a callback function for sort method 
    const sortingFunction = (itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo);

    // changed - using new sorting callback
    let sortedKeys = Object.keys(txCount).sort(sortingFunction);

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }

    return sortedResults;
}


function validateTransactions(transactions) {
    if(transactions === undefined) {
        return false;
    } 

    return true;
}

module.exports = processTransactions;