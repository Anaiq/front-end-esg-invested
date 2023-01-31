// create an interface (type object) that can be used throughout the application
export interface ExchangeStock {
    exchange_id: number,
    stockSymbol: string,
    companyName: string,
    currentStockPrice: string,
    environmentScore: string,
    socialScore: string,
    governanceScore: string

};