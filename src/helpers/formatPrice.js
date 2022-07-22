const formatPrice = (price) => {
    let stringPrice = price
        .toString()
        .split('')
        .reverse()
        .filter((e) => (e === ' ' ? false : true));
    let result = [];
    for (let i = 0; i < stringPrice.length; i++) {
        result.push(stringPrice[i]);
        if ((i + 1) % 3 === 0) {
            result.push(' ');
        }
    }
    result.reverse();
    result = result.join('').trim();
    return result;
};

export default formatPrice;
