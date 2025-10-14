import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const handleLogin = () => {
    // Temporary login simulation (we’ll connect AWS Cognito later)
    setUser("demoUser");
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handlePost = () => {
    if (post.trim() !== "") {
      setPosts([...posts, { text: post, date: new Date().toLocaleString() }]);
      setPost("");
    }
  };

  if (!user) {
    return (
      <div className="App">
        <h1>SoloTravelCommunity - SDRS</h1>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Login (Temporary)</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>SoloTravelCommunity - SDRS</h1>
      <h2>Welcome, {user}</h2>
      <button onClick={handleLogout}>Logout</button>
      <hr />

      <h3>Post Your Travel Blog</h3>
      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Share your travel story..."
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handlePost}>Post</button>

      <h3>Your Posts</h3>
      <ul>
        {posts.map((p, i) => (
          <li key={i}>
            <strong>{p.date}</strong>: {p.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
