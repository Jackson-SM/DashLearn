import { render } from '../../test/test-utils';
import { Logo } from './Logo';

describe('Logo', () => {
  it('Should show in the document', () => {
    render(<Logo />);
  });
});
