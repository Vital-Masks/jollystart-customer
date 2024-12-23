import React, { useState } from "react";

const ProffImageUploader = ({ gallery }) => {
  const [images, setImages] = useState(gallery || []); // Initialize with gallery
  const [newImages, setNewImages] = useState([]); // Store new images for upload
  const [Loading, setLoading] = useState(false);
  // Convert image to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Handle new file input
  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    const base64Files = await Promise.all(files.map((file) => toBase64(file)));
    setImages((prev) => [...prev, ...base64Files]);
  };

  // Remove a new image (not yet uploaded)
  const handleRemoveNewImage = (base64) => {
    setNewImages((prev) => prev.filter((img) => img !== base64));
  };

  // Remove an existing image from the gallery
  const handleRemoveGalleryImage = (base64) => {
    setImages((prev) => prev.filter((img) => img !== base64));
    // TODO: Make a DELETE request to the server to remove this image
    console.log("Removing image from gallery:", base64);
  };

  // Submit new images
  const handleSubmit = () => {
    // TODO: Replace this console log with an actual POST request to the server
    console.log("Uploading new images:", newImages);
    setImages((prev) => [...prev, ...newImages]);
    setNewImages([]);
  };

  const handlePut = async () => {
    console.log(images);
    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);

    let obj = {
      gallery: images,
    };
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.jollystarssc.com/api/member/" + userData._id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("POST request successful. Response:", data);
    } catch (error) {
      console.error("Error during POST request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-4 px-10">
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add picture
        </label>
        <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
          <div className="text-center">
            <div className="flex mt-4 text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  multiple
                  onChange={handleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {newImages.map((img, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={img}
                alt="New Preview"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <button
                onClick={() => handleRemoveNewImage(img)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
        {/* <button
          onClick={handleSubmit}
          style={{
            marginTop: "10px",
            padding: "5px 15px",
            cursor: "pointer",
          }}
        >
          Submit New Images
        </button> */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {images.map((img, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={img}
                alt="Gallery"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <button
                onClick={() => handleRemoveGalleryImage(img)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="w-full m-auto text-center">
          <button
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52 m-auto"
            type="submit"
            onClick={handlePut}
          >
            {Loading ? "Loading... " : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProffImageUploader;
