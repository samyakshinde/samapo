
import { Driver, Transaction } from './types';

export const APP_TITLE = 'AutoMap';

export const MOCK_DRIVERS: Omit<Driver, 'location'>[] = [
  { id: 1, name: 'Ravi Kumar', rating: 4.8, eta: 3, vehicle: 'TVS Auto' },
  { id: 2, name: 'Suresh Patel', rating: 4.9, eta: 5, vehicle: 'Bajaj RE' },
  { id: 3, name: 'Anil Singh', rating: 4.7, eta: 6, vehicle: 'Piaggio Ape' },
  { id: 4, name: 'Deepak Sharma', rating: 4.6, eta: 8, vehicle: 'Mahindra Alfa' },
  { id: 5, name: 'Vikram Reddy', rating: 4.8, eta: 9, vehicle: 'TVS Auto' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 'TXN001', driverName: 'Ravi Kumar', date: '2024-07-30', amount: 150.00, commission: 15.00 },
    { id: 'TXN002', driverName: 'Suresh Patel', date: '2024-07-30', amount: 220.50, commission: 22.05 },
    { id: 'TXN003', driverName: 'Anil Singh', date: '2024-07-30', amount: 95.75, commission: 9.58 },
    { id: 'TXN004', driverName: 'Ravi Kumar', date: '2024-07-30', amount: 180.00, commission: 18.00 },
    { id: 'TXN005', driverName: 'Deepak Sharma', date: '2024-07-30', amount: 310.20, commission: 31.02 },
    { id: 'TXN006', driverName: 'Vikram Reddy', date: '2024-07-30', amount: 165.00, commission: 16.50 },
    { id: 'TXN007', driverName: 'Suresh Patel', date: '2024-07-30', amount: 125.00, commission: 12.50 },
];
