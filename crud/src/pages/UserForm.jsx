// src/pages/UserForm.jsx
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function UserForm() {
  const { users, addUser, updateUser } = useContext(UserContext);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { id } = useParams();     // Captures URL parameters (e.g. '1' from /edit/1)

  // Boolean flag: true if editing existing user, false if adding new
  const isEditing = Boolean(id);

  // Controlled input form state
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Load existing data if editing
  useEffect(() => {
    if (isEditing) {
      const foundUser = users.find((u) => u.id === Number(id));
      if (foundUser) setFormData(foundUser);
    }
  }, [id, users, isEditing]);

  // Handle typing inside input fields dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page from reloading

    if (isEditing) {
      updateUser(formData); // Execute Update
    } else {
      addUser(formData);    // Execute Create
    }

    navigate("/"); // Navigate back to list view
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <h2>{isEditing ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? "Update User" : "Save User"}</button>
      </form>
    </div>
  );
}