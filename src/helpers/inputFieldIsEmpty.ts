const inputFieldIsEmpty = (field: string): boolean => {
    if (field === '') {
        return true;
    }
    return false;
};

export default inputFieldIsEmpty;
