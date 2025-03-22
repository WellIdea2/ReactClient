import React, { ReactNode, useEffect, useState } from "react";

import { useAuth } from "../hooks/custom/useAuth";


interface InterceptorProviderProps {
  children: ReactNode;
}

const InterceptorProvider: React.FC<InterceptorProviderProps> = ({ children }) => {
  const { login, logout } = useAuth();
  const [isInterceptorReady, setIsInterceptorReady] = useState(false);

  useEffect(() => {
    // setupInterceptors({ login, logout });
    setIsInterceptorReady(true);
  }, [login, logout]);

  if (!isInterceptorReady) {
    return null;
  }

  return <>{children}</>;
};

export default InterceptorProvider;
