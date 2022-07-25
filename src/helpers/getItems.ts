import defaultItems from '../assets/goods.json';

export interface IGoodItem {
    id: string;
    itemTitle: string;
    itemDescription: string;
    pictureLink: string;
    itemPrice: number;
}

const getItems = (): IGoodItem[] => {
    const items = localStorage.getItem('goods');
    if (items == null) {
        return defaultItems;
    }
    return JSON.parse(items);
};

export default getItems;
