// Test away!
import React from 'react';
import Controls from './Controls';
import { render, fireEvent } from '@testing-Library/react';

test('Buttons displayed',() =>{
const {getAllByRole} = render(<Controls />);
getAllByRole('button');



});
test('Button function name change',() => {
    const {getByText, rerender} = render(<Controls locked={true} closed={true} />);
    getByText(/Unlock Gate/i);
    getByText(/Open Gate/i);
    rerender(<Controls locked={false} closed={false} />);
    getByText(/Lock Gate/i);
    getByText(/Close Gate/i);
});

test('test toggle text change', () => {

    const{getByText, rerender} = render(<Controls locked={true} closed={true} />);
    const button = getByText(/Unlock Gate/i);
    fireEvent.click(button);
    getByText(/lock Gate/i);

});