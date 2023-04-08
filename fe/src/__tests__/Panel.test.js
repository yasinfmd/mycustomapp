import {render, screen} from '@testing-library/react';
import Panel from '../components/Panel/Panel';

describe('Panel component', () => {
    it('should render title and children', () => {
        const title = 'My Panel';
        const content = <p>Panel content</p>;
        render(<Panel title={title}>{content}</Panel>);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText('Panel content')).toBeInTheDocument();
    });
});
