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
  blob: Blob | null;
  alt: string;
  className: string;
}

interface ProfileInfoProp {
  // img : string;
  username: string;
  bio: string;
  joinDate: string;
  lastSeenDate: string;
  className: string;
}

interface ProfileStatProp {
  likeCount: number;
  postCount: number;
  followerCount: number;
  className: string;
}

interface LatestPostProp {
  title: string;
  content: string;
  date: string;
  boxType: string;
  className: string;
}

interface TagsProp {
  tags: string[];
  limit: number;
  className: string;
}

export type {
  PostStatsProp,
  PictureProp,
  ThreadStatsProp,
  ProfileInfoProp,
  ProfileStatProp,
  LatestPostProp,
  TagsProp,
};
