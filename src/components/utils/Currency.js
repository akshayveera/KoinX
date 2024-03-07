
// this converts 123456789 to 123,456,789
export function UsformatCommas(number) {
    const numberString = number.toString();
  
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    return formattedNumber;
}

// this converts 123456789 to 12,34,56,789
export function IndformatCommas(number) {
    const numberString = number.toString();
  
    const formattedNumber = numberString.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  
    return formattedNumber;
}
