import { screen } from '@testing-library/react';
import { render } from '../../test/test-utils';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('Should be able show navbar in the document', () => {
    render(<Navbar />);

    expect(screen.getByText('DashL')).toBeInTheDocument();
  });
});
