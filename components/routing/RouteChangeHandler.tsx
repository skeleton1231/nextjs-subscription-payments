// components/routing/RouteChangeHandler.tsx
'use client';

import { useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';
import { usePathname } from 'next/navigation';

export default function RouteChangeHandler() {
  const { setLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 延迟1秒以显示加载动画，可以根据需要调整
    return () => clearTimeout(timer);
  }, [pathname, setLoading]);

  return null;
}
