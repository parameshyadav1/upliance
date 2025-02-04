import React, { useState, useEffect } from "react";

const Counter = () => {
  // Load counter value from Local Storage or default to 0
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("counter")) || 0;
  });

  // Save counter value to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  // Reset counter to 0
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: `rgba(0, 150, 255, ${Math.min(count * 0.05, 1)})`,
      }}
    >
      <h2 style={styles.counterText}>Counter: {count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => setCount(count + 1)} style={styles.button}>Increment</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)} style={styles.button}>Decrement</button>
        <button onClick={resetCounter} style={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    transition: "background 0.5s ease-in-out",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  },
  buttonContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    transition: "transform 0.2s ease, background 0.3s",
  },
  resetButton: {
    padding: "12px 20px",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#FF3B3B",
    color: "#fff",
    transition: "transform 0.2s ease, background 0.3s",
  },
};

export default Counter;
