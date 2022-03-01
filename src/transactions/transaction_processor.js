const processTransactions = transactions => {
    
    if (transactions === undefined) throw new Error("Undefined collection of transactions");

    const [processedTransactions, transactionsCount] = [[], {}];

    transactions.forEach(item => transactionsCount[item] ? transactionsCount[item]++ : transactionsCount[item] = 1);

    const sortedTransactionsCount = sortByAmountThenName(transactionsCount);

    Object.keys(sortedTransactionsCount).forEach((key, index) => processedTransactions[index] = `${key} ${sortedTransactionsCount[key]}`);

    return processedTransactions;
}; 

const sortByAmountThenName = transactionsCount => {

    let sortedResults = {};

    let sortedKeys = Object.keys(transactionsCount).sort((itemOne, itemTwo) => transactionsCount[itemTwo] - transactionsCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo));

    sortedKeys.forEach(objectKey =>  sortedResults[objectKey] = transactionsCount[objectKey] );

    return sortedResults;
}


module.exports = processTransactions;