import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://eu-north-13wqfgaumb.auth.eu-north-1.amazoncognito.com",
  client_id: "1rvddogmhija1m6328u7r72rts", // Your App client ID
  redirect_uri: "https://main.d2e8e0ufe2zzmz.amplifyapp.com/", // Your Amplify domain
  response_type: "code",
  scope: "email openid phone", // Choose scopes you need
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
