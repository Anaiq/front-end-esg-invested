// create an interface (type object) that can be used throughout the application
export type Transaction = {
    transactionId: number,
    stockSymbol: string,
    companyName: string,
    currentStockPrice: number,
    numberStockShares: number
    transactionTotalValue: number
    transactionType: string,
    transactionTime: string,
    investorId: number,
    stockId:number
};