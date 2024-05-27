import type { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

type TProps = {
  isAuthorised: boolean;
  redirectPath: string;
};

//для будущей регистрации пользователей
export const ProtectedRoutes: FC<TProps> = ({
  isAuthorised,
  redirectPath = './',
}: TProps) => {
  return isAuthorised ? <Outlet /> : <Navigate to={redirectPath} />;
};
