const uniqueItems = (items, field) => {
  try {
    if (typeof items !== 'object' || !items || typeof items === 'function') {
      throw new TypeError('first parameter must be an object');
    }
    items.forEach((elem) => {
      if (!Object.keys(elem).includes(field)) {
        throw new Error('object keys must contain field');
      }
    });

    const unique = [];
    items.forEach((element) => {
      if (unique.length === 0) {
        unique.push(element);
      } else {
        const func = (elem) => elem[field] === element[field];
        const exists = unique.some(func);
        if (!exists) {
          unique.push(element);
        }
      }
    });
    return unique;
  } catch (e) {
    return null;
  }
};

export default uniqueItems;
