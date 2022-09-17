import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../services/Auth/dtos/authResponse.dto";

interface ILayoutProps {
  children?: ReactNode;
}

interface IAuthContext {
  logged: boolean;
  signIn(): void;
  signOut(): void;
  register(name: string, email: string, password: string): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<ILayoutProps> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);

  const signIn = () => {
    setLogged(true);
  };

  const signOut = () => {
    setLogged(false);
  };

  const register = (name: string, email: string, password: string) => {};

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
