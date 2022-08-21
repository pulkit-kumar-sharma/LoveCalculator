import React, { lazy, Suspense } from 'react';

const LazyLoveForm = lazy(() => import('./LoveForm'));

const LoveForm = props => (
  <Suspense fallback={null}>
    <LazyLoveForm {...props} />
  </Suspense>
);

export default LoveForm;
