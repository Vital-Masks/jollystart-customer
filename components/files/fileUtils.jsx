export  const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        // Extract the base64 portion from the data URL
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      } else {
        reject(new Error('Failed to read file as Data URL'));
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};


export const isBase64 = (str) => {
  // Regular expression to match base64 string pattern
  const base64Pattern = /^(data:){0,1}([a-zA-Z0-9+/]{4})*([a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=){0,1}$/;
  
  // Test the string against the pattern
  return base64Pattern.test(str);
};

