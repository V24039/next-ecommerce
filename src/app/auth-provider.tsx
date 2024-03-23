"use client";

import { createContext, useState } from "react";

interface AuthContextType {
  authenticated: boolean;
  setAuthValue: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  setAuthValue: () => {
    false;
  },
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const setAuthValue = (value: boolean) => {
    setAuthenticated(value);
  };

  return (
    <html>
      <body>
        <AuthContext.Provider value={{ authenticated, setAuthValue }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
