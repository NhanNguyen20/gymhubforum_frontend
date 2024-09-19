"use client";

import React, { useEffect, useState } from 'react';
import { PictureProps } from '@/types';

const Picture: React.FC<PictureProps> = ({ blob, alt, className }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [blob]);

  return (
    <div>
      <h2>Picture</h2>
      {blobUrl ? (
        <img src={blobUrl} alt={alt} className={className} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Picture;
