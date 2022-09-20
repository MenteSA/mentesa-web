import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ILoginDto } from "../services/Auth/dtos/auth.dto";

interface ILayoutProps {
  children?: ReactNode;
}
export const USER_EMAIL = "@menteSa-UserEmail";

interface IUserContext {
  authenticatedUser: ILoginDto;
  setAuthenticatedUser(authenticatedUser: ILoginDto): void;
  isAdmin: boolean;
  saveEmail(email: string): void;
  getEmail(): string | null;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC<ILayoutProps> = ({ children }) => {
  const [user, setUser] = useState<ILoginDto>({} as ILoginDto);

  const isAdmin = useMemo(() => {
    return user.role === "ADMIN";
  }, [user]);

  const authenticatedUser = useMemo(() => {
    return user;
  }, [user]);

  const setAuthenticatedUser = useCallback((authenticatedUser: ILoginDto) => {
    setUser(authenticatedUser);
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
