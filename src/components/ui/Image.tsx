import React, { HTMLAttributes, useState } from 'react';
import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import { ImagePlaceholder } from './imagePlaceholder/ImagePlaceholder';

type ImageOwnProps = HTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export type ImageProps = NextImageProps & ImageOwnProps;

export const Image = ({ src, fallback, ...rest }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  if (hasError && !fallback) {
    return <ImagePlaceholder />;
  }

  const onError = (error: object) => {
    if (error) {
      setHasError(true);

      if (fallback) {
        setImgSrc(fallback);
      }
    }
  };

  return <NextImage {...rest} src={imgSrc as string} onError={onError} />;
};

Image.defaultProps = {
  layout: 'fill',
  objectFit: 'contain',
};
