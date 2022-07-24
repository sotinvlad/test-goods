const sortItems = (items, sortingBy) => {
    let newItems = [...items];
    if (sortingBy === 'default') {
        newItems = newItems.sort((a, b) => {
            return a.itemTitle.toUpperCase() > b.itemTitle.toUpperCase()
                ? 1
                : -1;
        });
    }
    if (sortingBy === 'increase') {
        newItems = newItems.sort((a, b) => {
            return Number(a.itemPrice) > Number(b.itemPrice) ? 1 : -1;
        });
    }
    if (sortingBy === 'decrease') {
        newItems = newItems.sort((a, b) => {
            return Number(a.itemPrice) < Number(b.itemPrice) ? 1 : -1;
        });
    }
    return newItems;
};

export default sortItems;
