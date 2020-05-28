const initializeState = function () {
    return {
        categories: [{ id: 1, title: 'HR' }, { id: 2, title: 'Law' }],
        jobTypes: [],
        tags: [],

    };
};

const ListReducer = (state = initializeState(), action) => {
    let newById = {};
    switch (action.type) {
        case 'UPDATE_CATEGORIES': {
            debugger
            var categories = state.categories;
            categories.push(action.payload.category);
            return {
                ...state,
                categories: categories
            };
        }
        case 'GET_CONTACTS': {
            // ...
        }
        default: {
            return state;
        }
    }
};

export default ListReducer;