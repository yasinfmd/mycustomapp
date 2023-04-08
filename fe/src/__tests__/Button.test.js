import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button component',()=>{
    test('button click should call the onClick function', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick} text="Click me!" />);
        fireEvent.click(getByText('Click me!'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('button should render with correct text', () => {
        const { getByText } = render(<Button onClick={() => {}} text="Test Button" />);
        const button = getByText('Test Button');
        expect(button).toBeInTheDocument();
    });
})
