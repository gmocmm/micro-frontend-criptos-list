import React from 'react';

function ErrorFallback ({error, _}) {
  return (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
  );
}

export default ErrorFallback;
