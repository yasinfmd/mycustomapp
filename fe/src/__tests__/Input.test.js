import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/Input/Input';

describe('Input component', () => {
    test('renders with correct label', () => {
        const label = 'Name';
        render(<Input label={label} value="" onChange={() => {}} />);
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });

    test('calls onChange handler when input value changes', () => {
        const onChange = jest.fn();
        const inputValue = 'John';
        render(<Input label="Name" value={inputValue} onChange={onChange} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'Jane' } });
        expect(onChange).toHaveBeenCalledWith('Jane');
    });

    test('should render with default type text', () => {
        const mockOnChange = jest.fn();
        const mockValue = 'John Doe';
        render(<Input value={mockValue} onChange={mockOnChange} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement.type).toBe('text');
    });

    test('sets input placeholder correctly', () => {
        const placeholder = 'Enter your name';
        render(<Input label="Name" value="" onChange={() => {}} placeHolder={placeholder} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveAttribute('placeholder', placeholder);
    });

});
