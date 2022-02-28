// changed transActions to transactions - one word therefore camel case inappropriate
function processTransactions(transactions) {
     // change to one line and move to top also moved test directly into conditional statment.
    if (transactions === undefined) throw new Error("Undefined collection of transactions");

    // changed from global to local variable and renamed.
    const processedTransactions = [];

    const transactionsCount = {};

    // changed - to declarative 
    transactions.forEach(item => transactionsCount[item] ? transactionsCount[item] += 1 : transactionsCount[item] = 1);

    // TODO: ? re-assign to new
    const sortedTransactionsCount = sortByAmountThenName(transactionsCount);

    // Place them back in array for returning
    // changed - to use an arrow function.
    Object.keys(sortedTransactionsCount).forEach((key, index) => processedTransactions[index] = `${key} ${sortedTransactionsCount[key]}`);

    return processedTransactions;
}

function sortByAmountThenName(transactionsCount) {

    // changed  - create function expression to use as a callback function for sort method 
    const sortingFunction = (itemOne, itemTwo) => transactionsCount[itemTwo] - transactionsCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo);

    // changed - using new sorting callback
    let sortedKeys = Object.keys(transactionsCount).sort(sortingFunction);

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = transactionsCount[objectKey];
    }

    return sortedResults;
}


module.exports = processTransactions;