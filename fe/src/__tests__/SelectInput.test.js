import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectInput from '../components/SelectInput/Selectınput';

describe('SelectInput component', () => {
    const mockOptions = [
        { key: '1', value: 'Option 1' },
        { key: '2', value: 'Option 2' },
        { key: '3', value: 'Option 3' },
    ];

    test('renders the label correctly', () => {
        const { getByText } = render(<SelectInput label="Test Label" data={mockOptions} />);
        expect(getByText('Test Label')).toBeInTheDocument();
    });


    test('renders the options correctly', () => {
        const { getByText } = render(<SelectInput label="Test Label" data={mockOptions} />);
        const selectButton = getByText('Please Select');
        fireEvent.click(selectButton);
        mockOptions.forEach(option => {
            expect(getByText(option.value)).toBeInTheDocument();
        });
    });


});
