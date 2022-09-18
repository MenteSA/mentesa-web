import { createContext, ReactNode, useCallback, useContext } from "react";

interface ILayoutProps {
  children?: ReactNode;
}

interface IAuthContext {
  isAuthenticated(): boolean;
}

export const TOKEN_KEY = "@menteSa-Token";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<ILayoutProps> = ({ children }) => {
  const isAuthenticated = useCallback(() => {
    return localStorage.getItem(TOKEN_KEY) != null;
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
