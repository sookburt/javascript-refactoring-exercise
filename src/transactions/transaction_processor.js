// changed transActions to transactions - one word therefore camel case inappropriate
function processTransactions(transactions) {
     // change to one line and move to top also moved test directly into conditional statment.
    if (transactions === undefined) throw new Error("Undefined collection of transactions");

    // changed from global to local variable
    const txr = [];

    let txCount = {};

    // changed - to declarative 
    transactions.forEach(item => txCount[item] ? txCount[item] += 1 : txCount[item] = 1);

    // TODO: ? re-assign to new
    txCount = sortByAmountThenName(txCount);

    // Place them back in array for returning
    // changed - to use an arrow function.
    Object.keys(txCount).forEach((key, index) => txr[index] = `${key} ${txCount[key]}`);

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


module.exports = processTransactions;