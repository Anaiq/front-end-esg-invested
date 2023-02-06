// create an interface (type object) that can be used throughout the application
export type StockApi = {
    stock_id: number,
    stock_symbol: string,
    environment_rating: string,
    social_rating: string,
    governance_rating: string
};