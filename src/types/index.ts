interface PostStatsProp {
  likeCount: number;
  className: string;
}

interface ThreadStatsProp {
  postCount: number;
  viewCount: number;
  lastUpload: string;
  className: string;
}

interface PictureProp {
  src: string;
  alt: string;
  className: string;
}

interface ProfileInfoProp {
    // img : string;
    username: string;
    title: string;
    bio: string;
    joinDate: string;
    lastSeenDate: string;
    className: string;
}


export type { PostStatsProp, PictureProp, ThreadStatsProp, ProfileInfoProp };
