export const base64ToFile = (base64String, fileName) => {
    // Remove data URL prefix
    const base64Content = base64String.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
  
    // Convert the base64 content to a Blob
    const byteCharacters = atob(base64Content);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: 'image/png' });
  
    // Create a File object from the Blob
    const file = new File([blob], fileName, { type: 'image/png' });
    
    return file;
  };
  