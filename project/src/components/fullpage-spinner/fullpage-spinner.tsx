import styles from './fullpage-spinner.module.css';
import { SpinnerDotted } from 'spinners-react';
import { SPINNER_SIZES } from '../../const';

type FullPageSpinnerProps = {
  size: 'small' | 'big';
};

export function FullPageSpinner({ size }: FullPageSpinnerProps): JSX.Element {
  return (
    <div className={styles['fp-spinner']}>
      <SpinnerDotted color='#366CB6' size={SPINNER_SIZES[size]} />
    </div>
  );
}
