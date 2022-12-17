import { render, screen } from '@testing-library/react';
import PageNotFound from './page-404';

describe('Component: PageNotFound', () => {
  it('should render correctly', () => {
    render(<PageNotFound />);

    expect(screen.getByText('404 - Page not found')).toBeInTheDocument();
  });
});
