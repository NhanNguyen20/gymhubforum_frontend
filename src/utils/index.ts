export const getTitle = (likeCount:number) => {
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
}

// const getUserIdFromCookies = () => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; userId=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//   };