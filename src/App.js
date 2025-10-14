import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "<your-app-client-id>";
    const logoutUri = "https://main.d2e8e0ufe2zzmz.amplifyapp.com/";
    const cognitoDomain = "https://<your-user-pool-domain>.auth.eu-north-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  if (auth.isAuthenticated) {
    return (
      <div>
        <h2>Welcome, {auth.user?.profile.email}</h2>
        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in with Cognito</button>
    </div>
  );
}

export default App;
