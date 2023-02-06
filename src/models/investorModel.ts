// create an interface (type object) that can be used throughout the application
export type Investor ={
    investorId:number, 
    investorName: string, 
    isLoggedIn: boolean, 
    cashBalance: number, 
    totalSharesBuys: number,
    totalSharesSales: number,
    totalSharesCashValue: number, 
    totalAssetsBalance: number, 
    currentERating: string,
    currentSRating: string,
    currentGRating: string,
    eGoal: string, 
    sGoal: string,
    gGoal: string,
    transactions:{
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
    }[]
};