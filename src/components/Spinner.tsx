import React from 'react';

type Props = {
  size?: number;
};

export const Spinner = ({ size = 24 }: Props) => {
  return (
    <div
      style={{
        border: '4px solid rgba(177, 177, 177, 0.01)',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        borderLeftColor: '#999',
        animation: 'spin 1s linear infinite',
      }}
    />
  );
};

// 스타일을 head에 추가
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(styleSheet);
