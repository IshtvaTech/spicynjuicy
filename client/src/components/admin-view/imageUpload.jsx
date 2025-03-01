import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const ProductImageUpload = ({ imageFile, setImageFile, uploadImageUrl, setUploadImageUrl,isEditMode }) => {
  const inputRef = useRef(null);
  const [imageLoadingState, setImageLoadingState] = useState(false);

  function handleImageFileChange(event) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    if (!imageFile) return;

    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/products/upload-image",
        data
      );
      console.log(response, "response");

      if (response?.data?.success) {
        setUploadImageUrl(response.data.result.url);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          accept="image/*"
          disabled={isEditMode}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`${isEditMode ? "cursor-not-allowed" : ""}flex flex-col items-center justify-center h-32 border border-dashed border-gray-300 rounded-lg cursor-pointer p-4 text-center`}


          >
            <UploadCloudIcon className="w-10 h-10 text-gray-500 mb-2" />
            <span className="text-gray-600">Drag & drop or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="h-10 bg-gray-100" />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
        {imageLoadingState && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
      </div>
    </div>
  );
};

export default ProductImageUpload;
