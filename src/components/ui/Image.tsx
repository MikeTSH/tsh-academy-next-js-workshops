import React from 'react';
import NextImage from 'next/image';

export type ImageProps = {
  src: string;
  alt: string;
  sizes: string;
};

export const Image = ({ src, alt, sizes }: ImageProps) => {
  // TODO[PERF-2]: Optimize images
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
  // return <NextImage src={src} alt={alt} sizes={sizes} layout={'fill'} objectFit={'contain'} />;
};
