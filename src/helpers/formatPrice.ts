const formatPrice = (price: string): string => {
    let stringPrice = price
        .toString()
        .split('')
        .reverse()
        .filter((e) => (e === ' ' ? false : true));
    let result: string[] = [];
    for (let i = 0; i < stringPrice.length; i++) {
        result.push(stringPrice[i]);
        if ((i + 1) % 3 === 0) {
            result.push(' ');
        }
    }
    result.reverse();
    return result.join('').trim();
};

export default formatPrice;
