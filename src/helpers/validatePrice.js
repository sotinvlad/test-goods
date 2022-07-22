const validatePrice = (price) => {
    price = price
        .toString()
        .split('')
        .filter((e) => (e >= '0' && e <= '9' ? true : false))
        .join('');
    return price;
};

export default validatePrice;
