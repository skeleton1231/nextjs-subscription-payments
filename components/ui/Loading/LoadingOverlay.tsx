// components/ui/LoadingOverlay.tsx
'use client';

import { useLoading } from '@/context/LoadingContext';

const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default LoadingOverlay;
