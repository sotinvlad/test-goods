const validatePrice = (price: string): string => {
    const validPrice = price
        .toString()
        .split('')
        .filter((e) => (e >= '0' && e <= '9' ? true : false))
        .join('');
    return validPrice;
};

export default validatePrice;
