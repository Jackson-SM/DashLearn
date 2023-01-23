import { render, screen } from '../../test/test-utils';
import { Themes } from './Themes';

describe('Themes', () => {
  it('Should show theme component in the document', () => {
    render(<Themes />);

    expect(screen.getByText('Dark')).toBeInTheDocument();
  });
});
