const initial_state = {
    by_age : '',
    by_category:'',
    products:[],
    searchproducts:[],
    product:{}
};

const Reducer = (state = initial_state, action) => {
    switch(action.type){
        case 'BYAGE':
                return Object.assign({}, state, {
                by_age:action.data.by_age,
        });
        case 'BYCATEGORY':
                return Object.assign({}, state, {
                by_category:action.data.by_category,
        });
        case 'PRODUCTS':
                return Object.assign({}, state,{
                products:action.data.products,
                searchproducts:action.data.products
        });
        case 'SEARCH':
                return Object.assign({}, state,{
                searchproducts:action.data.products
        });
        case 'THISPRODUCT':
                return Object.assign({}, state,{
                product:action.data.product
        });
    }
    return state;
}
export default Reducer;