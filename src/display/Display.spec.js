// Test away!
import React from 'react';
import Display from './Display';

import { render } from '@testing-library/react';

test('Display is displaying correctly', () => {
    const {getByText, rerender} = render(<Display locked={true} closed={true} />);
    getByText(/locked/i);
    getByText(/Closed/i);
    rerender(<Display locked={false} closed={false} />);
    getByText(/Unlocked/i);
    getByText(/Open/i);

});