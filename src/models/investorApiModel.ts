// create an interface (type object) that can be used throughout the application
export type InvestorApi ={
    investor_id:number, 
    investor_name: string, 
    is_logged_in: boolean, 
    cash_balance: number, 
    total_shares_buys: number,
    total_shares_sales: number,
    total_shares_cash_value: number, 
    total_assets_balance: number, 
    current_e_rating: string,
    current_s_rating: string,
    current_g_rating: string,
    e_goal: string, 
    s_goal: string,
    g_goal: string,
    transactions:{
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
    }[]
};