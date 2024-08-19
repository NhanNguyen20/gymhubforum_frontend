export interface PostStatsProps {
  likeCount: number;
  className?: string;
}

export interface ThreadStatsProps {
  postCount: number;
  viewCount: number;
  likeCount?: number;
  lastUpload: string;
  className?: string;
}

export interface PictureProps {
  blob: Blob | null;
  alt: string;
  className?: string;
}

export interface ProfileInfoProps {
  // img : string;
  id: number;
  userName: string;
  email: string;
  bio: string;
  stringAvatar?: string;
  joinDate: string;
  lastSeen: string;
  className?: string;
}

export interface ProfileStatProps {
  likeCount: number;
  postCount: number;
  followerCount: number;
  className?: string;
}

export interface LatestPostItemProps {
  content: string;
  date: string;
  boxType: string;
  className?: string;
}

export interface LatestPostProps {
  latestPost: LatestPostItemProps;
  title: string;
  avatar: Blob | null;
  tags: TagsProps;
}

export interface TagsProps {
  tags: string[];
  limit: number;
  className?: string;
}

export interface PostDetailProps {
  threadId: string;
  postId: number;
  authorId: number;
  content: string;
  encodedImages: string[];
  className?: string;
}

export interface ThreadInfoProps {
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

export interface PostInfoProps {
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

export interface ProfilePreviewProps {
  account: {
    email: string;
    username: string;
    likeCount: number;
    password: string;
    bio: string;
    avatar?: string;
  };
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
