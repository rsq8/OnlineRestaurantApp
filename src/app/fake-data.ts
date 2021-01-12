import { Menu } from './types';
import { Options } from './types';

export const fakeMenu: Menu[] = [{
    id: '110',
    name: 'Jollof Rice',
    description: '1 hour delivery time',
    price: '700',
}, {
    id: '112',
    name: 'Fried Rice',
    description: '3 hours delivery time',
    price: "1050",
}, {
    id: '114',
    name: 'Beans porridge',
    description: '0.5 hours delivery time',
    price: "800",
}];

export const fakeMyMenu: Menu[] = [{
    id: '210',
    name: 'fried Plantain',
    description: '2 hours delivery time',
    price: "500",
}, {
    id: '212',
    name: 'pepper soup',
    description: '45 mins delivery time',
    price: '2500',
}, {
    id: '214',
    name: 'moin-moin',
    description: '30 mins delivery time',
    price: '700',
}];

export const fakeServices: Options[] = [
    {
        id: '510',
        name: 'food'
    }, {
        id: '512',
        name: 'laundry'
    }, {
        id: '514',
        name: 'pharmacy'
    }, {
        id: '516',
        name: 'groceries'
    }];

export const fakeCities: Options[] = [
    {
        id: '310',
        name: 'Lagos'
    }, {
        id: '312',
        name: 'Abuja'
    }, {
        id: '314',
        name: 'Ibadan'
    }, {
        id: '316',
        name: 'Uyo'
    }];

export const fakeRestaurants: Options[] = [
    {
        id: '410',
        name: `chop'n'go`
    }, {
        id: '412',
        name: 'sweet catering'
    }, {
        id: '414',
        name: 'best food'
    }];

