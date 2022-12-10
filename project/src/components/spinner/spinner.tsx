import { SpinnerDotted } from 'spinners-react';
import { SPINNER_SIZES } from '../../const';

type SpinnerProps = {
    size: 'small' | 'big';
};

function Spinner({ size }: SpinnerProps): JSX.Element {
  return <SpinnerDotted color='#366CB6' size={SPINNER_SIZES[size]} />;
}

export default Spinner;
