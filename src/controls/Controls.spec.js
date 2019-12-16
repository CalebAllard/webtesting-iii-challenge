// Test away!
import React from 'react';
import Controls from './Controls';
import { render } from '@testing-Library/react';

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
})