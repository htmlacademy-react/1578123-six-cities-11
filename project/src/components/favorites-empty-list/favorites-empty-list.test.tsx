import { render, screen } from '@testing-library/react';
import FavoritesEmptyList from './favorites-empty-list';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(<FavoritesEmptyList />);
    expect(screen.getByText('Nothing yet saved')).toBeInTheDocument();
  });
});
