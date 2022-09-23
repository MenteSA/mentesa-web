import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { ILoginDto } from '../services/Auth/dtos/auth.dto';

interface ILayoutProps {
  children?: ReactNode;
}
export const USER_EMAIL = '@menteSa-UserEmail';
export const USER_JSON = '@menteSa-UserJson';

interface IUserContext {
  authenticatedUser: ILoginDto;
  setAuthenticatedUser(authenticatedUser: ILoginDto): void;
  isAdmin: boolean;
  saveEmail(email: string): void;
  getEmail(): string | null;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC<ILayoutProps> = ({ children }) => {
  const authenticatedUser = useMemo(() => {
    const json = localStorage.getItem(USER_JSON);
    if (json) {
      const user = JSON.parse(localStorage.getItem(USER_JSON)!);
      return user;
    }
  }, []);

  const isAdmin = useMemo(() => {
    return authenticatedUser?.role === 'ADMIN';
  }, [authenticatedUser]);

  const setAuthenticatedUser = useCallback((authenticatedUser: ILoginDto) => {
    localStorage.setItem(USER_JSON, JSON.stringify(authenticatedUser));
  }, []);

  const saveEmail = useCallback((email: string) => {
    localStorage.setItem(USER_EMAIL, email);
  }, []);

  const getEmail = useCallback(() => {
    return localStorage.getItem(USER_EMAIL);
  }, []);

  return (
    <UserContext.Provider
      value={{
        isAdmin,
        setAuthenticatedUser,
        authenticatedUser,
        saveEmail,
        getEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): IUserContext {
  const context = useContext(UserContext);

  return context;
}

export { UserProvider, useUser };
