import React, { lazy } from 'react';
import { LazyLoad } from 'react-lazy-observer';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div style={{ minHeight: '200vh' }}>
      <h1>Scroll down to see lazy loaded component</h1>

      {/* 스크롤해서 보이는 영역에 배치 */}
      <div style={{ marginTop: '150vh' }}>
        <LazyLoad>
          <HeavyComponent />
        </LazyLoad>
      </div>
    </div>
  );
}

export default App;
