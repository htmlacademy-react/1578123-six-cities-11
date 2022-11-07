import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatus,
    children: JSX.Element
}

export default function PrivateRoute ({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
    return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Root} />
}