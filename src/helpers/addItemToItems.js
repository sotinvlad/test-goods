const addItemToItems = (itemData, items) => {
    itemData.id = 'id' + new Date().getTime();
    return [itemData, ...items];
};

export default addItemToItems;
