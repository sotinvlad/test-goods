import { IGoodItem } from './getItems';

const addItemToItems = (
    itemData: IGoodItem,
    items: IGoodItem[],
): IGoodItem[] => {
    itemData.id = 'id' + new Date().getTime();
    return [itemData, ...items];
};

export default addItemToItems;
