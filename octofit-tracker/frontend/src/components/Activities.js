// Activities.js
// Endpoint: -8000.app.github.dev/api/activities/
import React from 'react';

const ACTIVITIES_API = 'https://$CODESPACE_NAME-8000.app.github.dev/api/activities/';

function Activities() {
  return (
    <div>
      <h2>Activities</h2>
      <p>API Endpoint: {ACTIVITIES_API}</p>
    </div>
  );
}

export default Activities;
