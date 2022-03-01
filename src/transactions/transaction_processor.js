const processTransactions = transactions => {
    
    if (transactions === undefined) throw new Error("Undefined collection of transactions");

    const [processedTransactions, transactionsCount] = [[], {}];

    transactions.sort().forEach(item => transactionsCount[item] ? transactionsCount[item]++ : transactionsCount[item] = 1);

    const sortedTransactionsCount = sortByAmount(transactionsCount);

    Object.keys(sortedTransactionsCount).forEach((key, index) => processedTransactions[index] = `${key} ${sortedTransactionsCount[key]}`);

    return processedTransactions;
}; 

const sortByAmount = transactionsCount => {

    let sortedResults = {};

    let sortedKeys = Object.keys(transactionsCount).sort((itemOne, itemTwo) => transactionsCount[itemTwo] - transactionsCount[itemOne]);

    sortedKeys.forEach(objectKey =>  sortedResults[objectKey] = transactionsCount[objectKey] );

    return sortedResults;
}

module.exports = processTransactions;