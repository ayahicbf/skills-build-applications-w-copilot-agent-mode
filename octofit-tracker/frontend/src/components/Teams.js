// Teams.js
// Endpoint: -8000.app.github.dev/api/teams/
import React from 'react';

const TEAMS_API = 'https://$CODESPACE_NAME-8000.app.github.dev/api/teams/';

function Teams() {
  return (
    <div>
      <h2>Teams</h2>
      <p>API Endpoint: {TEAMS_API}</p>
    </div>
  );
}

export default Teams;
