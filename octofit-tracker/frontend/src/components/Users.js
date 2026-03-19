// Users.js
// Endpoint: -8000.app.github.dev/api/users/
import React from 'react';

const USERS_API = 'https://$CODESPACE_NAME-8000.app.github.dev/api/users/';

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <p>API Endpoint: {USERS_API}</p>
    </div>
  );
}

export default Users;
