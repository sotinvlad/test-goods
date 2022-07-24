const getNameOfSortingFromType = (sortingBy) => {
    if (sortingBy === 'default') {
        return 'По умолчанию';
    }
    if (sortingBy === 'decrease') {
        return 'По убыванию';
    }
    if (sortingBy === 'increase') {
        return 'По возрастанию';
    }
};

export default getNameOfSortingFromType;
