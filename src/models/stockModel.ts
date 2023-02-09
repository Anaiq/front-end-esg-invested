// create an interface (type object) that can be used throughout the application
// import { Transaction } from "./transactionModel";

export type Stock = {
    stockId: number,
    stockSymbol: string,
    environmentRating: string,
    socialRating: string,
    governanceRating: string, 
    // transactions:Transaction[]
};