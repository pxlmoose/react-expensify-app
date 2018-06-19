import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

    test('should setup remove expense action object', () => {
        const action = removeExpense({ id: '123abc'});

        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        });
    });

    test('should setup edit expense action object', () => {
        const action = editExpense('111aaa',  { note: 'new note val' });

        expect(action).toEqual({
            type: "EDIT_EXPENSE",
            id: '111aaa',
            updates: {
                note: "new note val"
            }       
        });
    });

    test('should setup addExpense action object', () => {
        const expenseData = {
            description: 'Rent',
            amount: 10000,
            createdAt: 1000,
            note: 'last months rent'
        };

        const action = addExpense(expenseData);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });
    });

    test('should setup addExpense action object with default values', () => {
        const expenseData = {};

        const action = addExpense(expenseData);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense : {
                description: '',
                note: '', 
                amount: 0, 
                createdAt: 0,
                id: expect.any(String)
            }
        });
    });



