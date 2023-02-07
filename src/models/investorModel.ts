// create an interface (type object) that can be used throughout the application
import { Transaction } from "./transactionModel";

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
    transactions:Transaction[]
};