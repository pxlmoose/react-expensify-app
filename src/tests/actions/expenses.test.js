import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisistestuid';
const createMockStore = configureMockStore([thunk]);
const defaultAuthState = { auth: {uid } };

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

    test('should setup remove expense action object', () => {
        const action = removeExpense({ id: '123abc'});

        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        });
    });

    test('should remove expense from firebase', (done) => {
        const store = createMockStore(defaultAuthState);
        const id = expenses[2].id;
        store.dispatch(startRemoveExpense({ id })).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            });
            return database.ref(`users/ ${uid}/expenses/${id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
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

    test('should edit expense from firebase', (done) => {
        const store = createMockStore(defaultAuthState);
        const id = expenses[0].id;
        const updates = { amount: 21045 };
        store.dispatch(startEditExpense(id, updates)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });
            return database.ref(`users/${uid}expenses/${id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val().amount).toBe(updates.amount);
            done();
        });
    });

    test('should setup addExpense action object', () => {
        const action = addExpense(expenses[2]);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: expenses[2]
        });
    });
    //done will stop from resolving or rejecting untill done is called
    test('should add expense to data base and store', (done) => {
        const store = createMockStore(defaultAuthState);
        const expenseData = {
            description: 'ass',
            amount: 69,
            note: 'big',
            createdAt: 6969
        };
        store.dispatch(startAddExpense(expenseData)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return databse.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });

    test('should add expense with defaults to data base and store', (done) => {
        const store = createMockStore(defaultAuthState);
        const expenseDefaults = {
            description: '',
            note: '',
            amoutn: 0,
            createdAt: 0
        };
        store.dispatch(startAddExpense({})).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults
                }
            });

            return databse.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
    });

    test('should setup set expense action object with data', () => {
        const action = setExpenses(expenses);
        expect(action).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
    });

    test('should fetch expenses from firebase', (done) => {
        const store = createMockStore(defaultAuthState);

        store.dispatch(startSetExpenses()).then(() => {
            const actions = store.getAtcions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            });
            done();
        });
    });