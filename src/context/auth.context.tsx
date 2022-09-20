import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ILayoutProps {
  children?: ReactNode;
}

interface IAuthContext {
  isAuthenticated: boolean;
  verifyAuthentication(): void;
}

export const TOKEN_KEY = "@menteSa-Token";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<ILayoutProps> = ({ children }) => {
  const [tokenExists, setTokenExists] = useState<boolean>(
    () => localStorage.getItem(TOKEN_KEY) != null
  );

  const verifyAuthentication = useCallback(() => {
    setTokenExists(localStorage.getItem(TOKEN_KEY) != null);
  }, []);

  const isAuthenticated = useMemo(() => {
    return tokenExists;
  }, [tokenExists]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, verifyAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
