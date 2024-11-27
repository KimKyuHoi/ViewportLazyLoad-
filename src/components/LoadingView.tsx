import * as React from 'react';
import { Spinner } from './Spinner';

const LoadingView: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        minHeight: '1999',
        fontSize: '128px',
        width: '100%',
        padding: '80px 16px',
      }}
    >
      <Spinner />
    </div>
  );
};

export default LoadingView;
