import { createContext, ReactNode, useContext, useState } from "react";
import {
  IAuthResponseDto,
  IRefreshTokenDto,
} from "../services/Auth/dtos/auth.dto";

interface ILayoutProps {
  children?: ReactNode;
}

interface IAuthContext {
  logged: boolean;
  signIn(userResponse: IAuthResponseDto): void;
  signOut(email: string): void;
  register(name: string, email: string, password: string): void;
  getToken(): string | null;
  getRefreshToken(): string | null;
  getUserEmail(): string | null;
}

export const TOKEN_KEY = "@menteSa-Token";
export const REFRESH_TOKEN = "@menteSa-RefreshTokem";
export const USER_EMAIL = "@menteSa-UserEmail";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<ILayoutProps> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);

  const signIn = (userResponse: IAuthResponseDto) => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN);

    localStorage.setItem(
      TOKEN_KEY,
      JSON.stringify(userResponse.accessToken.token)
    );
    localStorage.setItem(
      REFRESH_TOKEN,
      JSON.stringify(userResponse.accessToken.refresh_token)
    );
    localStorage.setItem(USER_EMAIL, JSON.stringify(userResponse.login.email));

    setLogged(true);
  };

  const signOut = (email: string) => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN);
    setLogged(false);
  };

  const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

  const getToken = () => localStorage.getItem(TOKEN_KEY);
  const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
  const getUserEmail = () => localStorage.getItem(USER_EMAIL);

  const register = (name: string, email: string, password: string) => {};

  const refreshToken = (refreshToken: IRefreshTokenDto) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(refreshToken.token));
  };

  return (
    <AuthContext.Provider
      value={{
        logged,
        signIn,
        signOut,
        register,
        getToken,
        getRefreshToken,
        getUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
