import { IQuotes } from '../data/quote-data';

export const randomQuote = (quotes: IQuotes[]) => {
    const amountOfQuotes = quotes.length;
    const randomQuoteNumber = getRandomInt(0, amountOfQuotes);
    return quotes[randomQuoteNumber];
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};
