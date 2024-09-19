export const getTitle = (likeCount: number) => {
  switch (true) {
    case likeCount <= 10:
      return "Chicken Leg";
      break;
    case likeCount <= 20:
      return "Try-harder";
      break;
    case likeCount <= 40:
      return "Gym Rat";
      break;
    case likeCount <= 100:
      return "Gym Bro";
      break;
    case likeCount <= 500:
      return "Acient Gymmer";
      break;
    default:
      return "Mr.Olympia";
      break;
  }
};

export const getDate = (creationDateStr: string) => {
    console.log('creationDateStr.', typeof(creationDateStr))
  const creationDate = new Date(creationDateStr);

  // Extract just the date part (year, month, day)
  const year = creationDate.getFullYear();
  const month = creationDate.getMonth() + 1; // Months are 0-indexed in JS
  const day = creationDate.getDate();

  // Format the date
  const formattedDate = `${year}-${month}-${day}`;
  return (formattedDate); // Output: "2024-7-11"
};

// const getUserIdFromCookies = () => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; userId=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//   };
