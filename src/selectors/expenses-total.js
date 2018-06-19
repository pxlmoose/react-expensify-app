export default () => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};