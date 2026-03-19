// Leaderboard.js
// Endpoint: -8000.app.github.dev/api/leaderboard/
import React from 'react';

const LEADERBOARD_API = 'https://$CODESPACE_NAME-8000.app.github.dev/api/leaderboard/';

function Leaderboard() {
  return (
    <div>
      <h2>Leaderboard</h2>
      <p>API Endpoint: {LEADERBOARD_API}</p>
    </div>
  );
}

export default Leaderboard;
