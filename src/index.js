import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

// Cognito OIDC configuration
const cognitoAuthConfig = {
  authority: "https://<your-user-pool-domain>.auth.eu-north-1.amazoncognito.com",
  client_id: "<your-app-client-id>",
  redirect_uri: "https://main.d2e8e0ufe2zzmz.amplifyapp.com/",
  response_type: "code",
  scope: "openid email profile",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
