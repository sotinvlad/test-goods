import { IGoodItem } from './../helpers/getItems';
import { useState } from 'react';
const useFormState = (
    addItem: (item: IGoodItem) => void,
    setShowNotification: (showNotification: boolean) => void,
) => {
    const [itemTitle, setItemTitle] = useState<string>('');
    const [itemDescription, setItemDescription] = useState<string>('');
    const [pictureLink, setPictureLink] = useState<string>('');
    const [itemPrice, setItemPrice] = useState<string>('');
    const [touched, setTouched] = useState<boolean[]>([false, false, false]);
    const onInputClick = (id: number) => {
        let newTouched = [...touched];
        newTouched[id] = true;
        setTouched(newTouched);
    };
    const onSubmit = () => {
        const itemData = {
            itemTitle: itemTitle,
            itemDescription: itemDescription,
            pictureLink: pictureLink,
            itemPrice: Number(itemPrice),
            id: 'id' + new Date().getTime(),
        };
        addItem(itemData);
        setItemTitle('');
        setItemDescription('');
        setPictureLink('');
        setItemPrice('');
        setTouched([false, false, false]);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 1000);
    };
    return {
        itemTitle,
        setItemTitle,
        itemDescription,
        setItemDescription,
        pictureLink,
        setPictureLink,
        itemPrice,
        setItemPrice,
        touched,
        onInputClick,
        onSubmit,
    };
};

export default useFormState;
