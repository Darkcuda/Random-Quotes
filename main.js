const partOne = ['Today is the', 'Yesterday was the', 'Tomorrow will be the'];
const number = Math.floor(Math.random() * 28);
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const assembleQuotes = (first, second, third) => {
    let ranOne = Math.floor(Math.random() * 3);
    let ranMonth = Math.floor(Math.random() * 12);
    let quotes = [first[ranOne], second, third[ranMonth] ];
    console.log(quotes.join(' '));
}

assembleQuotes(partOne, number, month);