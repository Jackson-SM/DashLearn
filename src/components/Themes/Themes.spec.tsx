import { render, screen } from '../../test/test-utils';
import { Themes } from './Themes';
import userEvent from '@testing-library/user-event';

describe('Themes', () => {
  it('Should show Light theme', () => {
    render(<Themes />);

    expect(screen.getByText('Dark')).toBeInTheDocument();
  });
  it('Should be able change the theme with click', async () => {
    render(<Themes />);

    const themeButton = screen.getByText('Dark');

    await userEvent.click(themeButton);

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.queryByText('Dark')).not.toBeInTheDocument();
  });
});
