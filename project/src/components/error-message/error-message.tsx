import { useAppSelector } from '../../hooks';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);
  return error ? <div className="error-msg">{error}</div> : null;
}

export default ErrorMessage;
