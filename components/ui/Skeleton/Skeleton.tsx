// components/ui/Skeleton.tsx
import React from 'react';
import classNames from 'classnames';

const Skeleton = ({ className }: { className: string }) => {
  return (
    <div className={classNames("animate-pulse bg-gray-300", className)} />
  );
};

export default Skeleton;
