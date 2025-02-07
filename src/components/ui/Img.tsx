import { Upload, X } from "lucide-react";

import { useImg } from "../../hooks/useImg";

export const Img = () => {
  const {
    handleDrag,
    handleDragIn,
    handleDragOut,
    handleDrop,
    removeImage,
    handleFileSelect,
    image,
    previewUrl,
    isDragging
  } = useImg()


  return (
    <div className="w-full max-w-md">
      {!image ? (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center 
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
            transition-colors duration-200`}
          role="img"
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            accept="image/*"
            className="hidden"
            id="file-upload"
            type="file"
            onChange={handleFileSelect}
          />
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <Upload className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">
                Arrastra y suelta tu imagen aquí o
              </p>
              <label
                className="inline-flex text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
                htmlFor="file-upload"
              >
                selecciona un archivo
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
          </div>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden">
          <img
            alt="Preview"
            className="w-full h-auto"
            src={previewUrl as string}
          />
          <button
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            onClick={removeImage}
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      )}
    </div>
  )
}
