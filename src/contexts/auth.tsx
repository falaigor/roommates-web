import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  };
};

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const signInUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${client_id}&cliente_secrete=${client_secret}&scope=profile&redirect_uri=${redirect_uri}`;

  async function signIn(googleAccessToken: string) {
    const response = await api.post<AuthResponse>("authenticate", {
      accessToken: googleAccessToken,
    });

    const { token, user } = response.data;

    localStorage.setItem("@roommate:token", token);
    setUser(user);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("@roommate:token");
  }

  useEffect(() => {
    const token = localStorage.getItem("@roommate:token");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get<User>("profile").then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGoogleToken = url.includes("#access_token=");

    if (hasGoogleToken) {
      const [urlWithoutAccessToken, urlParams] = url.split("#access_token=");

      var regex = /\s*&\s*/;
      var googleAccessToken = urlParams.split(regex, 1);

      window.history.pushState({}, "", urlWithoutAccessToken);

      signIn(String(googleAccessToken));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
