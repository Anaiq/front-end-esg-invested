// create an interface (type object) that can be used throughout the application
// import { TransactionApi } from "./transactionApiModel";

export type StockApi = {
    stock_id: number,
    stock_symbol: string,
    environment_rating: string,
    social_rating: string,
    governance_rating: string,
    // transactions:TransactionApi[]
};