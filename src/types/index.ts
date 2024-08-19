export interface PostStatsProp {
  likeCount: number;
  className?: string;
}

export interface ThreadStatsProp {
  postCount: number;
  viewCount: number;
  likeCount?: number;
  lastUpload: string;
  className?: string;
}

export interface PictureProp {
  blob: Blob | null;
  alt: string;
  className?: string;
}

export interface ProfileInfoProp {
  // img : string;
  id: number;
  userName: string;
  email: string;
  bio: string;
  stringAvatar?: string;
  joinDate: string;
  lastSeen: string;
  className?: string;
  likeCount: number;
  postCount: number;
  followerCount: number;
}

export interface ProfileStatProp {
  likeCount: number;
  postCount: number;
  followerCount: number;
  className?: string;
}

export interface LatestPostProp {
  title: string;
  content: string;
  date: string;
  boxType: string;
  className?: string;
}

export interface TagsProp {
  tags: string[];
  limit: number;
  className?: string;
}

export interface PostDetailProp {
  threadId: string;
  postId: number;
  authorId: number;
  content: string;
  encodedImages: string[];
  className?: string;
}

export interface ThreadInfoProp {
  id: number;
  creationDateTime: string;
  likeCount: number;
  viewCount: number;
  beenReport: boolean;
  postCount: number;
  authorName: string;
  authorId: string;
  authorAvatar: string;
  name: string;
  className?: string;
}

export interface PostInfoProp {
  id: number;
  creationDateTime: string;
  likeCount: number;
  viewCount: number;
  beenReport: boolean;
  beenLiked: boolean;
  postCount: number;
  authorName: string;
  authorId: string;
  authorAvatar: string;
  name: string;
  className?: string;
}

export interface NavbarProps {
  title: string;
  listOfTags: string[];
  mID: number; 
}

export interface UserBanListTableProp {
  username: string;
  banReason: string;
  banDuration: string;
}
