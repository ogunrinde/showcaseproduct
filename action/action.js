
export const byAge = (data) => {
    return {
        type: 'BYAGE',
        data:data
    }
};
export const byCategory = (data) => {
    return {
        type: 'BYCATEGORY',
        data:data
    }
};
export const products = (data) => {
    return {
        type: 'PRODUCTS',
        data:data
    }
};
export const search = (data) => {
    return {
        type: 'SEARCH',
        data:data
    }
};
export const thisproduct = (data) => {
    return {
        type: 'THISPRODUCT',
        data:data
    }
};