
import { Transaction } from './transactionModel'; //importing the Investor interface
import { Stock } from './stockModel'; //importing the Investor interface
import { Investor } from './investorModel';

// create an type object that can be used throughout the application
export type PortfolioStock = Transaction & Stock & Investor;
