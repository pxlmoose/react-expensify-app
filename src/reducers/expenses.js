const expensesReducerDefaultState = [];

// if it wasn't an export, you'd have to declate const expensesReducer = 
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
            ...state,
            action.expense
        ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, //takes a whole object
                        ...action.updates //overrides with new values
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

