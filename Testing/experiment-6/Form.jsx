import { useState } from "react";

export default function FormExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Min 6 characters");
      return;
    }

    if (!checked) {
      setError("You must accept the terms");
      return;
    }

    setError("");
    alert("Form submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          aria-label="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          aria-label="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          Accept Terms
        </label>
      </div>

      <button type="submit">Login</button>

      {error && <p>{error}</p>}
    </form>
  );
}