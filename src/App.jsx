import React, { useState } from "react";
import axios from "axios";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();

      const { data } = await axios.post(
        "https://auth-backend-alpha.vercel.app/api/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>{isLoading ? "loading..." : null}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
