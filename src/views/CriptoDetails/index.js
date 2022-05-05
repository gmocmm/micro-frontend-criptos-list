import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import ErrorFallback from '../../components/ErrorFallback';

const MF2 = React.lazy(() => import('MF2/MF2'));

export default function CriptoDetails (props) {
  const { cripto } = useParams();

  return (
    <Fragment>
      <React.Suspense fallback='Loading ...'>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          <MF2 asset={ cripto } />
        </ErrorBoundary>
      </React.Suspense>
    </Fragment>
  );
}
