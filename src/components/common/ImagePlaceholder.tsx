import React from 'react';
import './ImagePlaceholder.css';

interface ImagePlaceholderProps {
  type: 'chemical' | 'visual';
  aspectRatio: string;
  alt: string;
  imageUrl?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  type,
  aspectRatio,
  alt,
  imageUrl,
}) => {
  if (imageUrl) {
    return (
      <div
        className={`image-placeholder image-placeholder--${type} image-placeholder--with-image`}
        style={{ aspectRatio }}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="image-placeholder__img"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`image-placeholder image-placeholder--${type}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
    >
      <div className="image-placeholder__content">
        {type === 'chemical' && (
          <svg viewBox="0 0 100 100" className="placeholder-icon">
            <circle cx="30" cy="30" r="8" fill="currentColor" />
            <circle cx="70" cy="30" r="8" fill="currentColor" />
            <circle cx="50" cy="60" r="8" fill="currentColor" />
            <line
              x1="35"
              y1="33"
              x2="48"
              y2="56"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="65"
              y1="33"
              x2="52"
              y2="56"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}
        {type === 'visual' && <div className="placeholder-gradient" />}
      </div>
    </div>
  );
};
