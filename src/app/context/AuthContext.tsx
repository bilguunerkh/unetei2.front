import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    const hereglegch = localStorage.getItem("user");
    const hugatsaa = localStorage.getItem("token");
    if (hereglegch) {
      setUser(JSON.parse(hereglegch));
    }
    setToken(hugatsaa);
  }, []);
  const setUserData = (data: any) => {
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
  };
  const logout = () => {
    console.log("logout processing");
    setUser(null);
    setToken(null);
    localStorage.clear();
    console.log("logout process end");
  };
  return (
    <AuthContext.Provider
      value={{
        logout,
        setUser,
        user,
        setToken,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
