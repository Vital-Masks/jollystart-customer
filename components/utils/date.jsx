const isValidDate = (dateString) => {
  // Use the Date constructor to parse the date string
  const date = new Date(dateString);
  // Check if the parsed date is a valid date
  return !isNaN(date.getTime());
};

const formatDate = (date, formatString = "EEE, d MMM, yyyy. h:mm a") => {
  // Use the Date constructor to parse the date string
  const parsedDate = new Date(date);
  // Check if the parsed date is valid
  if (isValidDate(parsedDate)) {
    // Format the date using the provided format string
    const formattedDate = parsedDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    return formattedDate;
  } else {
    // If the date is invalid, return the original date string
    return date;
  }
};

export default formatDate;
