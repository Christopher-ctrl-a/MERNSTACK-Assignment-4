export default function TableComponent({ users, deleteUser }) {
  if (!users || users.length === 0) {
    return <p>No users to display</p>;
  }

  return (
    <div>
      <h2>Users Table</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
            </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}
