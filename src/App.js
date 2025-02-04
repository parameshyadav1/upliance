import React from "react";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";



import "./styles/App.css";

function App() {
  return (
  
    <div className="app-container">
      <h1>React Web Application</h1>
      <Counter />

      <UserForm />
      
    
      {/* <TextEditor /> */}
    </div>
    
  );
}

export default App;
