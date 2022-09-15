import { createContext, ReactNode, useContext, useState } from "react";

interface ILayoutProps {
  children?: ReactNode;
}

interface IAuthContext {
  logged: boolean;
  signIn(): void;
  signOut(): void;
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

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
