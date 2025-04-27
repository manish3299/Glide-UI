import * as React from "react";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
};

export default Avatar;
