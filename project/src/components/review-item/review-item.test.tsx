import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../utils/mocks';
import ReviewItem from './review-item';

describe('Component: ReviewItem', () => {
  const fakeReview = makeFakeComment();
  it('should render correctly', () => {
    render(<ReviewItem review={fakeReview} />);

    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
