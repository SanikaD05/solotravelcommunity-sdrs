import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  // Redirect to Cognito login if not authenticated
  if (!auth.isAuthenticated) {
    auth.signinRedirect(); // This sends user to Cognito hosted login page
    return <div>Redirecting to login...</div>;
  }

  return (
    <div>
      <h1>Welcome {auth.user.profile.email}</h1>
      {/* Your blog page content here */}
      <button onClick={() => auth.removeUser()}>Sign Out</button>
    </div>
  );
}

export default App;
