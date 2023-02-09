
import { Transaction } from './transactionModel'; //importing the Investor interface
import { Stock } from './stockModel'; //importing the Investor interface

// create an type object that can be used throughout the application
export type PortfolioStock = Transaction & Stock;

