import { render, screen } from '@testing-library/react';
import { lorem } from 'faker';
import { makeFakeUser } from '../../utils/mocks';
import Host from './host';

describe('Component: Host', () => {
  const fakeHost = makeFakeUser();
  const fakeDescription = lorem.words(10);
  it('should render correctly', () => {
    render(<Host host={fakeHost} description={fakeDescription} />);

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });
});
