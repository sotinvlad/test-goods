const deleteItemById = (id, items) => {
    const result = items.filter((item) => item.id !== id);
    return result;
};

export default deleteItemById;
