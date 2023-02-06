// create an interface (type object) that can be used throughout the application
export type ExchangeStockApi = {
    exchange_id: number,
    stock_symbol: string,
    company_name: string,
    current_stock_price: string,
    environment_rating: string,
    social_rating: string,
    governance_rating: string
};