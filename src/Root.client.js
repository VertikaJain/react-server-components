import {useState, Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {useServerResponse} from './Cache.client';
import {LocationContext} from './LocationContext.client';

export default function Root({initialCache}) {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={Error}>
        <Content />
      </ErrorBoundary>
    </Suspense>
  );
}

function Content() {
  const [location, setLocation] = useState({});
  const response = useServerResponse(location);
  return (
    <LocationContext.Provider value={[location, setLocation]}>
      {response.readRoot()}
    </LocationContext.Provider>
  );
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
    </div>
  );
}
