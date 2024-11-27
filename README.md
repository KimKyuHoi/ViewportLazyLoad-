# React Viewport Lazy Load

A React component for lazy loading based on viewport visibility using Intersection Observer.

## Installation

```bash
npm install react-lazy-observer
# or
yarn add react-lazy-observer
```

## Features

Efficient lazy loading using Intersection Observer API
Customizable threshold values
Custom loading component support
Seamless integration with React.Suspense

## Usage

### Basic Usage

```
import { LazyLoad } from 'react-lazy-observer';
import { lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <LazyLoad>
      <HeavyComponent />
    </LazyLoad>
  );
}
```

### Custom Loading Component

```
import { LazyLoad } from 'react-lazy-observer';

function App() {
  return (
    <LazyLoad fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </LazyLoad>
  );
}
```

### Customizing LoadingView

The default LoadingView can be customized:

```
import { LoadingView } from 'react-lazy-observer';

<LoadingView size={32} /> // Adjust spinner size
```

## Props

| Prop       | Type        | Default           | Description                     |
| ---------- | ----------- | ----------------- | ------------------------------- |
| `children` | `ReactNode` | required          | Component to lazy load          |
| `fallback` | `ReactNode` | `<LoadingView />` | Component to show while loading |

### Examples

Basic Implementation

```
import { LazyLoad } from 'react-lazy-observer';
import { lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div style={{ minHeight: '200vh' }}>
      {/* Basic usage */}
      <LazyLoad>
        <HeavyComponent />
      </LazyLoad>

      {/* Custom threshold and loading */}
      <LazyLoad
        fallback={<div>Custom Loading...</div>}
      >
        <HeavyComponent />
      </LazyLoad>
    </div>
  );
}
```

### TypeScript Support

Full TypeScript support with included type definitions.

```
interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
```

### Browser Support

Supports all modern browsers that implement the Intersection Observer API.

### License

MIT
