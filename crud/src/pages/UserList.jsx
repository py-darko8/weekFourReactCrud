import {useContent} from "react"
import {link} from "react-router-dom"
import{UserContext} from "../context/UserContext"

export default function UserList(){
    //Extract state array and delete function from UserContext
    const{users, deleteUser} = useContext(UserContext)

    return (
    <div style={{ padding: "1rem" }}>
      <h2>User Directory (Read & Delete)</h2>

      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map turns each user object into a table row */}
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* UPDATE link navigates to edit page with dynamic ID */}
                  <Link to={`/edit/${user.id}`}>
                    <button style={{ marginRight: "0.5rem" }}>Edit</button>
                  </Link>

                  {/* DELETE button calls context delete function */}
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
