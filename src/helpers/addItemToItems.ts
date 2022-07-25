import { IGoodItem } from './getItems';

const addItemToItems = (
    itemData: IGoodItem,
    items: IGoodItem[],
): IGoodItem[] => {
    return [itemData, ...items];
};

export default addItemToItems;
