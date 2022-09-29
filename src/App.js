import logo from "./logo.svg";
import "./App.css";

import LogInForm from "./components/LogInForm";
import PostList from "./components/PostList";

import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <PostList user={user} /> : <LogInForm setUser={setUser} />}
    </div>
  );
}

export default App;
