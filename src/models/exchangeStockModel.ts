// create an interface (type object) that can be used throughout the application
export interface ExchangeStock {
    exchangeId: number,
    stockSymbol: string,
    companyName: string,
    currentStockPrice: string,
    environmentRating: string,
    socialRating: string,
    governanceRating: string

};