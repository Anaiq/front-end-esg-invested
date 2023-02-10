// create an interface (type object) that can be used throughout the application
import { TransactionApi } from "./transactionApiModel";

export type InvestorApi ={
    investor_id:number, 
    investor_name: string, 
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
    transactions:TransactionApi[]
};