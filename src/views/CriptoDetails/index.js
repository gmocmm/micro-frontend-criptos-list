import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import ErrorFallback from '../../components/ErrorFallback';

const MicroFrontendApp = React.lazy(() => import('GRAFHCRIPTOS/MicroFrontendApp'));

export default function CriptoDetails (props) {
  const { cripto } = useParams();

  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <MicroFrontendApp asset={ cripto } />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
