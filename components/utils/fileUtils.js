// utils/fileUtils.js
export const convertFileToBase64 = (file) => {
  console.log(file);
  
  return new Promise((resolve, reject) => {
    if (typeof file === "string") {
      resolve(file);
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result.split(",")[1]);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};
