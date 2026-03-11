import React, { useState } from "react";
// Importing the 5 components from the components folder
import Button from "../components/Button";
import TextField from "../components/TextField";
import Select from "../components/Select";
import Rating from "../components/Rating";
import Checkbox from "../components/Checkbox";

function Home() {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("Light");
  const [showWidgets, setShowWidgets] = useState(true);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Welcome Home</h1>
      <p>Customize your dashboard settings using the components below.</p>

      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
        <h3>Dashboard Settings</h3>

        
        <TextField 
          label="Dashboard Name" 
          placeholder="e.g. My Workspace" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />

        
        <Select 
          label="Position" 
          options={["Manager", "Assistant", "Supervisor"]} 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)} 
        />

        
        <Checkbox 
          label="Show Quick Stats Widgets" 
          checked={showWidgets} 
          onChange={(e) => setShowWidgets(e.target.checked)} 
        />

        
        <Rating label="Rate the new layout" />

        
        <Button 
          text="Save Settings" 
          onClick={() => alert(`Settings Saved!\nName: ${username}\nTheme: ${theme}`)} 
        />
      </div>
    </div>
  );
}

export default Home;