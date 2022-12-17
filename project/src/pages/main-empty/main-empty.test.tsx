import { render, screen } from '@testing-library/react';
import MainEmpty from './main-empty';

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    render(<MainEmpty currentCity='Paris' />);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
