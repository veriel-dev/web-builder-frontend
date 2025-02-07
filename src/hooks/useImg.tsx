import type React from 'react';
import { useState } from 'react'


// State types
type ImageState = File | Blob | null;
type PreviewUrlState = string | ArrayBuffer | null;
type IsDraggingState = boolean;
export const useImg = () => {

  const [image, setImage] = useState<ImageState>(null);
  const [previewUrl, setPreviewUrl] = useState<PreviewUrlState>(null);
  const [isDragging, setIsDragging] = useState<IsDraggingState>(false);


  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };


  const handleFiles = (files: FileList | Blob[]) => {
    if (files[0].type.startsWith('image/')) {
      setImage(files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };


  const removeImage = () => {
    setImage(null);
    setPreviewUrl('');
  };

  return {
    handleDrag,
    handleDragIn,
    handleDragOut,
    handleDrop,
    removeImage,
    handleFileSelect,
    image,
    previewUrl,
    isDragging
  }
}
