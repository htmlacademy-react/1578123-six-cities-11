import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthorizationData } from '../../types/authorization-data';

import styles from './login-form.module.css';
import classNames from 'classnames';

import Spinner from '../spinner/spinner';

type FieldProps = {
  value: string;
  error: boolean;
  errorText: string;
  regex: RegExp;
};

type FormStateProps = {
  [key: string]: FieldProps;
};

const formFields = {
  email: 'E-mail',
  password: 'Password',
};

const initialFormState = {
  email: {
    value: '',
    error: false,
    errorText: 'Please, enter a correct E-mail address!',
    regex: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/
  },
  password: {
    value: '',
    error: false,
    errorText: 'Please, enter a correct password that contains at least more than one letter/number!',
    regex: /[a-zA-Z][0-9]|[0-9][a-zA-Z]/
  },
};

function LoginForm(): JSX.Element {
  const [formState, setFormState] = useState<FormStateProps>(initialFormState);

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoginDataLoading);

  const onSubmit = (authData: AuthorizationData) =>
    dispatch(loginAction(authData));

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      email: formState.email.value,
      password: formState.password.value,
    });
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;

    const isFieldValid = rule.test(value);

    setFormState({
      ...formState,
      [name]: { ...formState[name], value, error: !isFieldValid },
    });
  };

  const isFormValid = Object.values(formState).reduce((acc, { value, error }) => {
    acc = Boolean(value) && !error;

    return acc;
  }, false);

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      {Object.entries(formFields).map(([name, label]) => {
        const { error, errorText, value } = formState[name];

        const inputClass = classNames('login__input form__input', {
          [`${styles.error}`]: error,
        });

        return (
          <div className="login__input-wrapper form__input-wrapper" key={name}>
            <label className="visually-hidden">{label}</label>
            {error && (
              <span className={styles.errorText}> {errorText} </span>
            )}
            <input
              className={inputClass}
              type={name}
              name={name}
              placeholder={label}
              value={value}
              onChange={handleInputChange}
            />
          </div>
        );
      })}
      <button className="login__submit form__submit button" type="submit" disabled={!isFormValid || isLoading}>
        {isLoading ? <Spinner size="small" /> : 'Sign in'}
      </button>
    </form>
  );
}

export default LoginForm;
