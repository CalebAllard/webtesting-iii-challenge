// Test away
import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from './Dashboard';



test('Lock Gate & Close Gate Button Displays', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/Lock Gate/i);
    getByText(/Close Gate/i);
});
test('Display is showing', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/Open/i);
    getByText(/Unlocked/i);
});