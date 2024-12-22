function formatDate(dateString) {
  const date = new Date(dateString); // Convert the string to a Date object

  // Get day, month, and year from the Date object
  const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits for day
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();

  // Return the formatted date as DD-MM-YYYY
  return `${day}-${month}-${year}`;
}
export default formatDate;
