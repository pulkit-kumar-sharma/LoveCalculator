import React, { lazy, Suspense } from 'react';

const LazyDisclaimer = lazy(() => import('./Disclaimer'));

const Disclaimer = props => (
  <Suspense fallback={null}>
    <LazyDisclaimer {...props} />
  </Suspense>
);

export default Disclaimer;
