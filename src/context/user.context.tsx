import React, { createContext, ReactNode, useContext, useState } from "react";

interface ILayoutProps {
  children?: ReactNode;
}

interface IUserContext {
  name: string;
  professional: boolean;
  setUser(name: string, professional: boolean): void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC<ILayoutProps> = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [professional, setProfessional] = useState<boolean>(false);

  const setUser = (name: string, professional: boolean) => {
    setName(name);
    setProfessional(professional);
  };

  return (
    <UserContext.Provider value={{ name, professional, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): IUserContext {
  const context = useContext(UserContext);

  return context;
}

export { UserProvider, useUser };
