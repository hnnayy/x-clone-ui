"use client";
import React from "react";
import { Image } from "@imagekit/next";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt?: string;
  className?: string;
};

const urlEndpoint = "https://ik.imagekit.io/r88gseoed"; // Hanya endpoint, tanpa gambar

const ImageComponent = ({ path, w, h, alt, className }: ImageType) => {
  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={path}
      width={w}
      height={h}
      alt={alt || "Image"}
      className={className}
    />
  );
};

export default ImageComponent;

// Windows/Linux: Shift + Alt + F -> format multiline

