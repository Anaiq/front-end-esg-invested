// create an interface (type object) that can be used throughout the application
export type TransactionApi = {
    transaction_id: number,
    stock_symbol: string,
    company_name: string,
    current_stock_price: number,
    number_stock_shares: number
    transaction_total_value: number
    transaction_type: string,
    transaction_time: string,
    investor_id: number,
    stock_id:number
};