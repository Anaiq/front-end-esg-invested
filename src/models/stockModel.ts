// create an interface (type object) that can be used throughout the application
export type Stock = {
    stockId: number,
    stockSymbol: string,
    environmentRating: string,
    socialRating: string,
    governanceRating: string
};