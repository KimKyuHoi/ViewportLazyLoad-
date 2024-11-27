import * as React from 'react';
import LoadingView from './LoadingView';

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

function LazyLoad({ children, fallback = <LoadingView /> }: LazyLoadProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const observerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection ratio:', entry.intersectionRatio);
          // isIntersecting becomes true only when the threshold is 0.3 or higher.
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Must be visible at least 30% to load
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={observerRef}>
      {isVisible ? (
        <React.Suspense fallback={fallback}>{children}</React.Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}

export default LazyLoad;
