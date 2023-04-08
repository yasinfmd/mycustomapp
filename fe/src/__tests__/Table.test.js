import { render } from '@testing-library/react';
import Table from "../components/Table/Table";

const headers = [
    { key: 'name', value: 'Name' },
    { key: 'age', value: 'Age' },
    { key: 'email', value: 'Email' },
];

const data = [
    {  name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Doe', age: 30, email: 'doe@example.com' },
    { name: 'Yasin', age: 35, email: 'yasin@example.com' },
];


describe('Table component', () => {
    it('renders table headers and data correctly', () => {
        const { getByText } = render(<Table headers={headers} data={data} title="User List" />);
        headers.forEach((header) => {
            expect(getByText(header.value)).toBeInTheDocument();
        });
        data.forEach((row) => {
            Object.values(row).forEach((value) => {
                expect(getByText(String(value))).toBeInTheDocument();
            });
        });
    });

    it('renders the correct title', () => {
        const { getByText } = render(<Table headers={headers} data={data} title="User List" />);
        expect(getByText('User List')).toBeInTheDocument();
    });
});
