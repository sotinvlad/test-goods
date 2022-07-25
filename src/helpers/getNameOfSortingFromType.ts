const getNameOfSortingFromType = (
    sortingBy: 'default' | 'decrease' | 'increase',
): string => {
    if (sortingBy === 'decrease') {
        return 'По убыванию';
    }
    if (sortingBy === 'increase') {
        return 'По возрастанию';
    }
    return 'По умолчанию';
};

export default getNameOfSortingFromType;
