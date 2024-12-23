import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";

const ProfileImageUploader = ({ profilePicture, onUpload, loading }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(
    profilePicture
      ? `data:image/png;base64,${profilePicture}`
      : "/assets/banner/gallery1.jpg"
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedImage) {
      //   alert("No image selected!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      onUpload(base64String);
      //   alert("Image uploaded successfully!");
      setIsEditing(false); // Exit editing mode
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      {/* Image Container */}
      <div className="w-full h-full rounded-md overflow-hidden relative">
        <img
          src={preview}
          alt="Profile Preview"
          className="w-full h-full object-cover"
          style={{
            borderRadius: "20px",
            background: "red",
            opacity: loading ? "0.4" : "1",
          }}
        />
        {!isEditing ? (
          // Edit Icon
          <button
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
            onClick={() => setIsEditing(true)}
          >
            <FaEdit className="text-blue-500" size={18} />
          </button>
        ) : (
          // Save Icon
          <button
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
            onClick={handleUpload}
          >
            <FaSave className="text-green-500" size={18} />
          </button>
        )}
      </div>

      {/* File Input */}
      {isEditing && (
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer z-0"
          //   // Ensure it doesn’t block the save button
        />
      )}
    </div>
  );
};

export default ProfileImageUploader;
