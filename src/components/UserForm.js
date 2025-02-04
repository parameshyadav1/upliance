import React, { useState, useEffect } from "react";
import "./UserForm.css"; // Import external CSS file

const UserForm = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [formData, setFormData] = useState({
    userId: `UID-${Date.now()}`,
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Do you really want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = [...users, formData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("User data saved successfully!");

    setFormData({
      userId: `UID-${Date.now()}`,
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    setIsDirty(false);
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">User Information Form</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <label>User ID (Auto-Generated)</label>
        <input type="text" value={formData.userId} readOnly className="input-field" />

        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field" />

        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required className="input-field" />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-field" />

        <button type="submit" className="submit-btn">Save</button>
      </form>

      <h3 className="saved-users-heading">Saved Users</h3>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <strong>{user.userId}</strong> - {user.name} - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
