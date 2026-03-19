// Workouts.js
// Endpoint: -8000.app.github.dev/api/workouts/
import React from 'react';

const WORKOUTS_API = 'https://$CODESPACE_NAME-8000.app.github.dev/api/workouts/';

function Workouts() {
  return (
    <div>
      <h2>Workouts</h2>
      <p>API Endpoint: {WORKOUTS_API}</p>
    </div>
  );
}

export default Workouts;
