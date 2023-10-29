import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { WrapLayout } from './Layout.styled';

export default function Layout() {
  return (
    <WrapLayout>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </WrapLayout>
  );
}

// style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }
