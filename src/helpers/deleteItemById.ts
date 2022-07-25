import { IGoodItem } from './getItems';

const deleteItemById = (id: string, items: IGoodItem[]): IGoodItem[] => {
    const result = items.filter((item) => item.id !== id);
    return result;
};

export default deleteItemById;
